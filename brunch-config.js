exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: {
      'qiqochat.css': /qiqochat/,
      'app.css': /^(?!:qiqochat)/
    }
  }
};

exports.plugins = {
  sass: {},
  copycat: {
    images: ["app/images"],
  }
};
