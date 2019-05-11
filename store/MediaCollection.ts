import {Media} from "~/types/media";

export class MediaCollection {
    public static get catMouse(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/catmouse.webm', 'video'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/catmouse-poster', 'image', 'f_auto,q_auto'),
            alt: 'Screencap of Cat & Mouse app'
        }
    }

    public static get balloonStory(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/balloon_story', 'image', 'f_auto,q_auto'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/balloon_story', 'image', 'e_blur:200,q_20'),
            alt: 'Art of girl catching a balloon'
        }
    }

    public static get musicGame(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/music_game', 'image', 'f_auto,q_auto'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/music_game', 'image', 'e_blur:200,q_20'),
            alt: 'Screencap of webapp showing ariel (Little Mermaid) singing \"Part of Your World\"'
        }
    }

    public static get recursionMeme(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/recursion_meme', 'image', 'f_auto,q_auto'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/recursion_meme', 'image', 'e_blur:200,q_20'),
            alt: 'Meme about recursion'
        }
    }

    protected static cloudinarySource(name: string, type: string = 'image', modifiers: string = ''): string {
        let url: string = `https://res.cloudinary.com/felipeflor/${type}/upload/`;
        url += (modifiers.length === 0) ? 'v1556653952/' : `${modifiers}/v1556653952/`;
        url += name;

        return url;
    };
}
