---
title: Exemplar Core API
description:  An overview on how to add an endpoint to _Exemplar.Core.Api_
layout: ../../layouts/main-layout.astro
---

## Step 1: Create Controller From Class

Right click on the **Controllers** folder and select _Add > New Item..._

![Alt text](/assets/right-click-controllers-folder.png "a title")


Select **Class**


![Alt text](/assets/select-class.png "a title")
  
Give the name of the class the same name of the table that the end point will represent followed by _Controller_.

**Example**  

`AvailableServiceTypeController`

## Step 2: Configure the Controller

1. Inherit from the `BaseController` class
2. Add the `Route` attribute (_api followed by the table name pluralized_)
3. Add the `Authorize` attribute

![Alt text](/assets/add-authorize-attribute.png "a title")

## Step 3: Create the Repo

1. Right click on the **Repositories** folder and select *Add > New Item...*. 
2. Select **Class** and name it after the table name followed by Repo.

**Example** 

`AvailableServiceTypeRepo`

Only create the method(s) that you need. We do not want to create unused methods.


## Step 4: Add the Repo to the Container

Open the startup class at the root of the project and search for the `ConfigureServices` method. Scroll to the bottom until you see the area where we are registering the repos. 

Add your repo alphabetically in the list:

![Alt text](/assets/add-repo-to-configure-services.png "a title")

## Step 5: Inject services into Controller Constructor

There will be 3 primary services we will inject into our controller:

1. `ExemplarMessageRepo` - this service will log any errors or trace messages to the database. This class should be passed to the base class.
2. `IMapper` - this is the _AutoMapper_ service that will be used to map our domain objects to our **Dtos**.
3. `ControllerRepo` - this is the main repo for the entity that the endpoint represents.

![Alt text](/assets/insert-services-into-controller-constructor.png "a title")

## Step 6: Configure Auto Mapper

AutoMapper takes a source object and transforms it to a destination object. Typically this is from a domain object to a data transfer object (dto) or vice versa. To do this, mapping profiles must be created.

All mapping profiles are in the folder MappingProfiles. 

To create a new mapping profile for your repo:

1. Right-click on the MappingProfiles folder and select Add > New Item... 
2. Select class. 
3. Save the class name as your table name followed by profile.  

**Example**

`AvailableServiceTypeProfile`

Create the appropriate mappings for the source and destinations. 

Below is an example:

![Alt text](/assets/example-automapper-mapping.png "a title")

Above, this class creates 2 mapping profiles: 

- one for a mapping between AvailableServiceType and `AvailableServiceTypeDto` 
- another for AvailableServiceType and `AvailableServiceTypeListDto`.

The method `ReverseMap` will create a two way mapping between the objects.

The `ForAllOtherMembers` method should always be used or any new properties added to the source object could cause an error if not included in the profile.

## Step 7: Add the needed endpoint methods

Our web api must be restful. Please understand what this entails. Follow other controller examples on how to route your endpoint methods. The switch statement then calls the auto mapper profile based on the method parameter. The profile then returns the

**Default Mapping Types**

Default mapping types are used to help determine how auto mapper should map the response object by calling the profile that matches the mapping type requested. There are currently two default mapping types: Master, which maps the complete record, and List, which returns data suitable for a dropdown list. You can create a custom mapping type that corresponds to an auto mapping profile to fit your own needs but will need to still inherit from the default mapping type.

**Default Mapping type example:**

In the example Get method below, the second parameter is the defaultMappingProfile enum which is defaulted to 0 (master record). When the switch statement is evaluated, auto mapper will return the profile indicated by the defaultMappingProfile parameter.

![[]]
![Alt text](/assets/default-mapping-type-example.png "Default Mapping Type Example")

**LINKS**  

- [**API Endpoint Creation Training**](https://hancockclaimsconsultants-my.sharepoint.com/:v:/r/personal/mhouser_hancockclaims_com/Documents/Recordings/API%20Endpoint%20Creation%20Training-20210824_131438-Meeting%20Recording.mp4?csf=1&web=1&e=HWT6og)
