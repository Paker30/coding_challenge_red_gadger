'use strict';

const { cond, equals, findIndex, propEq, identity, T, compose, always, zipWith, add } = require('ramda');

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
const isOut = (board) => (coordinate) => board[0] === coordinate[0] || board[1] === coordinate[1];
const printOut = (border) => (coordinate) => border.concat(coordinate);

const consumeInstruction = (instruction) => ({coordinates, direction, to}) => {
   const consumption =  cond([
        [equals('F'), () => move(coordinates)(to)]
        , [T, () => changePosition(direction)(instruction)]
    ])(instruction);

    return instruction === 'F' ? {coordinates : consumption} : { direction: consumption.direction, to: consumption.coordinate }
};

module.exports = { compass, changePosition, move, consumeInstruction };
