var Game = function () {
    var o = {
        keydowns: {},
        actions: {},
        remain: [],
        color: getColor(),
    }
    var canvas = document.querySelector("canvas")
    var context = canvas.getContext("2d")
    context.fillStyle = o.color
    o.canvas = canvas
    o.context = context

    // 绘制砖块
    o.drawBrick = function (brick) {
        var b = brick
        var cells = brick.cells
        for (var i = 0; i < cells.length; i++) {
            var e = cells[i]
            context.fillRect(b.x + e[0] * b.w - b.b, b.y + e[1] * b.h - b.b, b.w - 2 * b.b, b.h - 2 * b.b)
        }
    }

    // 绘制保留图案
    o.drawRemain = function (b) {
        var r = o.remain
        for (var i = 0; i < r.length; i++) {
            var e = r[i]
            var _color = o.color
            context.fillStyle = "grey"
            context.fillRect(e[0] - b.b, e[1] - b.b, b.w - 2 * b.b, b.h - 2 * b.b)
            context.fillStyle = _color
        }
    }

    o.draw = function (brick) {
        o.drawBrick(brick)
        o.drawRemain(brick)
    }

    o.resetColor = function () {
        o.color = getColor()
        o.context.fillStyle = o.color
    }

    window.addEventListener("keydown", function (event) {
        o.keydowns[event.key] = true
    })
    window.addEventListener("keyup", function (event) {
        o.keydowns[event.key] = false
    })

    // 注册事件
    o.registerAction = function (key, callback) {
        o.actions[key] = callback
    }
    o.checkTouch = function (brick) {
        if (brick.begin && checkTouchRemain(brick, o.remain)) {
            return true
        }
        return false
    }

    // 消除并计算分数
    // remainRow：{y1:[x1,x2...],y2...}
    o.calcScore = function () {
        var remainRow = {}
        // 组装数据
        for (var i = 0; i < o.remain.length; i++) {
            var cell = o.remain[i];
            remainRow = remainRowAdd(remainRow, cell)
        }
        log(remainRow)
        // 遍历数据
        var rows = Object.keys(remainRow)
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i]
            if (remainRow[row].length == 20) {
                log("消除")
                o.remain = remainRemove(o.remain, row)
                e("#id-score").innerHTML = "当前分数：" + ++score
            }
        }
    }

    o.update = function (brick) {
        var realCells = brick.getRealXYCells()
        o.remain = o.remain.concat(realCells)
        o.resetColor()
        o.calcScore()
    }

    // 执行游戏
    o.run = function () {
        var actions = Object.keys(o.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (o.keydowns[key]) {
                o.actions[key]()
            }
        }
        brick.moveDown()
    }

    return o
}