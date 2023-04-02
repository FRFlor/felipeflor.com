import {CanvasWrapper} from "./CanvasWrapper"

export class Circle {
    public x: number
    public y: number
    public radius: number
    public angle: number
    public angularSpeed: number
    public colour: string
    private _canvasWrapper: CanvasWrapper

    constructor(canvasWrapper: CanvasWrapper, x: number, y: number, radius: number, angle: number, angularSpeed: number, colour = "#000") {
        this._canvasWrapper = canvasWrapper
        this.x = x
        this.y = y
        this.radius = radius
        this.angle = angle
        this.angularSpeed = angularSpeed
        this.colour = colour
    }

    get edgeX(): number {
        return this.x + Math.cos(this.angle) * this.radius
    }

    get edgeY(): number {
        return this.y + Math.sin(this.angle) * this.radius
    }

    render() {
        this._canvasWrapper.drawCircle(this.x, this.y, this.radius, this.colour)
        this._canvasWrapper.drawCircle(this.x, this.y, 1, this.colour)
        this._canvasWrapper.drawLine(this.x, this.y, this.edgeX, this.edgeY, this.colour)
        this._canvasWrapper.drawCircle(this.edgeX, this.edgeY, 1, this.colour, this.colour)
    }

    update() {
        this.angle += this.angularSpeed
    }
}

