const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        const message = data.toString();
        console.log("Received message:", message);

        const respose = `server recieved : ${message} at ${new Date().toISOString()}`;
        socket.write(respose);
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });

    socket.on("error", (error) => {
        console.error("Socket error:", error);
    });


})


const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})