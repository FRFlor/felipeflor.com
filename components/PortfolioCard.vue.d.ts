import { Vue } from 'vue-property-decorator';
import { Media } from '../types/index';
export interface PortfolioCardData {
    media: Media;
    title: string;
    description: string;
    keywords: string[];
    website?: string;
    source?: string;
}
export default class PortfolioCard extends Vue {
    private data;
    protected readonly window: Window;
    protected readonly imageDestination: string | undefined;
}
