const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of the web client
    tracksForHome: (_, __, { dataSources }) => {

    }
  }
};

module.exports = resolvers;