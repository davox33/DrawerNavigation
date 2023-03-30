module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //En caso de que la versión de las dependencias 
    //no sean compatibles con las animaciones, 
    //se debe implementar este  plugin y ejecuta 
    //el comando expo start -c en la terminal, 
    //para eliminar el cache
    plugins: ['react-native-reanimated/plugin'], 
  };
};
