import { Request, Response } from "express"
import { createContainer } from "../container/container"
import { RoomPresenterJson } from "./presenter/room-presenter.json";

// A bouger quelque part
const express = require('express')
const app = express()

const container = createContainer();

app.put('/rooms', async (req: Request, res: Response) => {
    const roomPresenterJson = new RoomPresenterJson();
    await container.UpdateHostelPrice(200, roomPresenterJson)
    res.send(roomPresenterJson.format())
})

app.listen(3000)
