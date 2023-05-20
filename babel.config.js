module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
  };
};
=======
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
>>>>>>> ab74bada8ac46721647197a3cf2cea3bf070b70d
