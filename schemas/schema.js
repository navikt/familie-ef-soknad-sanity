// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import sporsmal from './sporsmal';
import header from './header';
import side from './side';
import localeString from "./locale/localeString";
import localeDate from "./locale/localeDate";
import avsnitt from './avsnitt';
import forside_arbeidssoker from './side_arbeidssoker';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    sporsmal,
    header,
    side,
    forside_arbeidssoker,
    localeString,
    localeDate,
    avsnitt
  ])
})
