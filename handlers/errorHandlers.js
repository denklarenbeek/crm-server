const slug = require('slugs');
//Error hanlder for the await/async method

exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

