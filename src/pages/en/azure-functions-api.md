---
title: Azure Functions API
layout: ../../layouts/main-layout.astro
---

This project is an Azure Functions app, that responds to GET, POST, PUT, and DELETE endpoints.

## Prerequisites

- A GitHub account
- [Node.js and Git](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=mslearn_staticwebapp-github-jopapa) installed
- The [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions?WT.mc_id=mslearn_staticwebapp-github-jopapa) installed
- The [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=mslearn_staticwebapp-github-jopapa) installed

## Getting Started


1. Clone your new repository

   ```bash
   git clone https://github.com/victortolbert/frontend
   cd mslearn-staticwebapp/api
   ```

2. Create the file `api/local.setting.json` and modify its contents as follows:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node"
  },
  "Host": {
    "CORS": "http://localhost:3000,http://localhost:4200,http://localhost:5000,http://localhost:8080"
  }
}
```

1. Run the app

   ```bash
   npm start
   ```

## Resources

- [Azure Free Trial](https://azure.microsoft.com/en-us/free/?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [VS Code](https://code.visualstudio.com?wt.mc_id=mslearn_staticwebapp-github-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=mslearn_staticwebapp-github-jopapa)
- Azure Functions [local.settings.json](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#local-settings-file?WT.mc_id=mslearn_staticwebapp-github-jopapa) file

### Debugging Resources

- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?wt.mc_id=mslearn_staticwebapp-github-jopapa)
