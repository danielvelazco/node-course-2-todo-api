var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  //console.log(envConfig); object del ambiente (config.env)
  //console.log(Object.keys(envConfig)); convierte el objeto en array

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
