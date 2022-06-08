const canvas = document.getElementById('canvas');
const canvasArea = document.getElementById('canvas-area')

const createCoordinateX = (ctx) => {
    for (let i = 0; i < canvasArea.clientWidth; i++) {
        ctx.moveTo(i * 20, canvasArea.clientHeight);
        ctx.lineTo(i * 20, 0);

    }
}
const createCoordinateY = (ctx) => {
    for (let i = 0; i < canvasArea.clientWidth; i++) {
        ctx.moveTo(0, i * 20);
        ctx.lineTo(canvasArea.clientWidth, i * 20);

    }
}
const createCoordinate = (ctx) => {
    createCoordinateX(ctx)
    createCoordinateY(ctx)

    ctx.stroke()

}
const resetCanvas = (ctx) => {
    ctx.clearRect(0, 0, canvasArea.clientWidth, canvasArea.clientHeight);
}
const canvasSetting = () => {
    canvas.height = canvasArea.clientHeight
    canvas.width = canvasArea.clientWidth
}
const canvasInit = (ctx) => {
    canvasSetting()
    createCoordinate(ctx)
}

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    canvasSetting()
    createCoordinate(ctx)


    window.addEventListener('resize', () => canvasInit(ctx))
} else {
    // canvas-unsupported code here
}

