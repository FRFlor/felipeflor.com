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

    public static get felipeAvatar(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/felipe-flor', 'image', 'f_auto,q_auto'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/felipe-flor', 'image', 'e_blur:200,q_20'),
            alt: 'Felipe Rendeiro Flor\'s profile picture'
        }
    }

    public static get homepageBanner(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/computer', 'image', 'f_auto,q_auto,c_crop,g_south_west,h_400,x_0,y_0'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/computer', 'image', 'f_auto,q_auto,c_crop,g_south_west,h_400,x_0,y_0'),
            alt: 'Mac and Keyboard slightly blurred'
        }
    }

    public static get vueconf2019(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019', 'image', 'f_auto,q_auto,c_scale,h_500'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019', 'image', 'f_auto,q_auto,c_scale,h_500'),
            alt: 'Vehikl Team together at VueConf 2019'
        }
    }

    public static get workingAtVehikl(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/working_at_vehikl', 'image', 'f_auto,q_auto,c_crop,g_xy_center,h_400,w_777,x_0,y_600'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/working_at_vehikl', 'image', 'f_auto,q_auto,c_crop,g_xy_center,h_400,w_777,x_0,y_600'),
            alt: 'Felipe and Tuan working together at Vehikl'
        }
    }

    public static get vuenicorn(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019_Vuenicorn', 'image', 'f_auto,q_auto,c_scale,w_820'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019_Vuenicorn', 'image', 'f_auto,q_auto,c_scale,w_820'),
            alt: 'Vuenicorn prize from Vueconf 2019!'
        }
    }

    public static get skiAtChicopee(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/Chicopee_March12_2019', 'image', 'f_auto,q_auto,c_scale,w_820'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/Chicopee_March12_2019', 'image', 'f_auto,q_auto,c_scale,w_820'),
            alt: 'Vehikl team together at Chicopee'
        }
    }

    public static get iceSkating(): Media {
        return {
            mainSource: MediaCollection.cloudinarySource('felipeflor.com/ice_skating', 'image', 'f_auto,q_auto,c_crop,g_south_west,h_953,w_1406'),
            placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/ice_skating', 'image', 'f_auto,q_auto,c_crop,g_south_west,h_953,w_1406'),
            alt: 'Vehikl team ice skating together'
        }
    }

    protected static cloudinarySource(name: string, type: string = 'image', modifiers: string = ''): string {
        let url: string = `https://res.cloudinary.com/felipeflor/${type}/upload/`;
        url += (modifiers.length === 0) ? 'v1556653952/' : `${modifiers}/v1556653952/`;
        url += name;

        return url;
    };
}
