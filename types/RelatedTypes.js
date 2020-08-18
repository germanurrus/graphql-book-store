const graphql = require('graphql');
const Book = require('../models/book');
const Author = require('../models/author');
const AssetType = require('./Asset');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    authorId: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    status: { type: GraphQLString },
    assetType: { type: AssetType },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // return find(authors, { id: parent.authorId });
        return Author.findById(parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return filter(books, { authorId: parent.id });
        return Book.find({ authorId: parent.id });
      },
    },
  }),
});

module.exports = {
  AuthorType,
  BookType,
};
