import PlayerModel from "../models/Player.js";
import { Monster } from "../models/Monster.js";

const MonsterController = {
  playFirstLevel: async (req, res) => {
    try {
      
      let playerAttributes = {};
      switch (req.body.class) {
        case "Knight":
          playerAttributes = {
            strength: 10,
            dexterity: 7,
            intelligence: 5,
            hitPoints: 100,
          };
          break;
        case "Archer":
          playerAttributes = {
            strength: 5,
            dexterity: 10,
            intelligence: 7,
            hitPoints: 80,
          };
          break;
        case "Wizard":
          playerAttributes = {
            strength: 5,
            dexterity: 7,
            intelligence: 10,
            hitPoints: 70,
          };
          break;
      }

      const player = new PlayerModel({
        ...playerAttributes,
        name: req.body.name,
        class: req.body.class,
        skills: [{ skillName: "Attack", usesLeft: 999 }], 
      });

      
      const monster = new Monster({
        name: "Ogre Berserker",
        attackDamage: 10,
        hitPoints: 200,
        skills: [
          { skillName: "Bat Smash", effect: "Deal attack damage x 2" },
          {
            skillName: "Reckless Attack",
            effect: "Deal attack damage x 3 but lose 20 HP",
          },
          {
            skillName: "Mindlessly Wander",
            effect: "The ogre is confused and wandered around",
          },
        ],
      });

      // 简单的战斗模拟（玩家始终先攻击）
      const playerAttackPower = player.calculateAttackPower();
      monster.hitPoints -= playerAttackPower;

      let battleOutcome = "";
      if (monster.hitPoints <= 0) {
        battleOutcome = "恭喜，你击败了狂暴食人魔！";
      } else {
      
        player.hitPoints -= monster.attackDamage;
        if (player.hitPoints <= 0) {
          battleOutcome = "游戏结束。狂暴食人魔击败了你。";
        }
      }

    
      res.json({
        battleOutcome,
        playerHP: player.hitPoints,
        monsterHP: monster.hitPoints,
        monsterLevel: monster.level,
        playerLevel: player.level,
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default MonsterController;
