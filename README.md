# Metatool App

Metatool App is a GUI app to manage MCP tools using MCP. It has to be used with [mcp-server-metatool](https://github.com/metatool-ai/mcp-server-metatool) together. `mcp-server-metatool` is a proxy MCP server that joins MCP servers configured in this Metatool App GUI. It supports routing `list_tools` and `call_tool` in MCP.

The app is prioritized to be self hostable at first, and it is completely free and open source.

## Installation
To get started with Metatool App, the eastiest way is to clone the repository and use Docker Compose to run it.

```bash
git clone https://github.com/metatool-ai/metatool-app.git
cd metatool-app
docker compose up --build -d
```

You also need a MCP Client to connect to `mcp-server-metatool`. For example if you are using Claude Desktop, the config json may look like this:
```json
{
  "mcpServers": {
    "metatool": {
      "command": "mcp-server-metatool",
      "args": [],
      "env": {
        "METATOOL_API_KEY": "<your api key>"
      }
    }
  }
}
```

You can get the API key from the Metatool App's API Keys page.

## Demo video TBA

## Concepts

- MCP Server Metatool: you only need to configure once to connect to mcp-server-metatool, then you can manage tools in Metatool App forever. `mcp-server-metatool` is a proxy MCP server that itself is a MCP Client that connects to and joins MCP servers tools configured in this Metatool App GUI. For details check out [mcp-server-metatool](https://github.com/metatool-ai/mcp-server-metatool) repo.
- GUI Metatool App: use GUI to manage MCP servers integrations: the servers and tools can be dynamically added or removed on the go through GUI.
- Projects and API Keys: at project level you can create API Keys for connection and auth. Project level enables usages across MCP Clients. E.g. you can have default project to use with Claude Desktop and another project to use with another MCP Client.
- Profiles layer under projects: each project can have multiple profiles, each profile can have different tools and configurations. And you can activate a profile for a project and have exactly one profile active at a time. You can easily switch between profiles using the GUI and don't need to worry about reconfiguring your MCP Client connections to MCP servers.
- Tools Management: under profile level you can also toggle on-offs of mcp servers you added.
- Tool level of MCP servers toggle on-offs are TBA.

## License
Elastic License 2.0 (ELv2)