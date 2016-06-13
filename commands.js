exports.pwd = function () {
  return process.stdout.write(process.argv[1]);
};

exports.date = function () {
  return process.stdout.write(new Date().toString());
};
