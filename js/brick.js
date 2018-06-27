var Brick = function (begin) {
    var o = {
        w: 10,
        h: 10,
        x: 20,
        y: 20,
        step: 10,
        speed: 10,
        b: 1,
        cells: getCells(),
        begin: begin || false,
    }

    o.getRealXYCells = function () {
        var realCells = []
        for (var i = 0; i < o.cells.length; i++) {
            var cell = o.cells[i];
            // 计算真实左上角坐标
            cellX = o.x + cell[0] * o.w
            cellY = o.y + cell[1] * o.h
            var _cell = [cellX, cellY]
            realCells.push(_cell)
        }
        return realCells
    }

    // 旋转 brick
    o.rotate = function () {
        if (!o.begin) return
        log("旋转")
        o.cells = rotate(o.cells)
    }

    var moveInRange = function (canvasW) {
        var minX = 0
        var maxX = canvasW - o.w
        var realCells = o.getRealXYCells()

        // 计算block边缘
        var _minX = 0
        var _maxX = 0
        for (var i = 0; i < realCells.length; i++) {
            var cell = realCells[i];
            var _x = cell[0]
            if (i == 0) {
                _minX = _x
                _maxX = _x
            } else {
                _minX = _x < _minX ? _x : _minX
                _maxX = _x > _maxX ? _x : _maxX
            }
        }

        // 判断是否超出边缘
        if (_minX < minX) {
            console.log("左：", o.x)
            return o.x + o.step
        } else if (_maxX > maxX) {
            return o.x - o.step
        }
        return o.x
    }

    // move
    o.moveLeft = function (canvasW) {
        if (!o.begin) return
        o.x -= o.step
        o.x = moveInRange(canvasW)
    }
    o.moveRight = function (canvasW) {
        if (!o.begin) return
        o.x += o.step
        o.x = moveInRange(canvasW)
    }
    o.moveDown = function () {
        if (!o.begin) return
        o.y += o.speed
    }

    // 开始游戏
    o.go = function () {
        log("go")
        o.begin = !o.begin
    }
    return o
}