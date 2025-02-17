(async () => {
    const ws = new WebSocket('ws://localhost:6970');
    ws.addEventListener('close', (event) => {
        console.log("WEBSOCKET CLOSE", event);
    });
    ws.addEventListener('error', (event) => {
        console.log("WEBSOCKET ERROR", event);
    });
    ws.addEventListener('message', (event) => {
        console.log("WEBSOCKET MESSAGE", event);
    });
    ws.addEventListener('open', (event) => {
        console.log("WEBSOCKET OPEN", event);
    });
})();
console.log("Hello from client");
export {};
