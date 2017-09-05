var vscode = require('vscode');
var path = require('path');
var exec = require('child_process').exec;
var config = vscode.workspace.getConfiguration('hgwo');

function activate(context) {
    var disposable = vscode.commands.registerCommand('hgwo.TortoiseHg', function (contextInfo) {
        var pathName = contextInfo.fsPath;

        if (contextInfo.scheme === 'file') {
            pathName = path.dirname(pathName);
        }

        exec("thgw.exe -R \"" + pathName + "\"");

        if (config.notify) {
            vscode.window.showInformationMessage('Opening ' + pathName + ' in TortoiseHg');
        }
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;