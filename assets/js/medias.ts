export interface Media {
    mainSource: string;
    placeHolderSource: string;
    alt: string;
}

export enum ExistingMedia {
    catMouse,
        balloonStory,
        musicGame,
        recursionMeme,
}

const cloudinarySource = (name: string, type: string = 'image', modifiers: string = ''): string => {
    let url: string = `https://res.cloudinary.com/felipeflor/${type}/upload/`;
    url += (modifiers.length === 0) ? 'v1556653952/' : `${modifiers}/v1556653952/`;
    url += name;

    return url;
};

export const MEDIA_MAP: Map<ExistingMedia, Media> = new Map<ExistingMedia, Media>();

MEDIA_MAP.set(ExistingMedia.catMouse, {
    mainSource: cloudinarySource('felipeflor.com/catmouse.webm', 'video'),
    placeHolderSource: cloudinarySource('felipeflor.com/catmouse-poster', 'image', 'f_auto,q_auto'),
    alt: 'Screencap of Cat & Mouse app'
});

MEDIA_MAP.set(ExistingMedia.balloonStory, {
    mainSource: cloudinarySource('felipeflor.com/balloon_story', 'image', 'f_auto,q_auto'),
    placeHolderSource: cloudinarySource('felipeflor.com/balloon_story', 'image', 'e_blur:200,q_20'),
    alt: 'Art of girl catching a balloon'
});

MEDIA_MAP.set(ExistingMedia.musicGame, {
    mainSource: cloudinarySource('felipeflor.com/music_game', 'image', 'f_auto,q_auto'),
    placeHolderSource: cloudinarySource('felipeflor.com/music_game', 'image', 'e_blur:200,q_20'),
    alt: 'Screencap of webapp showing ariel (Little Mermaid) singing \"Part of Your World\"'
});

MEDIA_MAP.set(ExistingMedia.recursionMeme, {
    mainSource: cloudinarySource('felipeflor.com/recursion_meme', 'image', 'f_auto,q_auto'),
    placeHolderSource: cloudinarySource('felipeflor.com/recursion_meme', 'image', 'e_blur:200,q_20'),
    alt: 'Meme about recursion'
});




