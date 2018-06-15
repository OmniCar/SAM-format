# SAM-format
Library for formatting data according to locale and options given.

## Installation (for development)

`yarn` or `npm i` (examples below are using `yarn`)

## Installation on clients

`yarn add omnicar/sam-format#0.0.1`

Where `#0.0.1` indicates the `Github` release tag.

## Usage

First call the `init` function with the parameters that match your environment (dev/staging/prod etc.) or current needs.

These parameters are available:

* `isoName` - (**da-DK** | sv-SE) identifier for locale

## Formatters

There are 3 formatters:

### formatMileage(value, [opts])

`showDecimals` (true | **false**) show decimals in formatted number

`symbolDisplayType` (**APPEND** | PREPEND | NONE) where to put symbol related to number type

### formatCurrency(value, [opts])

`showDecimals` (**true** | false) show decimals in formatted number

`symbolDisplayType` (**APPEND** | PREPEND | NONE) where to put symbol related to number type

### formatDate(value, [opts])

`showTime` (true | **false**) append time in formatted date

`rawFormat` (string) pass date format string to format with

_example: `formatDate(new Date(2018-01-23), {rawFormat: 'YYYYMMDD'})` // '20189123'_

## Tests

To run `jest` tests either run:

`yarn test`

or to run tests in watch mode run:

`yarn test-watch`

### Compile application (`tsc`):

`yarn tsc`
