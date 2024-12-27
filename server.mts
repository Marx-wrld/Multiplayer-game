import { WebSocketServer } from "ws";
import * as common from './common.mjs';

interface Player {
    id: number,
    x: number,
    y: number,
}

const players = new Map<WebSocket, Player>();
let idCounter = 0;

const wss = new WebSocketServer({
    port: common.SERVER_PORT,
});

wss.on("connection", (ws) => {
    const id  = idCounter++;
    const player = {
        id,
        x: Math.random()*common.WORLD_WIDTH,
        y: Math.random()*common.WORLD_HEIGHT,
    }
    players.set(ws, player);
    ws.send({
        kind: "Hello",
    })
})

console.log(`Listening to ws://localhost:${common.SERVER_PORT}`)