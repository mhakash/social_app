const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).sendFile("/signup.html", {
    root: "."
  });
});

router.get("/login", (req, res) => {
  res.status(200).sendFile("/login.html", {
    root: "."
  });
});

router.post("/users/signup", async (req, res) => {
  //console.log("hi");
  console.log(req.body);
  console.log(req.username, req.password);
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({
      user,
      token
    });
    //res.end("done");
  } catch (error) {
    console.log("mama error khaise ");
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  //Login a registered user
  try {
    const {
      email,
      password
    } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .send({
          error: "Login failed! Check authentication credentials"
        });
    }
    const token = await user.generateAuthToken();
    console.log(token);
    res.send({
      user,
      token
    });
  } catch (error) {
    res.status(400).send({
      error: error.message
    });
  }
});

express().use(function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({
      error: "No credentials sent!"
    });
  }
  next();
});

router.get("/users/me", auth, async (req, res) => {
  // View logged in user profile
  res.send(req.user);
});

router.post("/users/me/logout", auth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/me/logoutall", auth, async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;