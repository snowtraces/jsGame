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
]

var getBrick = function () {
    var max = bricks.length
    var idx = getRandomInt(max)
    return bricks[idx]
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