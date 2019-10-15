'use strict';

const { cond, equals, findIndex, propEq, identity, T, compose, always, zipWith, add, find } = require('ramda');

const compass = [
    { 'direction': 'N', coordinate: [0, 1] }
    , { 'direction': 'E', coordinate: [1, 0] }
    , { 'direction': 'S', coordinate: [0, -1] }
    , { 'direction': 'W', coordinate: [-1, 0] }
];

const roundPosition = cond([
    [equals(-1), always(3)]
    , [equals(4), always(0)]
    , [T, identity]
]);

const changePosition = (from) => (instruction) => {
    const compassIndex = compose(
        roundPosition
        , cond([
            [equals('R'), () => findIndex(propEq('direction', from), compass) + 1]
            , [equals('L'), () => findIndex(propEq('direction', from), compass) - 1]
        ]))(instruction);

    return compass[compassIndex];
};

const move = (from) => (to) => zipWith(add)(from)(to);
const isOut = (board) => (coordinate) => board[0] < coordinate[0] || board[1] < coordinate[1];
const printOut = (border) => (coordinate) => border.push(coordinate);
const orientate = (direction) => find(propEq('direction', direction), compass);
const moveAlong = ({board, border}) => (coordinates) => (to) => {
    const newCoordinate = move(coordinates)(to);
    const outOfTheBorder = isOut(board)(newCoordinate);
    
    if (outOfTheBorder) {
        if (!find(equals(newCoordinate), border)){
            printOut(border)(newCoordinate);
            return 'LOST';
        }
        return coordinate;
    }
    return newCoordinate;
};

const consumeInstruction = (border) => (instruction) => ({ coordinates, direction, to }) => {
    const consumption = cond([
        [equals('F'), () => moveAlong(border)(coordinates)(to || orientate(direction).coordinate)]
        , [T, () => changePosition(direction)(instruction)]
    ])(instruction);

    return instruction === 'F' ? { coordinates: consumption } : { direction: consumption.direction, to: consumption.coordinate }
};

module.exports = { compass, changePosition, move, consumeInstruction, orientate };
