import { Vue } from 'vue-property-decorator';
import { Link } from '../store/Links';
import { MediaCollection } from '../store/MediaCollection';
export interface NavigationLink {
    route: string;
    title: string;
}
export default class NavigationBar extends Vue {
    protected expandSideNavigation: boolean;
    protected MediaCollection: MediaCollection;
    protected readonly NAVIGATION_LINKS: NavigationLink[];
    protected readonly SOCIALMEDIA_LINKS: Link[];
    protected readonly isSidebarHidden: boolean;
    protected readonly isSmallScreen: boolean;
}
