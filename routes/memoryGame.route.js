const { default: MemoryGame } = require("../Client/src/pages/MemoryGame");
const memoryGame = require("../models/memoryGame");
const MemoryRoute = require("express").Router();

MemoryRoute.get("/", async (req, res) => {
  try {
    let data = await memoryGame.GetAllLevels();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
MemoryRoute.get("/:lvl", async (req, res) => {
  try {
    let { lvl } = req.params;
    let data = await memoryGame.GetLevelBylvl(lvl);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
MemoryRoute.get("/minmovesbyLvl/:lvl", async (req, res) => {
  try {
    let { lvl } = req.params;
    let data = await memoryGame.GetMinMovesBylvl(lvl);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
MemoryRoute.get("/GetPointsByLvl/:lvl", async (req, res) => {
  try {
    let { lvl } = req.params;
    let data = await memoryGame.GetPointsByLvl(lvl);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
MemoryRoute.post("/AddLevel", async (req, res) => {
  try {
    let { lvl } = req.body;
    let { Cards } = req.body;
    let { MinMoves } = req.body;
    let { points } = req.body;
    let data = await memoryGame.AddLevel(lvl, Cards, MinMoves, points);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
//tried it also with lvl
MemoryRoute.put("/EditLevelById/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { lvl } = req.body;
    let { Cards } = req.body;
    let { MinMoves } = req.body;
    let { points } = req.body;
    let data = await memoryGame.EditLevelById(id, lvl, Cards, MinMoves, points);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
MemoryRoute.get("/GetNextGameByLvl/:lvl", async (req, res) => {
  try {
    let { lvl } = req.params;
    let game = await memoryGame.GetNextGameByLvl(Number(lvl));
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error });
  }
});
MemoryGame.get("/GetCards/:lvl", async (req, res) => {
  try {
    let { lvl } = req.params;
    let data = await memoryGame.GetCards(Number(lvl));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = MemoryRoute;
