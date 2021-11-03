const net = require('net');


// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  
  // code that does something when the connection is first established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    //send a message to server
    conn.write('Name: HSK');

    //a movement command with asynchronous function
    setInterval(() => {
      conn.write('Move: up');
    }, 500);
  });
  

  //Update the connect function to handle incoming data and console.log it for the player.
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};
console.log('Connecting ...');
connect();

module.exports = connect;