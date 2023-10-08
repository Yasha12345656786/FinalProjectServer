const triviaGame = require("../models/triviaGame");
const TriviaRoute = require("express").Router();

TriviaRoute.get("/", async (req, res) => {
  try {
    let data = await triviaGame.GetAllLevels();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

TriviaRoute.post("/AddLevel", async (req, res) => {
  //new page
  try {
    let questionData = req.body;
    let data = await triviaGame.AddLevel(...questionData);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
TriviaRoute.put("/EditLevelByID/:id", async (req, res) => {
  //modal
  try {
    let { id } = req.params;
    let { lvl } = req.body;
    let { q } = req.body;
    let { Answers } = req.body;
    let { points } = req.body;
    let data = await triviaGame.EditLevelById(id, lvl, q, Answers, points);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
TriviaRoute.get("/GetNextLevelBylvl/:lvl", async (req, res) => {
  try {
    let { lvl } = req.params;
    let level = await triviaGame.GetNextLevelBylvl(Number(lvl));
    res.status(200).json(level);
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = TriviaRoute;
