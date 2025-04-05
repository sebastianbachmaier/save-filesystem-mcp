import util from "node:util";
import { exec as _exec } from "node:child_process";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { error, success } from "./message.js";
import { root } from "./rootContext.js";
export const execPromisified = util.promisify(_exec);

export const execForMcp = async (command: string): Promise<CallToolResult> => {
  try {
    const { stdout, stderr } = await execPromisified(command);
    if (stderr) {
      return error(stderr);
    }
    return success(stdout);
  } catch (err) {
    return error(err);
  }
};

export const execForMcpSave = async (
  command: string,
  absolutePathes: string[]
): Promise<CallToolResult> => {
  // Get absolute path of a file relative to current directory
  for (const absolutePath of absolutePathes) {
    if (!absolutePath.startsWith(root)) {
      return error(`File is not in the current directory: ${absolutePath}`);
    }
  }
  return execForMcp(command);
};
