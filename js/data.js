var cellArray = [
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

var getCells = function () {
    var max = cellArray.length
    var idx = getRandomInt(max)
    var cells = cellArray[idx]
    cell = randomRotate(cells, 3)
    return cell
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

var randomRotate = function (cells, max) {
    var idx = getRandomInt(max)
    for (var n = 0; n < idx; n++) {
        cells = rotate(cells)
    }
    return cells
}