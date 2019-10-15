'use strict';

const { reduce, last } = require('ramda');

const { board, robots } = require('./robots');
const { positions, changePosition, move, consumeInstruction, orientate } = require('./actions');
const border = [];

const explore = ({ init, instructions }) => {

    return reduce((path, instruction) => {
        const lastPosition = last(path);
        if (lastPosition.coordinates === 'LOST') {
            return path;
        }
        const newPosition = consumeInstruction({board, border})(instruction)(lastPosition);
        return path.concat([{
            coordinates: newPosition.coordinates || lastPosition.coordinates
            , direction: newPosition.direction || lastPosition.direction
            , to: newPosition.to || orientate(lastPosition.direction).coordinate
        }]);
    }, [init])(instructions);
};

const exploration = explore(robots[1]);
console.log('exploration', JSON.stringify(last(exploration, null, 4)));
