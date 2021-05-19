
const os = require('os')

//info about current user

const user = os.userInfo()

console.log(user);

// système uptime
console.log(`the time of the système is ${os.uptime()}`);
 const currentos ={
     name:os.type(),
     release:os.release(),
     totalMem: os.totalmem(),
     freeMem: os.freemem(),
 }
 console.log(currentos)

