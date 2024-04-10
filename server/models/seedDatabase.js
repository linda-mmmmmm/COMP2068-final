import MongooseSetup from "./lib/MongooseSetup.js";
import dotenv from "dotenv";
import Level from "./Monster.js";

dotenv.config();

MongooseSetup();

const seedLevels = async () => {
  const levelsData = [
    {
      levelNumber: 1,
      monster: {
        name: "Lesser Imp",
        hitPoints: 30,
        skills: [
          { skillName: "Stab", effect: "The Imp stabbed you with its trident" },
          {
            skillName: "Flap",
            effect: "The Imp flapped its wings and hit you",
          },
          {
            skillName: "Scream",
            effect: "The Imp unleashed a head-splitting scream",
          },
        ],
        backgroundStory:
          "An evil being from banished lands devotes itself to the Demon Lord and serves as a guard of the tower's gates. The Imp wields a small trident and has two tiny wings. It is weak but cunning. But it should bear no challenge for you!",
      },
    },
    {
      levelNumber: 2,
      monster: {
        name: "Goblin Grunt",
        hitPoints: 45,
        skills: [
          {
            skillName: "Slash",
            effect: "The Goblin Grunt slashed you with its scimitar",
          },
          {
            skillName: "Slap",
            effect: "The Goblin Grunt slapped you with a back-hand swing",
          },
          {
            skillName: "Flee",
            effect:
              "The Goblin Grunt is scared of you and tried to run away, but blindly clashed itself into you insteadThe Goblin Grunt is scared of you and tried to run away, but blindly clashed itself into you instead",
          },
        ],
        backgroundStory:
          "A footman soldier of the Demon Lord serves in the infantry squad. It is wielding a scimitar and buckler set. It is quite tougher to kill than the imp for sure!",
      },
    },
    {
      levelNumber: 3,
      monster: {
        name: "Goblin Warrior",
        hitPoints: 60,
        skills: [
          {
            skillName: "Mighty Slash",
            effect: "The Goblin Warrior slashed you with its cleaver",
          },
          {
            skillName: "Shield Bash",
            effect:
              "The Goblin Warrior bashed your head with its spiked shield",
          },
          {
            skillName: "Head Butt",
            effect: "The Goblin Warrior headbutted you",
          },
        ],
        backgroundStory:
          "The squad leader of the Goblin infantry squad, the Goblin Warrior is a force that shall be reckoned with. Be careful with its cleaver and spiked shield!",
      },
    },
    {
      levelNumber: 4,
      monster: {
        name: "Ogre Mage",
        hitPoints: 75,
        skills: [
          {
            skillName: "Fireball",
            effect:
              "The Ogre Mage cast a fireball, dealing massive damage to you but also burnt itself.",
          },
          {
            skillName: "Frost bolt",
            effect: "The Ogre Mage cast the frost bolt and damaged you.",
          },
          {
            skillName: "Fire Blast",
            effect:
              "The Ogre Mage tried to cast the most powerful fire spell on you but it went terribly wrong and blasted itself to pieces instead.",
          },
        ],
        backgroundStory:
          "The Ogre Mage is the only one in the Ogre clan that has magical abilities. However, due to their innate low intelligence, their spells often have some side effects that are out of control.",
      },
    },
    {
      levelNumber: 5,
      monster: {
        name: "Dark Elf Ranger",
        hitPoints: 80,
        skills: [
          {
            skillName: "Poisoned Dagger",
            effect: "Dark Elf Ranger slices you with her poison-soaked dagger.",
          },
          {
            skillName: "Rapid Fire",
            effect:
              "Dark Elf Ranger quickly masterfully fired two consecutive arrows at you!",
          },
          {
            skillName: "Whirlwind Strike",
            effect:
              "Dark Elf Ranger spun and struck you twice with her dual-wielding short swords.",
          },
        ],
        backgroundStory:
          "The Dark Elf Ranger is an evil sellsword who is bloodthirsty. She is, however, very skillful with her dual swords and short bow. Be careful dealing with this crafty ranger.",
      },
    },
    {
      levelNumber: 6,
      monster: {
        name: "Exiled Knight",
        hitPoints: 90,
        skills: [
          {
            skillName: "Sword Attack",
            effect:
              "The Exiled Knight showed his excellent skills in swordplay.",
          },
          {
            skillName: "Gauntlet Smack",
            effect: "The Exiled Knight hit you with his metal gauntlet.",
          },
          {
            skillName: "Front Kick",
            effect: "The Exiled Knight kicked you in the shin.",
          },
        ],
        backgroundStory:
          "A fallen knight who used to be an honourable man after breaking the laws and serving time is now following the Demon Lord. Some people still think there is good in his heart. The Exiled Knight is using his long sword in the fight and wearing chainmail.",
      },
    },
    {
      levelNumber: 7,
      monster: {
        name: "Hell Hound",
        hitPoints: 100,
        skills: [
          {
            skillName: "Bite",
            effect: "The Hell Hound bit you with its fiery mouth.",
          },
          {
            skillName: "Charge",
            effect:
              "The Hell Hound charged his body and rammed you with full force.",
          },
          {
            skillName: "Rake",
            effect: "The Hell Hound raked your arm with its razor-sharp claws.",
          },
        ],
        backgroundStory:
          "The Hell Hound is a mysterious beast that dwells in the heart of a Volcano Cave. Covered with lava-like blazing bright skin that burns anything that comes too close to it.",
      },
    },
    {
      levelNumber: 8,
      monster: {
        name: "The Witch",
        hitPoints: 115,
        skills: [
          {
            skillName: "Shadow Bolt",
            effect:
              "The Witch conjured a shadow bolt that hits you with immersive dark energy.",
          },
          {
            skillName: "Shadow Flame",
            effect:
              "The Witch cast the shadow flame underneath you and burnt you for a lot of damage.",
          },
          {
            skillName: "Shadow Curse",
            effect:
              "The Witch cast a mystery curse on you. If the player survives the spell, it deals 30 damage to herself.",
          },
        ],
        backgroundStory:
          "The Witch is the counsellor of the Demon Lord. She advises the Demon Lord with her wicked schemes and she is talented with dark magic spells. Her background is a mystery.",
      },
    },
    {
      levelNumber: 9,
      monster: {
        name: "Drake",
        hitPoints: 130,
        skills: [
          {
            skillName: "Poison Breath",
            effect: "The Drake breathes a cloud of poison that damaged you.",
          },
          {
            skillName: "Furry Claws",
            effect:
              "The Drake quickly strikes you with its two front claws slashed and made you bleed badly.",
          },
          {
            skillName: "Overpower",
            effect:
              "The Drake first swept your body with its tail then followed up by a bite to your arm and lastly bit your leg with his long teeth.",
          },
        ],
        backgroundStory:
          "The Drake is a dragon with four limbs much like a lizard although is far larger than the average lizard. The Drake is fearsome to look at and as the guard of the chamber of the Demon Lord, it will be quite a challenge for you!",
      },
    },
    {
      levelNumber: 10,
      monster: {
        name: "Demon Lord",
        hitPoints: 180,
        skills: [
          {
            skillName: "Bone Crushing Strike",
            effect:
              "The Demon Lord swung his massive flail at you with the force to break bones easily!",
          },
          {
            skillName: "Death Rays",
            effect:
              "The Demon Lord cast a ray of death energy to you; the spell is so powerful even itself suffered some damage from it!",
          },
          {
            skillName: "Vampiric Roar",
            effect:
              "The Demon Lord roars with life-stealing energy; it sucked the life essence out of your body to heal itself.",
          },
        ],
        backgroundStory:
          "The owner of the tower, the Demon Lord, is a relentless, cruel, and evil being. Its goal is to slaughter all that dare to defy it and power over the righteous. This is the last boss you will be facing before you can rescue the princess. Be warned, the Demon Lord is very powerful! The Demon Lord wields a daunting flail with full plate armor. One could say it is armored to the teeth.",
      },
    },
  ];

  try {
    for (const levelData of levelsData) {
      await Level.updateOne(
        { levelNumber: levelData.levelNumber },
        { $set: levelData },
        { upsert: true }
      );
    }

    console.log("Levels seeded successfully.");
  } catch (err) {
    console.error("Error seeding levels:", err);
  }
};

seedLevels().then(() => mongoose.disconnect());
