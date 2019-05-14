import { Media } from '@/types/media'

export class MediaCollection {
  public static get catMouse(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/catmouse.webm', 'video'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/catmouse.jpg', 'video'),
      alt: 'Screencap of Cat & Mouse app'
    }
  }

  public static get balloonStory(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/balloonStory.webm', 'video'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/balloonStory.jpg', 'video'),
      alt: 'Art of girl catching a balloon'
    }
  }

  public static get musicGame(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/musicgame.webm', 'video'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/musicgame.jpg', 'video'),
      alt: 'Game in which the user has to guess the song that is playing. In this case, The Little Mermaid singing \"Part of Your World\"'
    }
  }

  public static get recursionMeme(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/recursion_meme', 'image', 'f_auto,q_auto'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/recursion_meme', 'image', 't_media_lib_thumb'),
      alt: 'Meme about recursion'
    }
  }

  public static get felipeAvatar(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/felipe-flor', 'image', 'f_auto,q_auto'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/felipe-flor', 'image', 't_media_lib_thumb'),
      alt: 'Felipe Rendeiro Flor\'s profile picture'
    }
  }

  public static get homepageBanner(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/computer', 'image', 'f_auto,q_auto,c_crop,g_south_west,h_400,x_0,y_0'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/computer', 'image', 't_media_lib_thumb'),
      alt: 'Mac and Keyboard slightly blurred'
    }
  }

  public static get vueconf2019(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019', 'image', 'f_auto,q_auto,c_scale,h_500'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019', 'image', 't_media_lib_thumb'),
      alt: 'Vehikl Team together at VueConf 2019'
    }
  }

  public static get workingAtVehikl(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/working_at_vehikl', 'image', 'f_auto,q_auto,c_crop,g_xy_center,h_400,w_777,x_0,y_600'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/working_at_vehikl', 'image', 't_media_lib_thumb'),
      alt: 'Felipe and Tuan working together at Vehikl'
    }
  }

  public static get vuenicorn(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019_Vuenicorn', 'image', 'f_auto,q_auto,c_scale,w_820'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/vueconf2019_Vuenicorn', 'image', 't_media_lib_thumb'),
      alt: 'Vuenicorn prize from Vueconf 2019!'
    }
  }

  public static get skiAtChicopee(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/Chicopee_March12_2019', 'image', 'f_auto,q_auto,c_scale,w_820'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/Chicopee_March12_2019', 'image', 't_media_lib_thumb'),
      alt: 'Vehikl team together at Chicopee'
    }
  }

  public static get iceSkating(): Media {
    return {
      mainSource: MediaCollection.cloudinarySource('felipeflor.com/ice_skating', 'image', 'f_auto,q_auto,c_crop,g_south_west,h_953,w_1406'),
      placeHolderSource: MediaCollection.cloudinarySource('felipeflor.com/ice_skating', 'image', 't_media_lib_thumb'),
      alt: 'Vehikl team ice skating together'
    }
  }

  protected static cloudinarySource(name: string, type: string = 'image', modifiers: string = ''): string {
    let url: string = `https://res.cloudinary.com/felipeflor/${type}/upload/`
    url += (modifiers.length === 0) ? 'v1556653952/' : `${modifiers}/v1556653952/`
    url += name

    return url
  };
}
