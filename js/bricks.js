var bricks = [
    [
        [0, 0],
        [-1, 0],
        [1, 0],
        [0, 1],
    ],
    [
        [-1, 0],
        [0, 0],
        [1, 0],
        [2, 0],
    ],
    [
        [-1, 0],
        [0, 0],
        [1, 0],
        [1, -1],
    ],
    [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ],
    [
        [0, 0],
    ],
    [
        [0, 0],
        [0, 1],
    ],
    [
        [-1, 0],
        [0, 0],
        [0, 1],
        [1, 1],
    ]
]

var getBrick = function () {
    var max = bricks.length
    var idx = getRandomInt(max)
    var brick = bricks[idx]
    console.info("b1: ", brick)
    brick = randomRotate(brick)
    console.info("b2: ", brick)
    return brick
}

var colors = [
    "#2bc",
    "#f64",
    "#687",
    "#4b2",
]

var getColor = function () {
    var max = colors.length
    var idx = getRandomInt(max)
    return colors[idx]
}

var randomRotate = function (brick, max) {
    var idx = getRandomInt(max)
    var _brick = brick
    for (var n = 0; n < idx; n++) {
        _brick = []
        for (var i = 0; i < brick.length; i++) {
            var e = brick[i];
            var _cell = [
                -e[1],
                e[0],
            ]
            _brick.push(_cell)
        }
        brick = _brick
    }
    return _brick
}