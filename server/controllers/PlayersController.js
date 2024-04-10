// playerController.js
import PlayerModel from "../models/Player.js";

class PlayerController {
  constructor() {
    this.players = {}; // Object to store player instances
  }

  // Create a new player
  async createPlayer(playerData) {
    try {
      const newPlayer = new PlayerModel(playerData);
      await newPlayer.save(); // Save to the database
      this.players[newPlayer._id] = newPlayer; // Add to the in-memory list of players
      return newPlayer;
    } catch (error) {
      console.error("Error creating new player:", error);
      throw error;
    }
  }

  // Get player information
  getPlayer(playerId) {
    return this.players[playerId];
  }

  // Update player status
  async updatePlayer(playerId, updateData) {
    try {
      const player = this.players[playerId];
      if (player) {
        Object.assign(player, updateData); // Update player information
        await player.save(); // Save updates to the database
      }
    } catch (error) {
      console.error("Error updating player:", error);
      throw error;
    }
  }

  // Handle player actions, such as attacks
  handleAction(playerId, action) {
    // Perform corresponding logic based on the action type
  }

  // ...Other player-related methods...
}

export default PlayerController;
