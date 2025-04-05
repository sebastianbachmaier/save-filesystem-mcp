import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { list } from "./functions/list.js";
import { read } from "./functions/read.js";
import { write } from "./functions/write.js";
import { move } from "./functions/move.js";

// Create server instance
const server = new McpServer({
  name: "save-filesystem-mcp ",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

server.tool(
  "tree-files",
  "using the tree comand to show all files in this directoy recursively depending on depth",
  {
    depth: z.number().optional().describe("depth of folders to list"),
  },
  ({ depth }) => {
    return list({ depth });
  }
);

server.tool(
  "read-file",
  "using the cat command to show the content of a file",
  {
    file: z.string().describe("file path to show"),
  },
  ({ file }) => {
    return read({ file });
  }
);

server.tool(
  "write-file",
  "using the echo command to write a file",
  {
    file: z.string().describe("file path to write"),
    content: z.string().describe("content to write"),
  },
  ({ file, content }) => {
    return write({ file, content });
  }
);

server.tool(
  "move-file",
  "using the mv command to move a file",
  {
    from: z.string().describe("file path to move"),
    to: z.string().describe("destination path"),
  },
  ({ from, to }) => {
    return move({ from, to });
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Modify-files-mcp MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
