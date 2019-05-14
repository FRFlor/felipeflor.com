import { Vue } from 'vue-property-decorator';
import { Link } from '../store/Links';
export default class AppFooter extends Vue {
    protected readonly links: Link[];
}
