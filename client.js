const net = require('net')

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log('connected to server');


    client.write('hello from client!')
});


client.on('data', (data) => {
    console.log(`Recieved from server: ${data.toString()}`)



    setTimeout(() => {
        client.write(`Ping at ${new Date().toISOString()}`);
    },2000)
})



client.on('close' , () => {
    console.log("connection closed")
})

client.on('error' , () => {
    console.error('Client error: ', err);
})


