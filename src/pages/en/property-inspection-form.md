---
title: Property Inspection Form
description: 
layout: ../../layouts/main-layout.astro
---

## 1242 PIF Report Refreshed Look: Presentation** 

Currently the Report that is being generated from the PIFA is an outdated presentation 
and is missing key data fields that are captured within the PIFA but not exposed on the 
PIF Report.  Ideally, this needs a refreshed look and some data points added to the 
document that is presented to the carrier.

_Main -> Interior -> Elevation -> Roof -> Roof Damaged Items -> Additional Items_

### Data Field Sections

- AC Coil Damage (_was Refrigeration coil damage_)
- Public Adjuster Present During Inspection? -- _photo?_
- Contractor Present During Inspection? -- _photo?_
- Garage Door Damaged (was Garage Damaged)
- Was a Repairability Assessment Requested? (_was Was a Brittleness Test Requested?_)
- Was a Repairability Assessment Performed? (_was Was a Brittleness Test Performed?_) 
- Contractor Identified Anomaly - Hancock Disagrees (_was Does Hancock disagrees with contractor hail damage?_) 

#### Interior

#### Exterior

#### Roof

- Roof Age (Years) _show only on the reports of Allstate carriers (NCT, Texas - HIC Form, LA Report, DI)_   
- Shingles
  - Shingle Gauge Photo Taken? Yes  No
  - Shingle Type (Already there)
  - Shingle Width 
  - Cupped/Curled Shingles (Already there)
  - Improper Shingle Exposure (already there)
- Gutters Damaged No? By Direction (N,S,E,W) w/ photo icon
- Gutters Damaged Yes? By Direction (N,S,E,W) w/ photo icon
  - LF only if damaged (no does not appear)

#### Elevation

- Front Risk Photo Taken? - move prior to directional elevation sections as it encompasses all elevations
- Elevation Photos -> Elevation Overview North/Front / NA (Repeat for each side/direction; East/Left; South/Back; West/Right)
  - Possibility to have each direction as their own elevation section and recognize the direction for the info
  - Downspout per direction
  - Window wrap per direction

#### Out Buildings (A building separate from, and subordinate to, the main house; an outhouse)
_show on the report only if a yes is selected_

#### Other Structures


### 1095 Acceptance Criteria

Migration Changes that are not included in Sprint 22_02 but will be for the next:

- Elevation schema changes to rebuild section to allow elevation per direction of North, South, East and West
- Outbuilding schema creation to build a new section to allow multiple outbuilding inputs

Report updates after all the migration updates below

Addition of Questions:

- Shingle Width:
- Shingle Exposure:
- HVAC (Other):
- Off-Ridge Vent Material
- Dryer Exhaust Present?
- Swamp Cooler Present?
- Solar Panel Present?
- Flat Roof Scupper Drain Present?

Gutter Questions Added/Removed
Free Form Field

Moving of Questions (will have to move properties between the models of sections):

- Shingle Gauge Photo Taken? (needs to be moved to roof but resides in main until)
- Pitch Gauge Photo Taken? (needs to be moved to roof but resides in main until)
- Fascia (needs to be moved to roof but resides in elevation until)
- Drip Edge Eaves Present? (needs to be moved to roof but resides in roof damaged items until)
- Drip Edge Rake Present? (needs to be moved to roof but resides in roof damaged items until)
- Valley Metal Present? (needs to be moved to roof but resides in roof damaged items until)
- Questions between Was a copy of Eagleview Provided? and Tarp Install / Remove & Reset (SF): (needs to be moved to main but reside in roof - additional items until)

Removal of Questions:

- Fascia N,S,E,W Damaged (needs to be removed in the migrations)

[999]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/999/ "Core - PIF - Populate Scope Notes onto diagram"
[1025]:https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1025/ "Core - PIF - Reordering"
[1189]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1189/ "Core - PIF - Reports"
[1093]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1093/ "Core - PIF - Report Refreshed Look: Data Fields"
[1242]: https://dev.azure.com/hancockclaimsconsultants/Exemplar/_workitems/edit/1242/ "Core - PIF - Report Refreshed Look: Presentation"
