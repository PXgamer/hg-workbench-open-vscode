import vscode from 'vscode';
import path from 'path';
import {exec} from 'child_process';
const config = vscode.workspace.getConfiguration('hgwo');

function activate(context) {
  const disposable = vscode.commands.registerCommand('hgwo.TortoiseHg', contextInfo => {
    let pathName = contextInfo.fsPath;

    if (contextInfo.scheme === 'file') {
      pathName = path.dirname(pathName);
    }

    exec(`thgw.exe -R "${pathName}"`);

    if (config.notify) {
      vscode.window.showInformationMessage(`Opening ${pathName} in TortoiseHg`);
    }
  });

  context.subscriptions.push(disposable);
}
export {activate};

function deactivate() {
}
export {deactivate};