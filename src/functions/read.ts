import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import path from "node:path";
import { execForMcpSave } from "../utils/exec.js";
import { root } from "../utils/rootContext.js";

export const read = async ({
  file
}: {
  file: string;
}): Promise<CallToolResult> => {
  const absolutePath = path.join(root, file);
  return execForMcpSave(`cat ${absolutePath}`, [absolutePath]);
};
