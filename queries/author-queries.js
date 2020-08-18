const graphql = require('graphql');
const Author = require('../models/author');
const { AuthorType } = require('../types/RelatedTypes');

const { GraphQLID, GraphQLList } = graphql;

module.exports = {
  author: {
    type: AuthorType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      // return find(authors, { id: args.id });
      return Author.findById(args.id);
    },
  },
  authors: {
    type: new GraphQLList(AuthorType),
    resolve(parent, args) {
      // return authors;
      return Author.find({});
    },
  },
};
