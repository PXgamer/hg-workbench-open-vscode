var vscode = require('vscode');
var exec = require('child_process').exec;
var config = vscode.workspace.getConfiguration('hg-workbench-open');

function activate(context) {
    var disposable = vscode.commands.registerCommand('extension.TortoiseHg', function (contextInfo) {
        var pathName = contextInfo.fsPath;

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