const vscode = require("vscode");

module.exports = {
  activate: async (context) => {
    const rubberduckExtension = vscode.extensions.getExtension(
      "rubberduck.rubberduck-vscode"
    );

    if (rubberduckExtension == null) {
      throw new Error("Rubberduck extension not found");
    }

    const rubberduckApi = rubberduckExtension.exports;

    const file = vscode.Uri.joinPath(
      context.extensionUri,
      "template",
      "generate-react-component.rdt.md"
    );
    const data = await vscode.workspace.fs.readFile(file);
    const template = Buffer.from(data).toString("utf8");

    rubberduckApi.registerTemplate({ template });

    vscode.commands.registerCommand(
      "rubberduck-react.generateReactComponent",
      async () => {
        await vscode.commands.executeCommand(
          "rubberduck.startConversation",
          "rubberduck-react.generate-react-component"
        );
      }
    );
  },

  deactivate: async () => {
    // noop
  },
};
