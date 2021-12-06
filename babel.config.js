module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        whitelist: ['REACT_APP_YELP_BASE_URL', 'REACT_APP_YELP_API_KEY'],
        safe: true,
        allowUndefined: false,
      },
    ],
  ],
};
