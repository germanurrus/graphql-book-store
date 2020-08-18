const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

module.exports = new GraphQLEnumType({
  name: 'Status',
  values: {
    AVAILABLE: { value: 0 },
    INUSE: { value: 1 },
  },
});
