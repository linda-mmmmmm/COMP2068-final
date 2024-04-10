
const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  currentLevel: {
    type: Number,
    default: 1,
    required: true,
  },

  skills: {
    type: Map,
    of: Number,
    default: {
      "Thrust and Slash": 10,
      "Archery Attack": 10,
      "Fire Bolt": 10,
      "Shield Bash": 10,
    }
  }
});

  
  // currentHitPoints: {
  //   type: Number,
  //   required: true,
  //   // No default function here since virtuals cannot be accessed directly in default functions.
  // },
  // strength: {
  //   type: Number,
  //   required: true,
  //   default: 5,
  // },
  // dexterity: {
  //   type: Number,
  //   required: true,
  //   default: 5,
  // },
  // intelligence: {
  //   type: Number,
  //   required: true,
  //   default: 5,
  // },
  // modified skills with their use limits
// // After defining the schema, set a default for currentHitPoints using a pre-save hook

// playerSchema.pre('save', function (next) {
//   // This ensures currentHitPoints is set to maxHitPoints when a Player document is created.
//   if (this.isNew) {
//     this.currentHitPoints = 50 + (this.constitution * 2); // Manually calculate the default based on constitution
//   }
//   next();
// });

// // Method to simulate resetting hit points after a game
// playerSchema.methods.resetHitPoints = function() {
//   this.currentHitPoints = this.maxHitPoints; // Assuming you add a currentHitPoints attribute for tracking
// };

/*
NOTE: When you need to access a player's max hit points in your game logic (e.g., at the start of the game or when resetting hit points after a battle), you would access the maxHitPoints virtual like any other property:

const playerMaxHP = player.maxHitPoints;

*/

// calculator for skill damages based on attributes.
// playerSchema.methods.calculateDamage = function(skillName) {
//   const damageMultipliers = {
//     "Thrust and Slash": 2.5,
//     "Archery Attack": 2.5,
//     "Fire Bolt": 2.5,
//     "Fire Ball": 2.0,
//   };
//   const baseDamage = {
//     "Thrust and Slash": this.strength,
//     "Archery Attack": this.dexterity,
//     "Fire Bolt": this.intelligence,
//     "Fire Ball": this.constitution,
//   };
//   return baseDamage[skillName] * damageMultipliers[skillName];
// };

// This method would be called to allow a player to allocate points after leveling up
// The allocation logic (how points are distributed) should be handled at the point of request (e.g., in your route handling)
// playerSchema.methods.allocateAttributePoints = function(strengthPoints, dexterityPoints, intelligencePoints, constitutionPoints) {
//   this.strength += strengthPoints;
//   this.dexterity += dexterityPoints;
//   this.intelligence += intelligencePoints;
//   this.constitution += constitutionPoints;
// };

// Refresh the use limits to the default after each level is cleared
// playerSchema.methods.refreshSkills = function() {
//   this.skills.set("Thrust and Slash", 10);
//   this.skills.set("Archery Attack", 10);
//   this.skills.set("Fire Bolt", 10);
//   this.skills.set("Shield Bash", 10);
// };


const PlayerModel = mongoose.model("Player", PlayerSchema);



export default PlayerModel;

// export function createPlayer(data) {
//   return new PlayerModel(data);
// }