const canvas = document.getElementById('canvas');

const createCoordinateX = (ctx) => {
    for (let i = 0; i < window.innerWidth; i++) {
        ctx.moveTo(i * 20, window.innerHeight);
        ctx.lineTo(i * 20, 0);

    }
}
const createCoordinateY = (ctx) => {
    for (let i = 0; i < window.innerWidth; i++) {
        ctx.moveTo(0, i * 20);
        ctx.lineTo(window.innerWidth, i * 20);

    }
}
const createCoordinate = (ctx) => {
    createCoordinateX(ctx)
    createCoordinateY(ctx)

    ctx.stroke()

}
const resetCanvas = (ctx) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}
const canvasSetting = () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
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

