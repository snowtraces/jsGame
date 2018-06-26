// 二维数组判断是否包含
var isContain = function (a, b) {
    for (var i = 0; i < a.length; i++) {
        var e = a[i];
        if (e[0] == b[0] && e[1] == b[1]) {
            return true
        }
    }
    return false
}

var calcTouchRange = function (remain, brickH) {
    var remainUp = []
    for (var i = 0; i < remain.length; i++) {
        var cell = remain[i];
        var _cell = [cell[0], cell[1] - brickH]
        if (!isContain(remainUp, _cell)) {
            remainUp.push(_cell)
        }
    }
    return remainUp
}

// 计算碰撞
var checkTouchRemain = function (brick, remain) {
    var isTouch = false

    // 计算碰撞区域
    var remainUp = calcTouchRange(remain, brick.h)

    // 对比brick和碰撞区域是否重叠
    for (var i = 0; i < brick.cells.length; i++) {
        var cell = brick.cells[i];

        // 计算真实左上角坐标
        cellX = brick.x + cell[0] * brick.w
        cellY = brick.y + cell[1] * brick.h
        var _cell = [cellX, cellY]

        // 碰撞
        if (isContain(remainUp, _cell) || cellY + brick.h == 400) {
            isTouch = true
            break
        }
    }
    return isTouch
}

// 随机数
var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
}