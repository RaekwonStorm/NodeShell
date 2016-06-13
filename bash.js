var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var dataArr = data.toString().trim().toLowerCase().split(" ");
  var prompter = function() {
    return process.stdout.write('\nprompt > ');
  }

  if (dataArr[0] === "pwd") {
    commands.pwd();
    prompter();
  } else if (dataArr[0] === "date") {
    commands.date();
    prompter();
  } else if (dataArr[0] === "ls") {
    commands.ls();
  } else if (dataArr[0] === "echo") {
    // console.log(dataArr[0], dataArr.slice(1));
    commands.echo(dataArr.slice(1).join(" "));
    prompter();
  } else if (dataArr[0] === "cat") {
    commands.cat(dataArr[1]);
  } else if (dataArr[0] === "head") {
    commands.head(dataArr[1]);
  } else if (dataArr[0] === "tail") {
    commands.tail(dataArr[1]);
  } else {
    var cmd = data.toString().trim(); // remove the newline
    process.stdout.write('You typed: ' + cmd);
  }



});
