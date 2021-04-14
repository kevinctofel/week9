const uuid = require('uuid');

const listoftodos = [
      {
        id: uuid.v4(),
        text: "goto gym",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        text: "do laundry",
        isCompleted: true
      },
      {
        id: uuid.v4(),
        text: "food shopping",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        text: "do homework",
        isCompleted: true
      }
    ];
    
module.exports = listoftodos;