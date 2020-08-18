const graphql = require('graphql');
const Book = require('../models/book');
const { BookType } = require('../types/RelatedTypes');
const StatusType = require('../types/Status');

const { GraphQLID, GraphQLInt, GraphQLList } = graphql;

module.exports = {
  book: {
    type: BookType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      // code to get data from db / other source
      // return find(books, { id: args.id });
      console.log('FETCHING IDS ', args.id);
      return Book.findById(args.id);
    },
  },
  books: {
    type: new GraphQLList(BookType),
    resolve(parent, args) {
      // return books;
      return Book.find({});
    },
  },
  totalBooks: {
    type: GraphQLInt,
    args: { status: { type: StatusType } },
    resolve(parent, args) {
      // code to get data from db / other source
      // return find(books, { id: args.id });
      console.log('counting');
      if (args.status) {
        return Book.count({ status: args.status });
      }
      return Book.count();
    },
  },
};
