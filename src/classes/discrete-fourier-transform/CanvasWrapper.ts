import {ICoordinates} from "@/types"
import {LinkedList} from "../LinkedList"

export class CanvasWrapper {
    private _canvas: HTMLCanvasElement
    private _context: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        this._context = canvas.getContext("2d")!
    }

    drawCircle(x: number, y: number, radius: number, colour = "#000", fill?: string) {
        this._context.beginPath()
        this._context.arc(x, y, radius, 0, 2 * Math.PI)
        this._context.strokeStyle = colour
        this._context.lineWidth = 2
        this._context.stroke()
        this._context.lineWidth = 1
        if (fill) {
            this._context.fillStyle = fill
            this._context.fill()
        }
    }

    drawLine(x0: number, y0: number, x1: number, y1: number, colour = "#000") {
        this._context.moveTo(x0, y0)
        this._context.lineTo(x1, y1)
        this._context.strokeStyle = colour
        this._context.stroke()
    }

    drawPath(coordinates: LinkedList<ICoordinates>, colour = "#000") {
        if (coordinates.head === null) {
            return
        }
        this._context.beginPath()
        const startPoint: ICoordinates = coordinates.head.data
        this._context.moveTo(startPoint.x, startPoint.y)
        coordinates.transverse(({x, y}, index) => {
            if (index !== 0) {
                this._context.lineTo(x, y)
            }
        })
        this._context.lineWidth = 5
        this._context.strokeStyle = colour
        this._context.stroke()
        this._context.lineWidth = 1
    }

    drawText(text: string, x: number, y: number) {
        this._context.font = `20px Arial`
        this._context.fillText(text, x, y)
    }

    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }

    onMouseMove(callback: (event: MouseEvent, canvas: HTMLCanvasElement) => void) {
        this._canvas.addEventListener("mousemove", (event: MouseEvent) => callback(event, this._canvas))
    }
}
