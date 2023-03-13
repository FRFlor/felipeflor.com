import {CanvasWrapper} from "@/classes/CanvasWrapper"
import {IComplexNumber, ICoordinates} from "@/types"
import {CircleChain} from "@/classes/CircleChain"

export abstract class EpicycleAnimation {
    public FPS: number = 30
    public frequencyRange = 130
    public animationSpeed: number = 0.025
    protected canvasWrapper: CanvasWrapper
    protected circleChains: CircleChain[] = []
    protected interval: ReturnType<typeof setTimeout> | null = null

    constructor(canvas: HTMLCanvasElement) {
        this.canvasWrapper = new CanvasWrapper(canvas)
    }

    public get isPlaying(): boolean {
        return !!this.interval
    }

    public startAnimation(shouldLoop: boolean = true): void {
        this.circleChains.forEach(chain => {
            chain.onEdgeDrawsFull = shouldLoop ? () => null : this.stopAnimation
        })

        if (this.interval) {
            return
        }

        this.interval = setInterval(() => {
            this.canvasWrapper.clear()

            if (this.circleChains.some(chain => !chain)) {
                return
            }

            this.circleChains.forEach(chain => {
                chain.update()
                chain.render()
            })
        }, 1000 / this.FPS)
    }

    public stopAnimation(): void {
        if (!this.interval) {
            return
        }
        clearInterval(this.interval)
        this.interval = null
    }

    protected frequencyBucketK(k: number, points: ICoordinates[]): IComplexNumber {
        const xk = {
            real: 0,
            imaginary: 0
        }

        const N = points.length
        for (let n = 0; n < N; n++) {
            const {x, y} = points[n]
            const c = 2 * Math.PI * k * n / N

            xk.real += x * Math.cos(c) + y * Math.sin(c)
            xk.imaginary += y * Math.cos(c) - x * Math.sin(c)
        }

        xk.real /= N
        xk.imaginary /= N
        return xk
    }

    protected getCircleChain(
        points: ICoordinates[],
        origin: ICoordinates = {x: 0, y: 0},
        animationMultiplier: number = 1
    ): CircleChain {
        const radii = []
        const phases = []
        const angularSpeeds = []

        for (let f = -this.frequencyRange; f <= this.frequencyRange; f++) {
            const {real, imaginary} = this.frequencyBucketK(f, points)
            radii.push(Math.sqrt(real ** 2 + imaginary ** 2))
            phases.push(Math.atan2(imaginary, real))
            angularSpeeds.push(f * animationMultiplier)
        }

        let canvasWrapper = this.canvasWrapper as CanvasWrapper
        return new CircleChain(canvasWrapper, origin.x, origin.y, radii, phases, angularSpeeds)
    }
}