# ca-reports

> dashboard for cooper aerial projects

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# ca-reports

## Issues:

Project Managers: `[{ 1: 'Kyle'}, { 2: 'Kim'}, { 3: 'Zach' }]`

create an array of objects that are the key: value `{ user.attributes['user-id']: user.attributes.name }`

use this array to feed a component that shows the data on the user and their work.

make similar arrays for other objects.

then make an array of associations between objects.

example:

Project Manager: Cost Proposals
`[{ user.id: [ costProposal.id, costProposal.id, costProposal.id ] }]`
`[{ 1: [1,2,5,9] }]`
