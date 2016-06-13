var fs = require('fs');

exports.pwd = function () {
  return process.stdout.write(process.argv[1]);
};

exports.date = function () {
  return process.stdout.write(new Date().toString());
};

exports.ls = function() {
  fs.readdir('.', function(err, files) {
    if (err) { throw err; }
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
  });
}

exports.echo = function(input) {
  if (input[0] === "$") {
    var key = input.slice(1).toUpperCase();
    return process.stdout.write(process.env[key]);
  }
  return process.stdout.write(input);
}

exports.cat = function(file) {
  if (file[0] === "/") {
    file = file.slice(1);
  }
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    process.stdout.write(data.toString());
    process.stdout.write("prompt > ");
  });
}

exports.head = function(file) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    process.stdout.write(data.toString().split("\n").slice(0, 5).join("\n") + "\n");
    process.stdout.write("prompt > ");
  });
}

exports.tail = function(file) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    process.stdout.write(data.toString().split("\n").slice(-5).join("\n") + "\n");
    process.stdout.write("prompt > ");
  });
}

exports.sort = function (file) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    process.stdout.write(data.toString().split('\n').sort().join("\n") + '\n');
    process.stdout.write("prompt > ");
  });
}

exports.wc = function (file) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    process.stdout.write(data.toString().split('\n').length.toString()+'\n');
    process.stdout.write("prompt > ");
  });
}

exports.uniq = function (file) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    var linesArr = data.toString().split('\n').sort();
    var output = "";

    linesArr.filter(function (element, index) {
      if (element !== linesArr[index+1]) {
        output += element + '\n';
      }
    })

    process.stdout.write(output);
    process.stdout.write("prompt > ");
  })
}
