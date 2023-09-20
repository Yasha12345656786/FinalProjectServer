const DB = require("../utils/db");
const bcrypt = require("bcrypt");
class Player {
  first_name;
  last_name;
  email;
  password;
  username;
  triviaScore;
  memoryScore;

  constructor(
    first_name,
    last_name,
    email,
    password,
    username,
    triviaScore,
    memoryScore
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.triviaScore = triviaScore;
    this.memoryScore = memoryScore;
  }

  static async FindAllPlayers() {
    return await new DB().FindAll("Player");
  }
  static async GetPlayerById(id) {
    return await new DB().FindOneById("Player", id);
  }

  static async FindByMemoryScore(memoryScore) {
    let query = { memoryScore: Number(memoryScore) };
    return await new DB().FindAll("Player", query);
  }
  static async FindByTriviaScore(triviaScore) {
    let query = { triviaScore: Number(triviaScore) };
    return await new DB().FindAll("Player", query);
  }
  static async UpdatePlayersUsername(id, username) {
    let doc = {
      username: username,
    };
    return await new DB().UpdateById("Player", id, doc);
  }
  static async UpdatePlayersPassword(id, password) {
    let doc = {
      password: await password,
    };
    return await new DB().UpdateById("Player", id, doc);
  }
  static async UpdatePlayersPasswordEmail(email, password) {
    let doc = {
      password: await password,
    };
    return await new DB().UpdateByemail("Player", email, doc);
  }
  static async AddNewPlayer(
    first_name,
    last_name,
    email,
    password,
    username,
    triviaScore,
    memoryScore
  ) {
    let doc = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      username: username,
      triviaScore: Number(triviaScore),
      memoryScore: Number(memoryScore),
    };
    return await new DB().Insert("Player", doc);
  }

  static async Login(username, password) {
    let query = { username: username };
    let player = await new DB().FindOne("Player", query);
    if (!player || !(password, player.password)) {
      return null;
    }
    this._id = player._id;
    this.first_name = player.first_name;
    this.last_name = player.last_name;
    this.email = player.email;
    this.username = player.username;
    this.triviaScore = player.triviaScore;
    this.memoryScore = player.memoryScore;
    return { ...this };
  }
  static async AddPoints(id, type, score) {
    let player = await new DB().FindOneById("Player", id);
    if (type == 0) {
      player.memoryScore += score;
    } else {
      player.triviaScore += score;
    }
    await new DB().UpdateById("Player", id, player);
    return player;
  }
  static async FindByEmail(email) {
    let query = { email: email };
    return await new DB().FindOne("Player", query);
  }
  static async FindByUsername(username) {
    let query = { username: username };
    return await new DB().FindOne("Player", query);
  }
}

module.exports = Player;
