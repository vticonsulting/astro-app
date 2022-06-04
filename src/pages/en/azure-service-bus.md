---
title: Azure Service Bus
layout: ../../layouts/main-layout.astro
---

[Service Bus Documentation](https://docs.microsoft.com/en-us/azure/service-bus/)

The Exemplar-Prod resource groups contains two Service Bus Namespaces. 
- han-prod-pdfconverter-bus-east
- han-prod-servicebus

Each namespace contains one to many queues which are used by various applications (mostly Azure WebJobs).
The queues send messages from one application to another to perform a specific task.

The messages can be simple text to serialized objects depending on your needs.

<u>han-prod-pdfconverter-bus-east</u>
Contains three queues used by the HTMLtoPDFConverter WebJob. This service bus namespace is shared by both the production environment and the development environment.
![image.png](/.attachments/image-cb78d07b-45c4-4896-8c54-296fd86cf2dc.png)

<u>han-prod-servicebus</u>
Contains nine queues used mostly by WebJobs.


| Queue Name          | Messages Sent From    | Messages Sent To          | Comments        |
| ------------------- | --------------------- | ------------------------- | --------------- |
| alert-notifications |                       |                           | Can be removed? |
| assignments         | XactwareImportService | XactwareAssignmentService |                 |
| import              | Hancock.Web.Services  | XactwareImportService     |                 |
| notifications       |                       |                           |                 |
|                     |                       |                           |                 |
|                     |                       |                           |                 |
|                     |                       |                           |                 |
|                     |                       |                           |                 |
|                     |                       |                           |                 |
|                     |                       |                           |                 |



