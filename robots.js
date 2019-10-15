'use strict';

const board = [5, 3];

const robots = [{
    init: {
        coordinates: [1, 1]
        , direction: 'E'
    }
    , instructions: "RFRFRFRF"
}
    , {
    init: {
        coordinates: [3, 2]
        , direction: 'N'
    }
    , instructions: "FRRFLLFFRRFLL"
}
    , {
    init: {
        coordinates: [0, 3]
        , direction: 'W'
    }
    , instructions: "LLFFFLFLFL"
}];

module.exports = { board, robots };
