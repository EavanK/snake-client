// setup interface to handle user input from stdin
let connection;

const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  
  return stdin;
};

const handleUserInput = (key) => {
  //we can exit by CTRL + C
  if (key === '\u0003') {
    process.exit();
  }
  
  //movement key
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  //send messages to other players
  if (key === 'q') {
    connection.write('Say: Hiii');
  }
  if (key === 'e') {
    connection.write('Say: Help!!');
  }
  if (key === 'z') {
    connection.write('Say: Chilling~');
  }

  
};


module.exports = { setupInput };