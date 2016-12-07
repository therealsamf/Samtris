//Game.js//

/**
 * @description - defines the game class and the entity manager
 */

const TICK = 100; //10th of a second

const { Manager } = require('sam-ecs');
class Game {
  constructor() {
    this.manager = new Manager();
  }

  /**
   * @description - 'getter' method for the entity manager
   */
  getManager() {
    return this.manager;
  }

  /**
   * @description - Called once, starts the game
   */
  run() {
    this.quit = false;

    this.error = undefined;

    var _this = this;
    this.loop = setInterval(() => {
      try {
        _this.update();
      }
      catch (err) {
        _this.error = err;
        _this.quit = true;
      }

      if (_this.quit) {
        _this.end();
      }
    }, TICK);

  }

  /**
   * @description - Called every frame, or 'tick'. Delay time
   * defined at the top of the file
   */
  update() {
    this.manager.update();
  }

  /**
   * @description - Ends the javascript interval returned by 'setInterval'
   */
  end() {
    clearInterval(this.loop);
    if (this.error)
      throw this.error;
  }
}

const game = new Game();
module.exports = game;