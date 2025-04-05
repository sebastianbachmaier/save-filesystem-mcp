import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

export const success = (message: string): CallToolResult => {
  return {
    content: [
      {
        type: "text",
        text: `Success: ${message}`,
      },
    ],
  };
};

export const error = (err: unknown): CallToolResult => {
  return {
    content: [
      {
        type: "text",
        text: `Error: ${err}`,
      },
    ],
  };
};
