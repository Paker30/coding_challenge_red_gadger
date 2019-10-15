'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

// Declare internals

const internals = {};


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const { validInput } = require('../src/schemas');

it('input to explore Mars is valid', () => {
    const { error, value } = validInput.validate({
        "board": [
            5,
            3
        ],
        "robots": [
            {
                "init": {
                    "coordinates": [
                        1,
                        1
                    ],
                    "direction": "E"
                },
                "instructions": "RFRFRFRF"
            }
        ]
    });

    expect(error).to.not.exist();
});

describe('input to explore Mars is non valid', () => {
    it('Board is no valid', () => {

        const { error, value } = validInput.validate({
            "board": [
                1000,
                3
            ],
            "robots": [
                {
                    "init": {
                        "coordinates": [
                            1,
                            1
                        ],
                        "direction": "E"
                    },
                    "instructions": "RFRFRFRF"
                }
            ]
        });
    
        expect(error).to.exist();
    });

    it('Initial direction is no valid', () => {

        const { error, value } = validInput.validate({
            "board": [
                10,
                3
            ],
            "robots": [
                {
                    "init": {
                        "coordinates": [
                            1,
                            1
                        ],
                        "direction": "Ñ"
                    },
                    "instructions": "RFRFRFRF"
                }
            ]
        });
    
        expect(error).to.exist();
    });

    it('Instruction is longer than 100', () => {

        const { error, value } = validInput.validate({
            "board": [
                10,
                3
            ],
            "robots": [
                {
                    "init": {
                        "coordinates": [
                            1,
                            1
                        ],
                        "direction": "Ñ"
                    },
                    "instructions": "RFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRLRFRFRFRFRL"
                }
            ]
        });
    
        expect(error).to.exist();
    });
});