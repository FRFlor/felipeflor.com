import {mount} from "@vue/test-utils"
import SvgLoader from "@/components/SvgLoader.vue"

describe("SvgLoader", () => {
    it("loads the svg from the assets folder based on the given name", async () => {
        const wrapper = mount(SvgLoader, {props: {svgName: "canada-flag"}})

        expect(wrapper.find("svg").exists()).toBe(true)
    })
})