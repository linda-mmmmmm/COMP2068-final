import PlayerModel from "../models/Player.js";
import { Monster } from "../models/Monster.js";

//update stage and the monster levels up automatically after each battle
export const playNextLevel = async (req, res) => {
  if (
    req.body.battleOutcome ===
    "Congratulations, you defeated the Ogre Berserker!"
  ) {
    try {
      const nextMonster = new Monster({
        name: "Goblin",
        level: req.body.monsterLevel + 1,
      });

      res.json({
        message: "Next level monster created successfully.",
        monsterLevel: nextMonster.level,
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(500).send({ message: "battle failed" });
  }
};
