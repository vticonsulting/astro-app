---
title: App Services
layout: ../../layouts/main-layout.astro
---

[Azure App Services Documentation](https://docs.microsoft.com/en-us/azure/app-service/)

The **HAN-PROD-ASE-EAST-EXEMPLAR** is the Azure App Service that hosts the Exemplar Web Application. It is currently configured to run 3 instances and is automatically set to scale up if activity reaches a certain threshold.

The app service currently has 3 slots with the first one being the production slot. The other two slots are for pre-production releases. When we're ready to push changes to production, we use the Swap command in Azure.

![image.png](/.attachments/image-2f008d17-36d6-4741-8bdb-351742f6f346.png)

The **HAN-PROD-IDENTITY** is the Azure App Service that hosts our Multi Factor Authentication. Users that access Exemplar from outside our Hancock network will be required to submit a token which is available using the Google Authenticator app.
