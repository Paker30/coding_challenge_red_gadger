'use strict';

const Joi = require('@hapi/joi');

const coordinate = Joi.number().min(0).max(50).required();
const board = Joi.array().items(coordinate).required();
const robot = Joi.object({
    init: {
        coordinates: Joi.array().items(coordinate).length(2).required()
        , direction: Joi.string().valid('N', 'S', 'E', 'W').uppercase().length(1).required()
    }
    , instructions: Joi.string().pattern(/^[RFL]{1,100}$/i).uppercase().required()
});

const robots = Joi.array().items(robot).required();
const validInput = Joi.object({ board, robots });

module.exports = { validInput };
