---
title: Impersonate
layout: ../../layouts/main-layout.astro
---

## Impersonate Insurance Adjuster

I have created a generic Insurance Adjuster user that we can now log in as to test the Customer Portal. This user is set up in QA. Developers, you will need to set the user up in your local environments as well. Here are the details.

**Exemplar Info**
Adjuster First Name: **Hancock**
Adjuster Last Name: **Adjuster**
Adjuster Email: **HancockAdjuster@gmail.com**

To log into Exemplar use the following Hancock Identity credentials:
Email: **HancockAdjuster@gmail.com**
Password: **ImpersonateAdjuster123!**

**Gmail Info**
Username: **HancockAdjuster**
Password: **ImpersonateAdjuster123!**

To log into Gmail use credentials above.

Developers, The next steps must be performed to add to local environments in the following order:

**1. Add user to Local Identity database**
**a.** Log into your local identity server
**b.** The Admin Panel should appear. If not perform the steps in the section **Adding Identity Admin Role** at the bottom of this article then continue to step C.
**c.** Log out of Identity and log back in. You should now see the admin panel.
**d.** Click the User Admin link
**e.** Enter in HancockAdjuster@gmail.com
**f.** Click the Register User button
**g.** Log out of Identity
**h.** Log back into but this time click the Forgot Your Password Link
**i.** Enter the Email address HancockAdjuster@gmail.com and click submit
**j.** You should receive an Email delivered to HancockAdjuster@gmail.com Click on the link found in this Email which should redirect you to localhost Identity Server. From here enter the password: ImpersonateAdjuster123!



Local Data Queries
To add this Exemplar user to your local database run the following query:

INSERT INTO [USER]
([AddressLatitude],[AddressLongitude],[Comment],[CreatedBy] ,[CreatedOn],[DeactivationDate],[FirstName],[HaagCertificationNumber],[Initials],[IsActive],[IsApproved],[IsHaagCertified],[IsInCollections],[LastLogin],[LastName],[MailingCity],[MailingPostalCode],[MailingStateId],[MailingStreetAddress1],[MailingStreetAddress2],[MiddleName],[PrimaryEmail],[PrimaryPhone],[PrimaryPhoneExt],[RoleId],[SecondaryEmail],[SecondaryPhone],[ServiceCity],[ServicePostalCode],[ServiceStateId],[ServiceStreetAddress1],[ServiceStreetAddress2],[SmsEmail],[UserTypeId])
VALUES
(34.1887625,-84.2300407,null, 1,getdate(),null,'Hancock','','hst',1,null,0,0,null,'Adjuster','Cumming',30040,11,'6170 Parris Cir','','','HancockAdjuster@gmail.com','(323) 232-3232','',8,'','','Cumming',30040,11,'6170 Parris Cir','','',3)


**Adding Identity Admin Role**

**NOTE:** Change youremail@hancockclaims.com to your email in 2nd query below

  INSERT INTO [HancockIdentityUsers].[dbo].[AspNetRoles]
  (Name,NormalizedName,ConcurrencyStamp)
  values
  ('Admin','ADMIN',null)

  INSERT INTO [HancockIdentityUsers].[dbo].[AspNetUserRoles]
  (UserId, roleid)
  select id,
  (select id from aspnetroles where name='Admin') as RoleId
   from aspnetusers where username='youremail@hancockclaims.com'







## Impersonate Service Technician

I have created a generic Service Tech user that we can now log in as to test service tech related work. Feel free to move this user into different regions if required. This user is set up in QA. You will need to set the user up in your local environments as well. Here are the details.

**Exemplar Info**

Service Tech First Name: **Hancock**
Service Tech Last Name: **Tech**
Service Tech Email: **HancockServiceTech@gmail.com**

To log into Exemplar use the following Hancock Identity credentials:
Email: **HancockServiceTech@gmail.com**
Password: **ImpersonateServiceTech123!**

**Gmail Info**
Username: **HancockServiceTech**
Password: **ImpersonateServiceTech123!**

To log into Gmail use credentials above.

Developers, The next steps must be performed in the following order to add user to local environment:

**1. Add user to Local Identity database**
**a.** Log into your local identity server
**b.** The Admin Panel should appear. If not perform the steps in the section **Adding Identity Admin Role** at the bottom of this article then continue to step C.
**c.** Log out of Identity and log back in. You should now see the admin panel.
**d.** Click the User Admin link
**e.** Enter in HancockServiceTech@gmail.com
**f.** Click the Register User button
**g.** Log out of Identity
**h.** Log back into but this time click the Forgot Your Password Link
**i.** Enter the Email address HancockServiceTech@gmail.com and click submit
**j.** You should receive an Email delivered to HancockServiceTech@gmail.com. Click on the link found in this Email which should redirect you to localhost Identity Server. From here enter the password: ImpersonateServiceTech123!



Local Data Queries
To add this Exemplar user to your local database run the following query:

INSERT INTO [USER]
([AddressLatitude],[AddressLongitude],[Comment],[CreatedBy] ,[CreatedOn],[DeactivationDate],[FirstName],[HaagCertificationNumber],[Initials],[IsActive],[IsApproved],[IsHaagCertified],[IsInCollections],[LastLogin],[LastName],[MailingCity],[MailingPostalCode],[MailingStateId],[MailingStreetAddress1],[MailingStreetAddress2],[MiddleName],[PrimaryEmail],[PrimaryPhone],[PrimaryPhoneExt],[RoleId],[SecondaryEmail],[SecondaryPhone],[ServiceCity],[ServicePostalCode],[ServiceStateId],[ServiceStreetAddress1],[ServiceStreetAddress2],[SmsEmail],[UserTypeId])
VALUES
(34.1887625,-84.2300407,null, 1,getdate(),null,'Hancock','','hst',1,null,0,0,null,'Tech','Cumming',30040,11,'6170 Parris Cir','','','HancockServiceTech@gmail.com','(323) 232-3232','',5,'','','Cumming',30040,11,'6170 Parris Cir','','',2)


**Adding Identity Admin Role**

**NOTE:** Change youremail@hancockclaims.com to your email in 2nd query below

  INSERT INTO [HancockIdentityUsers].[dbo].[AspNetRoles]
  (Name,NormalizedName,ConcurrencyStamp)
  values
  ('Admin','ADMIN',null)

  INSERT INTO [HancockIdentityUsers].[dbo].[AspNetUserRoles]
  (UserId, roleid)
  select id,
  (select id from aspnetroles where name='Admin') as RoleId
   from aspnetusers where username='youremail@hancockclaims.com'






