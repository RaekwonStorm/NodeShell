var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var dataArr = data.toString().trim().toLowerCase().split(" ");

  if (dataArr[0] === "pwd") {
    commands.pwd("_", commands.done);
  } else if (dataArr[0] === "date") {
    commands.date("_", commands.done);
  } else if (dataArr[0] === "ls") {
    commands.ls("_", commands.done);
  } else if (dataArr[0] === "echo") {
    commands.echo(dataArr.slice(1).join(" "), commands.done);
  } else if (dataArr[0] === "cat") {
    commands.cat(dataArr[1], commands.done);
  } else if (dataArr[0] === "head") {
    commands.head(dataArr[1], commands.done);
  } else if (dataArr[0] === "tail") {
    commands.tail(dataArr[1], commands.done);
  } else if (dataArr[0] === "sort") {
    commands.sort(dataArr[1], commands.done);
  } else if (dataArr[0] === "wc") {
    commands.wc(dataArr[1], commands.done);
  } else if (dataArr[0] === "uniq") {
    commands.uniq(dataArr[1], commands.done);
  } else if (dataArr[0] === "curl") {
    commands.curl(dataArr[1], commands.done)
  }

});
