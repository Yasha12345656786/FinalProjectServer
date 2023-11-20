const Admin = require("../models/Admin");
const AdminsRoute = require("express").Router();
const bcrypt = require("bcrypt");
AdminsRoute.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let admin = await Admin.Login(email, password);
    console.log(admin);
    if (!admin) {
      res.status(401).json({ msg: "BAD login :( " });
    }

    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ error });
  }
});
AdminsRoute.put("/updateUsername/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { username } = req.body;
    let data = await Admin.UpdateAdminsUsername(id, username);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
AdminsRoute.put("/updatePassword/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { password } = req.body;
    let data = await Admin.UpdateAdminsPassword(id, password);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
AdminsRoute.get("/getAdminById/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await Admin.GetAdminById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
AdminsRoute.get("/getAdminByEmail/:email", async (req, res) => {
  try {
    let { email } = req.params;
    let data = await Admin.GetAdminByEmail(email);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
AdminsRoute.post("/AddPoints", async (req, res) => {
  try {
    let { id, type, score } = req.body;
    let admin = await Admin.AddPoints(id, type, score);
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ error });
  }
});
AdminsRoute.put("/updateEmail", async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await Admin.GetAdminByEmail(email);
    if (!admin) {
      return res.status(404).json({ message: "User Wasn't Found, Try Again" });
    }
    await Admin.UpdateAdminsEmail(admin._id, email);
    res.status(200).json({ message: "email update" });
  } catch (error) {
    res.status(500).json({ error });
  }
});
AdminsRoute.post("/updatePassword", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).send("Error hashing");
      return;
    }

    const admin = Admin.GetAdminByEmail(email);
    if (!admin) {
      return res.status(404).json({ message: "User Wasn't Found, Try Again" });
    }
    if (admin) {
      Admin.UpdateAdminsPassword(admin._id, hash);
    }

    res.status(200).json({ message: "password update" });
  });
});

module.exports = AdminsRoute;
