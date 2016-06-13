var fs = require('fs');
var request = require('request')

exports.done = function (output) {
  process.stdout.write(output);
  process.stdout.write("prompt > ");
};

exports.pwd = function (file, done) {
  var directory = process.argv[1]+'\n';
  done(directory);
};

exports.date = function (file, done) {
  var output = new Date().toString()+'\n';
  done(output);
};

exports.ls = function(file, done) {
  var output = "";
  fs.readdir('.', function(err, files) {
    if (err) { throw err; }
    files.forEach(function(file) {
      output += file.toString() + "\n";
    });
    done(output);
  });
}

exports.echo = function(input, done) {
  if (input[0] === "$") {
    var key = input.slice(1).toUpperCase();
    done(process.env[key]+'\n');
  } else {
    done(input + '\n');
  }
}

exports.cat = function(file, done) {
  if (file[0] === "/") {
    file = file.slice(1);
  }
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    done(data.toString());
  });
}

exports.head = function(file, done) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    done(data.toString().split("\n").slice(0, 5).join("\n") + "\n");
  });
}

exports.tail = function(file, done) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    done(data.toString().split("\n").slice(-5).join("\n") + "\n");
  });
}

exports.sort = function (file, done) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

   done(data.toString().split('\n').sort().join("\n") + '\n');
  });
}

exports.wc = function (file, done) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    done(data.toString().split('\n').length.toString()+'\n');
  });
}

exports.uniq = function (file, done) {
  fs.readFile(file, function(err, data) {
    if (err) { throw err; }

    var linesArr = data.toString().split('\n');
    var output = "";

    linesArr.filter(function (element, index) {
      if (element !== linesArr[index+1]) {
        output += element + '\n';
      }
    })

    done(output);
  })
}

exports.curl = function (url, done) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      done(body + '\n')
    }
  });
};
