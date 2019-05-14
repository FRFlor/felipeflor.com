import { Vue } from 'vue-property-decorator';
export default class LazyMedia extends Vue {
    protected srcMain: string;
    protected srcPlaceholder: string;
    protected alt: string;
    protected shouldRender: boolean;
    protected visibilityChanged(isVisible: boolean): void;
    protected readonly isVideo: boolean;
}
