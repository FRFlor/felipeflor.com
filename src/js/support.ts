declare var document: any;

export class Support {
    public static getViewPortWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    public static getViewPortHeight() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    public static keepNumberWithinBounds(srcNumber: number, lowerBound: number, upperBound: number) {
        return Math.min(upperBound, Math.max (lowerBound, srcNumber));
    }

    public static getImageIdealScale(srcHeight: number, srcWidth: number,
                                     minimalScalingAcceptable: number = 0.5,
                                     maximumScalingAcceptable: number = 1) {
        const scalingFactor: number = Math.min(
            Math.floor(this.getViewPortWidth()) / srcWidth,
            Math.floor(this.getViewPortHeight()) / srcHeight);

        return this.keepNumberWithinBounds(scalingFactor, minimalScalingAcceptable, maximumScalingAcceptable);
    }
}
