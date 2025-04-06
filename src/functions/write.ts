import path from "node:path";
import { execForMcpSave } from "../utils/exec.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { root } from "../utils/rootContext.js";

export const write = async ({
    file,
    content
}: {
    file: string;
    content: string;
}): Promise<CallToolResult> => {
    const absolutePath = path.join(root, file);
    return execForMcpSave(`echo "${content.replace('`', '``')}" > ${absolutePath} && ls ${absolutePath}`, [absolutePath]);
}