import {expect} from 'chai';
import {shallowMount} from '@vue/test-utils';
import NavigationBar from '@/components/NavigationBar.vue';

describe('NavigationBar Component', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallowMount(NavigationBar);
    });

    it('Always shows the navigation top links', () => {
        expect(wrapper.find('.top-links').isVisible()).to.be.true;
    });

    it('Shows navigation side links only when the hamburger button is clicked', () => {
        expect(wrapper.find('.side-links').isVisible()).to.be.false;
        wrapper.find('.hamburger-button').trigger('click');
        expect(wrapper.find('.side-links').isVisible()).to.be.true;
    });
});
