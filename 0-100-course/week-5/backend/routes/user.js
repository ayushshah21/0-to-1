const { Router } = require("express");
const router = Router();
const { Card } = require("../db/index.js");
const z = require("zod");

router.post("/card", async (req, res) => {
  try {
    const { name, description, interests, socials } = req.body;
    const card = await Card.create({
      name,
      description,
      interests,
      socials,
    });
    if (card)
      res.status(201).json({
        message: "Card created successfully",
        card,
      });
    else res.status(500).json({ error: "Failed to add card" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add card" });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const data = await Card.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve courses" });
  }
});

router.put("/card/:cardId", async (req, res) => {
  console.log(req.body);
  const cardId = req.params.cardId;
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      req.body,
      { new: true }
    );
  } catch (err) {
    err;
  }
});

module.exports = router;
