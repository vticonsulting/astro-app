---
title: Guide
description: Guide for working with the project
layout: ../../layouts/main-layout.astro
---


## Team

| Name                  | Project Status                        |
| --------------------- | ------------------------------------- |
| Customer Service      | Call Queue, Schedule                  |
| Scheduling Support    | Call Queue, Triage, Pending, Schedule |
| Field Services        | Assigned, Confirmed, Working          |
| Claims Services       | Review, Complete                      |
| Estimating Services   |                                       |
| Billing / Collections | Billed, Closed                        |


## Workflow

The claim starts when the adjuster calls in and submits a claim with a representative over the web portal. With all the necessary information (Claim Information, Service Type, Adjuster's Contact Information, and Billing Information).

Once the claim has been submitted with the assistance of the customer service representative, the claim is then pushed to Exemplar.

Customer support is part of the customer service department. The customer service representatives are required to make outbound calls to insureds on behalf of the insurance carriers, to schedule unaccompanied field inspections.


## Views/Pages

- Closed Projects
- Complete Claims
- Unpaid Invoices
- Claim Request
- Settings (Service Types, Announcements, FAQs, Territories, IA Firms, What's New, Tokens)
- Profile
- Users


## Customers (Carriers, Companies)

- Allstate
- Esurance
- Encompass
- California State Auto Association
- Liberty Mutual



## Actions

- Accept
- Add Application User
- Add Appoinment Button
- Add Business Unit
- Add Customer
- Add Insurance Adjuster
- Add Project
- Add Service Tech
- Bulk Assign
- Close Billed Projects
- Export to CSV
- Export to CSV
- Export to QBXML
- Reset Billed to Complete
- Reset List

## Project Structure

```diff
 📂 src/pages
 ┣ 📂 projects
 ┃ ┣ 📜 index.ts
 ┃ ┣ 📜 [id].tx
 ┃ ┣ 📜 create.ts
```