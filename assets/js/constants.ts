export enum LinkType {
    LinkedIn,
    GitHub,
    PersonalWebsite,
    Twitter,
    Email,
}

export interface Link {
    icon?: string;
    text?: string;
    destination: string;
    type: LinkType;
}

export const ALL_LINKS: Link[] = [
    {
        icon: 'fab fa-linkedin',
        text: 'Linkedin.com/in/felipe-flor/',
        destination: 'https://www.linkedin.com/in/felipe-flor/',
        type: LinkType.LinkedIn,
    },
    {
        icon: 'fab fa-github',
        text: 'Github.com/FRFlor',
        destination: 'https://github.com/FRFlor',
        type: LinkType.GitHub,
    },
    {
        icon: 'fas fa-user-circle',
        text: 'FelipeFlor.com',
        destination: 'https://www.felipeflor.com',
        type: LinkType.PersonalWebsite,
    },
    {
        icon: 'fab fa-twitter',
        text: 'Twitter.com/Felipe_R_Flor',
        destination: 'https://twitter.com/Felipe_R_Flor',
        type: LinkType.Twitter,
    },
    {
        icon: 'email',
        destination: 'mailto:hello@felipeflor.com',
        text: 'hello@felipeflor.com',
        type: LinkType.Email,
    },
];

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




