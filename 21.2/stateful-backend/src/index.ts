import { games } from "./store"

setInterval(() => {
    games.push({
        id: Math.random().toString(),
        blackPlayerName: "Nigga",
        whitePlayerName: "Gora",
        moves:[]
    })
})