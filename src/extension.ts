import * as vscode from "vscode";

export const activate = async (context: vscode.ExtensionContext) => {
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
};

export const deactivate = async () => {
  // noop
};
