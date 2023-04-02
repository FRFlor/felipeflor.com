import FELIPE_POINTS_RAW from "../../../assets/plot-points/Felipe.json"
import {ICoordinates} from "@/types"
import FLOR_POINTS_RAW from "../../../assets/plot-points/Flor.json"
import {EpicycleAnimation} from "./EpicycleAnimation"

export default class FelipeFlor extends EpicycleAnimation {
    public FPS: number = 50
    public frequencyRange = 130
    public animationSpeed: number = 0.025


    constructor(canvas: HTMLCanvasElement) {
        super(canvas)

        const felipeChain = this.getCircleChain(FELIPE_POINTS, {
            x: felipeShiftInCanvas.x,
            y: felipeShiftInCanvas.y
        }, this.animationSpeed)

        const florChain = this.getCircleChain(FLOR_POINTS, {
            x: florShiftInCanvas.x,
            y: florShiftInCanvas.y
        }, -this.animationSpeed)

        this.circleChains = [
            felipeChain,
            florChain
        ]
    }
}


const FELIPE_POINTS = FELIPE_POINTS_RAW.map((point: ICoordinates) => {
    return {
        x: point.x * 1.2 - 185,
        y: point.y * 1.2 - 90
    }
})

const FLOR_POINTS = FLOR_POINTS_RAW.map((point: ICoordinates) => {
    return {
        x: point.x * 1.2 - 160,
        y: point.y * 1.2 - 90
    }
})

const nameShiftInCanvas: ICoordinates = {
    x: 625,
    y: 235
}

const felipeShiftInCanvas: ICoordinates = {
    x: nameShiftInCanvas.x,
    y: 150 + nameShiftInCanvas.y
}

const florShiftInCanvas: ICoordinates = {
    x: 150 + nameShiftInCanvas.x,
    y: nameShiftInCanvas.y
}
