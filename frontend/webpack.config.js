module.exports = {
  resolve: {
    fallback: {
      "assert": require.resolve("assert/"),
      "stream": require.resolve("stream-browserify/"),
      "url": require.resolve("url/"),
    }
  }
}