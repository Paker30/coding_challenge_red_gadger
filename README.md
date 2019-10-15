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
