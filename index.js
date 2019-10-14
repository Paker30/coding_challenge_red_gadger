'use strict';

const { reduce, last } = require('ramda');

const { field, robots } = require('./robots');
const { positions, changePosition, move, consumeInstruction } = require('./actions');
const border = [];

const explore = ({ init, instructions }) => {

    return reduce((path, instruction) => {
        const lastPosition = last(path);
        const newPosition = consumeInstruction(instruction)(lastPosition);
        return path.concat([{
            coordinates: newPosition.coordinates || lastPosition.coordinates
            , direction: newPosition.direction || lastPosition.direction
            , to: newPosition.to || lastPosition.direction
        }]);
    }, [init])(instructions);
};

const exploration = explore(robots[0]);
console.log('exploration', JSON.stringify(last(exploration, null, 4)));