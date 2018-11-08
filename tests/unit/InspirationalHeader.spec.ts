import {expect} from 'chai';
import {mount} from '@vue/test-utils';
import InspirationalHeader from '@/components/InspirationalHeader.vue';

describe('InspirationalHeader Component', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(InspirationalHeader);
    });

    it('Accepts an inspirational message as optional prop', () => {
        const withoutMessage: any = mount(InspirationalHeader);

        // If no message is given Lorem Ipsum should act as a place holder
        expect(withoutMessage.find('.large-header-text').text()).to.contain('Lorem ipsum');

        // If a message is given, then it should appear as the main text
        const messageGiven: string = 'This is a neat message!';
        const withMessage: any = mount(InspirationalHeader, { propsData: {message: messageGiven}});
        expect(withMessage.find('.large-header-text').text()).to.contain(messageGiven);
    });

    it('Downloads the background image with smaller dimensions for smaller screens', () => {
        changeScreenSize(320); // Width of a small mobile device
        expect(wrapper.vm.backgroundImageEffectiveSize.width).to.be.lessThan(wrapper.vm.backgroundImage.size.width);
    });

    it('Downloads the background image with original dimensions for large screens', () => {
        changeScreenSize(2560); // Width of a 4K Monitor
        expect(wrapper.vm.backgroundImageEffectiveSize.width).to.be.equal(wrapper.vm.backgroundImage.size.width);
    });

    //
    //  Support Functions
    //

    function changeScreenSize(newWidth: number | null = null, newHeight: number | null = null){
        if (newWidth !== null) {
            // @ts-ignore - Necessary for the test of responsiveness
            window.innerWidth = newWidth;
        }

        if (newHeight !== null) {
            // @ts-ignore
            window.innerHeight = newHeight;
        }

        wrapper = mount(InspirationalHeader);
    }
});
