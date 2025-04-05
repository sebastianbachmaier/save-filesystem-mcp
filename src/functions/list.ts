import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { execForMcp } from "../utils/exec.js";
import { root } from "../utils/rootContext.js";

export const list = async ({
  depth = 1,
}: {
  depth?: number;
}): Promise<CallToolResult> => {
  return execForMcp(
    `tree ${root} ${depth ? `-L ${depth}` : ""}`
  );
};
