const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

module.exports = new GraphQLEnumType({
  name: 'AssetType',
  values: {
    BOOK: { value: 0 },
    MAGAZINE: { value: 1 },
  },
});
