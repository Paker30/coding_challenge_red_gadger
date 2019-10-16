'use strict';

const { reduce, last, map, slice, pipe } = require('ramda');

const lastTwo = slice(-2, Infinity);
const lastOne = slice(-1, Infinity);
const input = require('./input');
const { validInput } = require('./schemas');
const { positions, changePosition, move, consumeInstruction, orientate } = require('./actions');

const border = [];
const { value, error } = validInput.validate(input);

if (error) {
    console.error('The input you have provided is not valid');
    process.exit(-1);
}

const { board, robots} = value;

const explore = ({ init, instructions }) => {

    return reduce((path, instruction) => {
        const lastPosition = last(path);
        if (lastPosition.coordinates === 'LOST') {
            return path;
        }
        const newPosition = consumeInstruction({ board, border })(instruction)(lastPosition);
        return path.concat([{
            coordinates: newPosition.coordinates || lastPosition.coordinates
            , direction: newPosition.direction || lastPosition.direction
            , to: newPosition.to || orientate(lastPosition.direction).coordinate
        }]);
    }, [init])(instructions);
};

const prettyOutput = (exploration) =>
    (
        last(exploration).coordinates != 'LOST'
            ? lastOne(exploration)
            : lastTwo(exploration)
    )
        .reduce((acc, item) => {
            return item.coordinates === 'LOST'
                ? acc.concat(['LOST'])
                : acc.concat([...item.coordinates, item.direction]);
        }, []);

const explorations = map(explore, robots);
console.table(map(prettyOutput, explorations));
