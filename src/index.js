//index.js//

/**
 * @description - starting point into the app
 */

const game = require('./Game.js');

const PIECES = [
  [
    [ //backwards 'L'
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  ],
  [
    [ //forwards 'L'
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  ],
  [
    [ //red block
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ]
  ],
  [
    [ //green block
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  ],
  [
    [ //square
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  ],
  [
    [ //long piece
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  ],
  [
    [ //T
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  ],
];

const BLUE = '#2980b9',
  ORANGE = '#e67e22',
  RED = '#e74c3c',
  GREEN = '#27ae60',
  YELLOW = '#f1c40f',
  CYAN = '#1abc9c',
  PURPLE = '#8e44ad',
  WHITE = '#ecf0f1';

const COLORS = [BLUE, ORANGE, RED, GREEN, YELLOW, CYAN, PURPLE];
const PIECE_LENGTH = 32;
const BOARD_HEIGHT = 20,
  BOARD_WIDTH = 10;
const INTIIAL_UPDATE_DELAY = 750,
  MINIMUM_UPDATE_DELAY = 75,
  MEDIUM_UPDATE_DELAY = 500,
  FAST_UPDATE_DELAY = 250;

const ADD_ENTITY = 'ADD_ENTITY',
  REMOVE_ENTITY = 'REMOVE_ENTITY';

const { Processor }  = require('sam-ecs');

/**
 * @description - Generates a 'TetriminoComponent', which is responsible for 
 * keeping track of the shape and rotation of the piece
 * @param {int} pieceIndex - The index of the piece into the huge 'piece array'
 * above
 * @return {Object} - a 'TetriminoComponent' component
 */
function generatePieceComponent(pieceIndex) {
  var rotation = 0;
  return {
    'name': 'TetriminoComponent',
    'state': {
      'shape': JSON.parse(JSON.stringify(PIECES[pieceIndex].slice())),
      'rotation': rotation,
      'active': false
    }
  }
}

/**
 * @description - Generates a 'Transform' that is responsible for keeping track
 * of position and velocity
 * @param {int} x - Initial x coordinate for position
 * @param {int} y - initial y coordinate for position
 * @return {Object} - A Transform component
 */
function generateTransformComponent(x, y) {
  return {
    'name': 'Transform',
    'state': {
      'pos': {
        'x': x,
        'y': y
      },
      'velocity': {
        'x': 0,
        'y': 0,
        'rotational': 0
      }
    }
  };
}

/**
 * @description - Generates a render component that is responsible for 
 * keeping track of the canvas object that will be drawn to the screen
 * @param {int} pieceIndex - index that indicates what piece will be
 * drawn
 * @return {Object} - A Render component
 */
function generateRenderComponent(pieceIndex) {
  var canvas = document.createElement('canvas');
  canvas.width = PIECE_LENGTH;
  canvas.height = PIECE_LENGTH;
  if (canvas && canvas.getContext) {
    var context = canvas.getContext('2d');
    context.fillStyle = COLORS[pieceIndex];
    context.fillRect(0, 0, PIECE_LENGTH, PIECE_LENGTH);
  }
  return {
    'name': 'Render',
    'state': {
      'canvas': canvas
    }
  };
}

/**
 * @description - Generates a component whose only function is to denote
 * which tetrimino is supposed to be received user input
 */
function generateUserInputComponent() {
  return {
    'name': 'UserInput',
    'state': {}
  };
}

const UPDATE_VELOCITY = 'UPDATE_VELOCITY',
  SET_ACTIVENESS = 'SET_ACTIVENESS',
  UPDATE_POSITION = 'UPDATE_POSITION';

/**
 * @description - Reducer function for the UPDATE_VELOCITY
 * action
 * @param {Object} action - the action object
 * @param {Manager} manager - the ECS manager
 */
function updateVelocityReducer(action, manager) {
  var entityState;
  try {
    entityState = manager.getEntityState(action.entity);
  }
  catch(e) {

  }
  
  if (!entityState)
    return;
  var transform = entityState.Transform;
  transform.velocity = action.velocity;
}

/**
 * @description - Reducer function for SET_ACTIVENESS, which sets 
 * the given entity's tetrimino component to active or not
 * @param {Object} action - the action object
 * @param {Manager} manager - the ECS manager
 */
function setActivenessReducer(action, manager) {
  var entityState = manager.getEntityState(action.entity);
  var tetrimino = entityState.TetriminoComponent;
  tetrimino.active = action.active;
}

/**
 * @description - Reducer function for UPDATE_VELOCITY, which
 * updates the position for an entity
 * @param {Object} action - the update velocity action
 * @param {Manager} manager - the ECS manager
 */
function updatePositionReducer(action, manager) {
  var entityState = manager.getEntityState(action.entity);
  entityState.Transform.pos = action.pos;
}

/**
 * @description - Processor that draws pieces to the screen every frame
 */
class RenderProcessor extends Processor {
  constructor (manager, name) {
    super(manager, name);
    this.components = new Set(['Render', 'TetriminoComponent', 'Transform']);
    var gameCanvas = document.createElement('canvas');
    gameCanvas.id = 'game';
    gameCanvas.width = PIECE_LENGTH * BOARD_WIDTH;
    gameCanvas.height = PIECE_LENGTH * BOARD_HEIGHT;
    gameCanvas.style = "display: inline;";
    document.body.appendChild(gameCanvas);
    this.gameBoard = document.getElementById('game');

    if (!this.gameBoard) {
      throw new TypeError("Can't draw to an undefined game board!");
    }
  }

  /**
   * @description - Draws all the entities that have render components every frame
   * @param {Set} entities - the set of hashes that correspond to entites that 
   * have the required components for this processor
   * @param {Manager} manager - the manager itself
   */
  update(entities, manager) {
    var context = undefined;

    if (this.gameBoard && this.gameBoard.getContext)
      context = this.gameBoard.getContext('2d');
    if (!context)
      throw new TypeError("Can't get the canvas from the game board!");

    context.fillStyle = WHITE;
    context.fillRect(0, 0, this.gameBoard.width, this.gameBoard.height);

    for (var hash of entities) {
      var entity = manager.getEntity(hash);
      var transform = entity.getComponent('Transform');
      var tetrimino = entity.getComponent("TetriminoComponent");
      var shape = tetrimino.shape[tetrimino.rotation];

      var render = entity.getComponent('Render');
      for (var x of [-2, -1, 0, 1, 2]) {
        for (var y of [-2, -1, 0, 1, 2]) {
          if (shape[y + 2][x + 2]) {
            var finalX = transform.pos.x + x;
            var finalY = transform.pos.y + y;
            context.drawImage(render.canvas, 
              finalX * PIECE_LENGTH, finalY * PIECE_LENGTH);
          }
        }
      }
    }
  }

  /**
   * @description - returns the set of components that are required for 
   * @return {Set} - set of required components
   */
  getComponentNames() {
    return this.components;
  }
}

/**
 * @description - Processor that is responsible for updating piece positions and 
 * calculating lines that can be scored
 */
class PhysicsProcessor extends Processor {
  constructor (manager, name) {
    super(manager, name);
    this.components = new Set(['TetriminoComponent', 'Transform']);
    this.gameBoard = new Array();
    this.fillBoard();

    this.updateDelay = INTIIAL_UPDATE_DELAY;
    this.savedDelay = 0;
    this.lastUpdate = Date.now();

  }

  /**
   * @description - Changes the update delay
   * @param {int} updateDelay - The new value to change the update delay to
   */
  changeUpdateDelay(updateDelay) {
    this.savedDelay = this.updateDelay;
    this.updateDelay = updateDelay;
  }

  /**
   * @description - Reverts the update delay to the saved delay
   */
  revertUpdateDelay() {
    this.updateDelay = this.savedDelay;
    this.savedDelay = 0;
  }

  /**
   * @description - Fills the game board with zeros
   */
  fillBoard() {
    if (!this.gameBoard)
      throw new TypeError("'gameBoard' must be defined!");
    for (var y = 0; y < BOARD_HEIGHT; y++) {
      this.gameBoard.push(new Array());
      for (var x = 0; x < BOARD_WIDTH; x++) {
        this.gameBoard[y].push(0);
      }
    }
  }

  /**
   * @description - Called every frame. Rotates pieces that have rotational 
   * velocities as fast as this function is called, moves pieces according
   * to what the current 'updateDelay' is set to
   * @param {Set} entities - the set of unique hashes that correspond to all 
   * the entities containing all component types returned by 
   * 'getComponentNames'
   * @param {Manager} manager - the manager object itself
   */
  update(entities, manager) {
    
    this.entities = entities;

    var updateActivePiece = false;
    var current = Date.now();
    var elapsed = current - this.lastUpdate;
    if (elapsed >= this.updateDelay) {
      this.lastUpdate = current;
      updateActivePiece = true;
    }


    for (var hash of entities) {
      var entity = manager.getEntity(hash);
      var transform = entity.getComponent('Transform');
      var shape = entity.getComponent('TetriminoComponent');
      if (transform.velocity.rotational > 0) {
        //determine if this piece can be rotated or not
        this.rotatePiece(transform, shape);
      }

      if (transform.velocity.x != 0) {
        this.movePiece(transform, shape, 'x');
      }
  
      if (updateActivePiece) {
        //move pieces that have current velocities
        if (transform.velocity.y != 0) {
          var oldX = transform.pos.x,
            oldY = transform.pos.y;
          this.movePiece(transform, shape, 'y');
          if (oldX == transform.pos.x &&
            oldY == transform.pos.y) {
            this.absorbPiece(entity);
          }
        }
      }

      // if the piece still has a velocity then reset it
      if (transform.velocity.x || transform.velocity.y ||
        transform.velocity.rotational)
        manager.dispatch(
          {
            'type': UPDATE_VELOCITY,
            'entity': hash,
            'velocity': {
              'x': 0,
              'y': shape.active ? transform.velocity.y : 0,
              'rotational': 0
            } 
          }
        );
    }
  }

  /**
   * @description - This absorbs the piece into the game board and
   * triggers another piece to be added
   * @param {Entity} piece - the piece entity which contains all the
   * relevant components
   */
  absorbPiece(piece) {
    var transform = piece.getComponent('Transform');
    var tetrimino = piece.getComponent('TetriminoComponent');
    if (tetrimino.shape === undefined)
      throw new TypeError("Shape can't be undefined!");
    var shape = tetrimino.shape[tetrimino.rotation];
    
    var linesToCheck = new Set();
    for (var y of [-2, -1, 0, 1, 2]) {
      for (var x of [-2, -1, 0, 1, 2]) {
        var present = shape[y + 2][x + 2];
        if (!present)
          continue;
        var newX = transform.pos.x + x,
          newY = transform.pos.y + y;
        if (newY < 0) {
          this.resetGame();
          return;
        }
        if (newX < 0 || newX >= BOARD_WIDTH ||
          newY >= BOARD_HEIGHT) {
          throw new RangeError("Piece isn't within the bounds of the board!");
        }

        this.gameBoard[newY][newX] = shape[y + 2][x + 2];
        linesToCheck.add(newY);
      }
    }

    var linesToRemove = new Array();
    for (var lineNumber of linesToCheck) {
      if (this.checkLine(lineNumber)) {
        linesToRemove.push(lineNumber);
      }
    }
    this.removeLines(linesToRemove);

    try {
      piece.removeComponent('UserInput');
      this.manager.dispatch({
        'type': SET_ACTIVENESS,
        'entity': piece.hash(),
        'active': false
      });
    }
    catch(e) {

    }

    this.addPieceToBoard();
  }

  /**
   * @description - Resets the game
   */
  resetGame() {
    this.clearBoard();
    this.linesRemoved = 0;
    this.addPieceToBoard();
  }

  /**
   * @description - Resets the game board
   */
  clearBoard() {
    //remvoe the entities
    for (var hash of this.entities) {
      this.manager.dispatch({
        'type': REMOVE_ENTITY,
        'hash': hash
      });
    }

    //remove the state of the gameboard
    for (var row of this.gameBoard) {
      for (var i = 0; i < row.length; i++) {
        row[i] = 0;
      }
    }
  }

  /**
   * @description - Adds a new piece to the board
   */
  addPieceToBoard() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var pieceIndex = getRandomInt(0, PIECES.length);
    this.manager.dispatch({
      'type': ADD_ENTITY,
      'components': [
        generateRenderComponent(pieceIndex),
        generateTransformComponent(5, -1),
        generatePieceComponent(pieceIndex),
        generateUserInputComponent()
      ]
    });

    var userInputEntity;
    while (!userInputEntity) {
      try {
        userInputEntity = this.manager.getEntitiesByComponent('UserInput')
          .values().next().value;
      }
      catch (e) {
        userInputEntity = undefined;
      }
    }

    this.manager.dispatch({
      'type': SET_ACTIVENESS,
      'entity': userInputEntity,
      'active': true
    });
    this.manager.dispatch({
      'type': UPDATE_VELOCITY,
      'entity': userInputEntity,
      'velocity': {
        'x': 0,
        'y': 1
      }
    });
  }

  /**
   * @description - Moves the shape if possible according to the given
   * velocity
   * @param {Object} transform - the state associated by the transform
   * compoennt
   * @param {Object} shape - the state associated by the Tetrimino
   * component
   */
  movePiece(transform, shape, axis) {
    var newCenterX = transform.pos.x;
    var newCenterY = transform.pos.y;
    if (!axis || axis.toLowerCase() == 'both') {
      newCenterX += transform.velocity.x;
      newCenterY += transform.velocity.y;
    }
    else if (axis.toLowerCase() == 'x')
      newCenterX += transform.velocity.x;
    else if (axis.toLowerCase() == 'y')
      newCenterY += transform.velocity.y;

    var success = true;
    for (var y of [-2, -1, 0, 1, 2]) {
      for (var x of [-2, -1, 0, 1, 2]) {
        var present = shape.shape[shape.rotation][y + 2][x + 2];
        if (!present)
          continue;
        else {
          success = newCenterY + y < 0 || (newCenterX + x >= 0 && newCenterX + x < BOARD_WIDTH && 
            newCenterY + y < BOARD_HEIGHT && !this.testCollision(newCenterX + x, newCenterY + y));
          if (!success)
            break;
        }
      }
      if (!success)
        break;
    }

    if (success) {
      transform.pos.x = newCenterX;
      transform.pos.y = newCenterY;
    }
  }

  /**
   * @description - Returns the types of components requried for entities to 
   * have to be processed by this processor
   * @return {Set} - set of components
   */
  getComponentNames() {
    return this.components;
  }

  /**
   * @description - Attempts to rotate the piece by assessing if it causes
   * any collisions, then rotates it
   * @param {Object} transform - the state of the entity's transform component
   * @param {Object} shape - the state of the tetrimino component
   */
  rotatePiece(transform, shape) {
    var newRotation = shape.rotation + 1;
    //only four rotation
    newRotation %= 4;

    var success = true;
    var newState = shape.shape[newRotation];
    for (var y of [-2, -1, 0, 1, 2]) {
      for (var x of [-2, -1, 0, 1, 2]) {
        var present = newState[y + 2][x + 2];
        if (!present)
          continue;
        //look for collision
        if (transform.pos.y + y < 0 || transform.pos.y + y >= BOARD_HEIGHT || 
          transform.pos.x + x < 0 || transform.pos.x + x >= BOARD_WIDTH ||
          this.testCollision(transform.pos.x + x, transform.pos.y + y)) {
          success = false;
          break;
        }
      }
      if (!success)
        break;
    }
    // no collisions!
    if (success) {
      shape.rotation = newRotation;
    }
  }

  /**
   * @description - Checks if the line in the board given by lineNumber fills
   * the row and can thus be removed from the board
   * @param {int} lineNumber - line number to be checked
   * @return {boolean} - true or false whether this line is full
   */
  checkLine(lineNumber) {
    var row = this.gameBoard[lineNumber];
    for (var x of row) {
      if (!x)
        return false;
    }
    return true;
  }

  /**
   * @description - Removes lines from the gameboard in the correct
   * order-- otherwise things will break
   * @param {Array} lines - the lines to remove
   */
  removeLines(lines) {
    
    lines.sort((a, b) => {
      return a - b;
    });
    for (var lineNumber of lines) {
      
      this.removeLine(lineNumber);
    }

    lines.sort((a, b) => {
      return b - a;
    });
    for (var lineNumber of lines) {
      
      this.spliceLine(lineNumber);
    }

    // console.log('newGameboard');
    // console.dir(this.gameBoard);

    for (var lineNumber of lines) {
      var newRow = new Array();
      for (var i = 0; i < BOARD_WIDTH; i++)
        newRow.push(0);
      this.gameBoard.unshift(newRow);
    }

    if (this.linesRemoved === undefined)
      this.linesRemoved = 0
    this.linesRemoved += lines.length;
    if (this.linesRemoved > 10)
      this.updateDelay = MEDIUM_UPDATE_DELAY
    else if (this.linesRemoved > 25)
      this.updateDelay = FAST_UPDATE_DELAY

    this.updateLines();
  }

  /**
   * @description - Updates the lines UI component which 
   * tells the player how many lines he/she has completed
   */
  updateLines() {
    var linesComponent = document.getElementById('lines');
    if (linesComponent === null) {
      linesComponent = document.createElement('span');
      linesComponent.style = "font-size: 28px;"
      linesComponent.id = 'lines';
      document.body.appendChild(linesComponent);
    }
    linesComponent.innerHTML = this.linesRemoved.toString();

  }

  /**
   * @description - Removes the actual line from the gameboard
   * @param {int} lineNumber - the line to be removed
   */
  spliceLine(lineNumber) {
    this.gameBoard.splice(lineNumber, 1);
  }

  /** 
   * @description - Does the rest of the computations required when a row
   * is deleted
   * @param {int} lineNumber - line to be deleted within the game board
   */
  removeLine(lineNumber) {
    for (var hash of this.entities) {
      var entity;
      try {
        entity = this.manager.getEntity(hash);
      }
      catch (err) {
        continue;
      }
      var transform = entity.getComponent('Transform');
      var tetrimino = entity.getComponent('TetriminoComponent');
      var shape = tetrimino.shape[tetrimino.rotation];
      
      if (Math.abs(transform.pos.y - lineNumber) <= 2) {
        var relativeLineToCheck = lineNumber - transform.pos.y;
        if (relativeLineToCheck < -2 || relativeLineToCheck > 2) {
          throw new RangeError("Collision with entity miscalculated!");
        }
        var relLine = shape[relativeLineToCheck + 2];
        var collision = false;
        for (var i = 0; i < relLine.length; i++) {
          collision |= relLine[i] == 1;
          relLine[i] = 0;
        }

        if (collision && !this.checkValidity(shape)) {
          this.manager.dispatch({
            'type': REMOVE_ENTITY,
            'hash': entity.hash()
          });
        }
        else{
          
          for (var i = relativeLineToCheck + 2; i >= 1; i--) {
            shape[i] = shape[i - 1];
          }
          shape[0] = new Array();
          for (var t = 0; t < 5; t++)
            shape[0].push(0);
          
        }  
      }
      else if(transform.pos.y < lineNumber) {
        this.manager.dispatch({
          'type': UPDATE_POSITION,
          'entity': entity.hash(),
          'pos': {
            'x': transform.pos.x,
            'y': transform.pos.y + 1
          }
        });
      }
    }
  }

  /**
   * @description - Checks if a shape still has any pieces remaining
   * @param {Array} shape - the shape to be checked
   * @return {bool} - Does this shape have any pieces remaining
   */
  checkValidity(shape) {
    var sum = 0;
    for (var y = 0; y < shape.length && sum <= 0; y++) {
      sum += shape[y].reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    }
    return sum > 0;
  }

  /**
   * @description - helper method to test collisions within the gameboard
   * @param {int} x - the x coordinate to check
   * @param {int} y - the y coordinate to check
   * @return {boolean} - whether or not there is a collision at (x, y)
   */
  testCollision(x, y) {
    return this.gameBoard[y][x];
  }
}

/**
 * @description - Key event listener from the keyboard
 */
document.addEventListener('keydown', (e) => {
  var entityHash;
  try {
    var entitySet = game.manager.getEntitiesByComponent('UserInput');
    if (entitySet.size != 1) {
      console.error("UserInput component not correct!");
      return;
    }
    entityHash = entitySet.values().next().value;
    var entityState = game.manager.getEntityState(entityHash);
    var velocityState = entityState.Transform.velocity;
  }
  finally {

    if (!entityHash)
      return;
    if (e.key.toString() === 'ArrowUp') {
      e.preventDefault();
      game.manager.dispatch({
        'type': UPDATE_VELOCITY,
        'entity': entityHash,
        'velocity': Object.assign(velocityState, {'rotational': 1})

      });
    }

    else if (e.key.toString() === "ArrowRight") {
      game.manager.dispatch({
        'type': UPDATE_VELOCITY,
        'entity': entityHash,
        'velocity': Object.assign(velocityState, {'x': 1})
      });
    }

    else if (e.key.toString() === "ArrowLeft") {
      game.manager.dispatch({
        'type': UPDATE_VELOCITY,
        'entity': entityHash,
        'velocity': Object.assign(velocityState, {'x': -1})
      });
    }

    else if (e.key.toString() === 'ArrowDown') {
      e.preventDefault();
      var physicsProcessor = game.manager.getProcessor('PhysicsProcessor');
      if (physicsProcessor.updateDelay != MINIMUM_UPDATE_DELAY)
        physicsProcessor.changeUpdateDelay(MINIMUM_UPDATE_DELAY);
    }
  }
});

/**
 * @description - Listener for key up events. Specifically used for when the player
 * presses the down arrow to make the piece fall faster
 */
document.addEventListener('keyup', (e) => {
  if (e.key.toString() === "ArrowDown") {
    var physicsProcessor = game.manager.getProcessor('PhysicsProcessor');
    physicsProcessor.revertUpdateDelay();
  }
});

var physicsProcessor = new PhysicsProcessor(game.manager, "PhysicsProcessor");
var renderProcessor = new RenderProcessor(game.manager, "RenderProcessor");
game.manager.addProcessor(physicsProcessor);
game.manager.addProcessor(renderProcessor);

game.manager.addReducer(updateVelocityReducer, [UPDATE_VELOCITY]);
game.manager.addReducer(setActivenessReducer, [SET_ACTIVENESS]);
game.manager.addReducer(updatePositionReducer, [UPDATE_POSITION]);

game.run();
game.manager.dispatch({
  'type': ADD_ENTITY,
  'components': [
    generateRenderComponent(2),
    generateTransformComponent(5, -1),
    generatePieceComponent(2),
    generateUserInputComponent()
  ]
});

var entities = game.manager.getEntitiesByComponent("UserInput");
var entityHash = entities.values().next().value;

game.manager.dispatch({
  'type': SET_ACTIVENESS,
  'entity': entityHash,
  'active': true
});

var velocity = game.manager.getEntityState(entityHash).Transform.velocity;
game.manager.dispatch({
  'type': UPDATE_VELOCITY,
  'entity': entityHash,
  'velocity': Object.assign(velocity, {'y': 1})
});