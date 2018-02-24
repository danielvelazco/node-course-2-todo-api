var mongoose =  require('mongoose');

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
},'User');// esta linea es para que la coleccion se cree con este nombre

module.exports = {User};
