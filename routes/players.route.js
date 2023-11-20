const Player = require("../models/player");
const PlayersRoute = require("express").Router();
const bcrypt = require("bcrypt");

PlayersRoute.get("/", async (req, res) => {
  try {
    let data = await Player.FindAllPlayers();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.get("/getPlayerById/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await Player.GetPlayerById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.get("/memory/:memoryScore", async (req, res) => {
  try {
    let { memoryScore } = req.params;
    let data = await Player.FindByMemoryScore(memoryScore);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.get("/trivia/:triviaScore", async (req, res) => {
  try {
    let { triviaScore } = req.params;
    console.log(triviaScore);
    let data = await Player.FindByTriviaScore(triviaScore);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

PlayersRoute.put("/updateUsername", async (req, res) => {
  const { email, username } = req.body;
  try {
    const player = await Player.FindByEmail(email);
    if (!player) {
      return res
        .status(404)
        .json({ message: "Player Wasn't found, Try Again" });
    }
    await Player.UpdatePlayersUsername(player._id, username);
    res.status(200).json({ message: "username update" });
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.post("/updatePassword", async (req, res) => {
  const { email, password } = req.body;
  try{
    const hash=await bcrypt.hash(password,10)
    const player = await Player.FindByEmail(email);
    if (!player) {
      return res.status(404).json({ message: "User Wasn't Found, Try Again" });
    }
    await Admin.UpdateAdminsPassword(admin._id,hash)
    res.status(200).json({ message: "password update" });

  }catch(err){
    res.status(500).send("Error hashing");
  }

});
PlayersRoute.post("/AddUser", async (req, res) => {
  console.log(req);
  try {
    let { first_name } = req.body;
    let { last_name } = req.body;
    let { username } = req.body;
    let { email } = req.body;
    let { password } = req.body;

    let { triviaScore } = Number(0);
    let { memoryScore } = Number(0);
    const hashedPassword = await bcrypt.hash(password, 10);

    let data = await Player.AddNewPlayer(
      first_name,
      last_name,
      username,
      email,
      hashedPassword,
      (triviaScore = 0),
      (memoryScore = 0)
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.post("/login", async (req, res) => {
  console.log(req);
  try {
    let { username, password } = req.body;
    let player = await Player.Login(username, password);
    console.log(player);
    if (!player) {
      res.status(401).json({ msg: "BAD login :( " });
    } else {
      res.status(200).json({ player });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.post("/AddPoints", async (req, res) => {
  try {
    let { id, type, score } = req.body;
    let player = await Player.AddPoints(id, type, score);
    res.status(200).json({ player });
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.get("/GetByEmail/:email", async (req, res) => {
  try {
    let { email } = req.params;
    let data = await Player.FindByEmail(email);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
PlayersRoute.get("/GetByUsername/:username", async (req, res) => {
  try {
    let { username } = req.params;
    let data = await Player.FindByUsername(username);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = PlayersRoute;
