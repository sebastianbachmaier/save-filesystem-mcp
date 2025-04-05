import path from "node:path";
import { execForMcpSave } from "../utils/exec.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { root } from "../utils/rootContext.js";

export const move = async ({
  from,
  to
}: {
  from: string;
  to: string;
}): Promise<CallToolResult> => {
  const absoluteFromPath = path.join(root, from);
  const absoluteToPath = path.join(root, to);
  return execForMcpSave(
    `mv ${absoluteFromPath} ${absoluteToPath} && ls ${absoluteToPath}`,
    [absoluteToPath, absoluteToPath]
  );
};
