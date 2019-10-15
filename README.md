# coding_challenge_red_gadger

This modules resolves the Red Gadger coding challenge.

## How to feed data

This version reads the data to explore Mars from the file _src/input.json_, because a validation is done, the data must fill the next format:

```json
{
    "board": [5,3],
    "robots": [
        {
            "init": {
                "coordinates": [1,1],
                "direction": "E"
            },
            "instructions": "RFRFRFRF"
        }
    ]
}
```

- **board**: Size of Mars, minimum value for the coordinates is 0 and maximum is 100
- **coordinates**: initial position of a robot in Mars
- **direction**: initial direction of a robot in Mars, the valid values are: n,N,e,E,s,S,w,W
- **instruccions**: set of commands to operate the robot, it can be an string longer than 100 and the valid values are: r,R,f,F,l,L

If the input does not fit this schema, the program aborts its execution.

## How to install the program

Execute the next command

```shell
npm run i
```

## How to run the program

Execute the next command

```shell
npm run start
```

If every thing works, you will get an out like this

```shell
┌─────────┬───┬───┬─────┬────────┐
│ (index) │ 0 │ 1 │  2  │   3    │
├─────────┼───┼───┼─────┼────────┤
│    0    │ 1 │ 1 │ 'E' │        │
│    1    │ 3 │ 3 │ 'N' │ 'LOST' │
│    2    │ 2 │ 3 │ 'S' │        │
└─────────┴───┴───┴─────┴────────┘
```

Each row is a robot in Mars

## How to run the tests

Execute the next command

```shell
npm run test
```

### About the test coverage and the code

There is no full coverage because I have to refactor some piece of code, the explore function should not be an inpure fuction in order to be able to test it alone, besides it should be in other file so I can required and test it.

There is testing just to show I care about code quality and I probe I know how to handle a testing framework (I know I have not used any library like [Sinon](https://sinonjs.org/))
