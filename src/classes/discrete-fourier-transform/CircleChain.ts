import {Circle} from "./Circle"
import {ICoordinates} from "@/types"
import {CanvasWrapper} from "./CanvasWrapper"
import {LinkedList} from "../LinkedList"

export class CircleChain {
    private static readonly EDGE_DRAWS_STACK_SIZE = 250
    public circles: Circle[] = []
    public finalEdgeDraws: LinkedList<ICoordinates> = new LinkedList<ICoordinates>()
    private _canvasWrapper: CanvasWrapper

    constructor(canvasWrapper: CanvasWrapper, x0: number, y0: number, radii: number[], phases: number[], angularSpeeds: number[]) {
        this._canvasWrapper = canvasWrapper
        this.circles.push(new Circle(this._canvasWrapper, x0, y0, radii[0], phases[0], angularSpeeds[0], "hsl(0,25%,60%)"))
        for (let i = 1; i < radii.length; i++) {
            this.circles.push(new Circle(this._canvasWrapper, this.circles[i - 1].edgeX, this.circles[i - 1].edgeY, radii[i], phases[i], angularSpeeds[i], `hsl(${i * 70},25%,60%)`))
        }
    }

    get finalCircle(): Circle {
        return this.circles[this.circles.length - 1]
    }

    public onEdgeDrawsFull: () => void = () => null

    update() {
        for (let i = 0; i < this.circles.length; i++) {
            const currentCircle = this.circles[i]
            currentCircle.update()
            if (i > 0) {
                const previousCircle = this.circles[i - 1]
                currentCircle.x = previousCircle.edgeX
                currentCircle.y = previousCircle.edgeY
            }
        }


        this.finalEdgeDraws.addNode({
            x: this.finalCircle.edgeX,
            y: this.finalCircle.edgeY
        })

        if (this.finalEdgeDraws.size > CircleChain.EDGE_DRAWS_STACK_SIZE) {
            this.onEdgeDrawsFull()
            this.finalEdgeDraws.deleteHeadNode()
        }

    }

    render() {
        for (let i = 0; i < this.circles.length; i++) {
            if (this.circles[i].radius >= 5) {
                this.circles[i].render()
            }
        }
        const pathColour = "#e4edf9"
        this._canvasWrapper.drawCircle(this.finalCircle.edgeX, this.finalCircle.edgeY, 2, pathColour, pathColour)
        this._canvasWrapper.drawPath(this.finalEdgeDraws, pathColour)
    }
}
