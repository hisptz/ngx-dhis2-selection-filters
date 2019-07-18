# DHIS2 selection filters

[![Build Status](https://travis-ci.org/hisptz/ngx-dhis2-selection-filters.svg?branch=master)](https://travis-ci.org/hisptz/ngx-dhis2-selection-filters)
[![dependencies Status](https://david-dm.org/hisptz/ngx-dhis2-selection-filters/status.svg)](https://david-dm.org/hisptz/ngx-dhis2-selection-filters)
[![devDependencies Status](https://david-dm.org/hisptz/ngx-dhis2-selection-filters/dev-status.svg)](https://david-dm.org/hisptz/ngx-dhis2-selection-filters?type=dev)
[![Maintainability](https://api.codeclimate.com/v1/badges/796035eabe80e66f1979/maintainability)](https://codeclimate.com/github/hisptz/ngx-dhis2-selection-filters/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/796035eabe80e66f1979/test_coverage)](https://codeclimate.com/github/hisptz/ngx-dhis2-selection-filters/test_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/hisptz/ngx-dhis2-selection-filters.svg)](https://greenkeeper.io/)

Container for DHIS2 selection filters .i.e. Data, Period, Organisation uni and other based on angular 6+

## installation

`npm i @iapps/ngx-dhis2-selection-filters`

## Usage

If the module is to be imported in the app.module or any other feature module, then import as

`import { NgxDhis2SelectionFiltersModule } from '@iapps/ngx-dhis2-selection-filters';`

then add this in the imports

```
imports: [
    ...
    NgxDhis2SelectionFiltersModule,
    ...
    ]
```

Once imported, dhis2 selection filters can be called in as

```
<ngx-dhis2-selection-filters
  (filterUpdate)="onFilterUpdateAction($event)"
  [dataSelections]="dataSelections"
  [selectionFilterConfig]="selectionFilterConfig"
>
</ngx-dhis2-selection-filters>
```

Inputs

| Input                 | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| dataSelections        | This is a list of selected dimensions data, period organisation collectively |
| selectionFilterConfig | This when passed overrides default configuration for the selection filters   |

Input models

dataSelections, List as based on the following model

| Item      | Description                               |
| --------- | ----------------------------------------- |
| dimension | Specify dimension type eg pe, ou, dx etc  |
| items     | List of selected items based on dimension |

orgUnitFilterConfig

| Item                            | Description                                                                                                 | Default value |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| showDataFilter                  | Specify whether to show or hide data(dx) selection filter                                                   | true          |
| showPeriodFilter (optional)     | Specify whether to show or hide period(pe) selection filter                                                 | true          |
| showOrgUnitFilter (optional)    | Specify whether to show or hide organisation unit(ou) selection filter                                      | none          |
| showLayout (optional)           | Specify whether to show or hide layout selection filter                                                     | false         |
| showDynamicDimension (optional) | Specify whether to show or hide dynamic dimension selection filter                                          | true          |
| orgUnitFilterConfig             | Org unit filter configurations, [Read more](https://www.npmjs.com/package/@iapps/ngx-dhis2-org-unit-filter) |               |

Outputs

| Output       | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| filterUpdate | This emitted data selection as based on what has been updated |

Sample output

```
[{
  "dimension": "ou",
  "items": [
    {
      "id": "PMa2VCrupOd",
      "name": "Kambia",
      "level": 2,
      "type": "ORGANISATION_UNIT"
    },
    {
      "id": "at6UHUQatSo",
      "name": "Western Area",
      "level": 2,
      "type": "ORGANISATION_UNIT"
    },
    {
      "id": "TEQlaapDQoK",
      "name": "Port Loko",
      "level": 2,
      "type": "ORGANISATION_UNIT"
    }
  ]
}, {
  "dimension": "dx",
  "items": [
    {
      "id": "PMa2VCewpOd",
      "name": "ANC Coverage",
      "type": "INDICATOR"
    }
  ]
}, {
  "dimension": "pe",
  "items": [
    {
      "id": "LAST_YEAR",
      "name": "Last year",
      "type": "RelativeYearly"
    }
  ]
}]
```
