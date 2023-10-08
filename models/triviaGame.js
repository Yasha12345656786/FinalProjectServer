const { ObjectId } = require("mongodb");
const DB = require("../utils/db");
class TriviaGame {
  lvl;
  q;
  Answers;
  points;

  constructor(lvl, q, Answers, points) {
    this.lvl = lvl;
    this.q = q;
    this.Answers = Answers;
    this.points = points;
  }
  static async GetAllLevels() {
    return await new DB().FindAll("TriviaGame");
  }
  static async GetLevelBylvl(lvl) {
    let query = { lvl: Number(lvl) };
    return await new DB().FindAll("TriviaGame", query);
  }
  static async AddLevel(newQuestion) {
    let doc = {
      newQuestion,
    };
    return await new DB().Insert("TriviaGame", doc);
  }
  static async EditLevelById(id, lvl, q, Answers, points) {
    let doc = {
      lvl: Number(lvl),
      q: q,
      Answers: Answers,
      points: Number(points),
    };
    return await new DB().UpdateById("TriviaGame", id, doc);
  }
  static async GetNextLevelBylvl(lvl) {
    let query = { lvl: lvl + 1 };
    return await new DB().FindOne("TriviaGame", query);
  }
}

module.exports = TriviaGame;
