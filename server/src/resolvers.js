const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of the web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    }
  },
};

module.exports = resolvers;