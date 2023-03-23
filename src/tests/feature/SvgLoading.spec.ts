import {mount} from "@vue/test-utils"
import App from "@/App.vue"


describe("SvgLoader", () => {
    it("foobars", () => {
        const wrapper = mount(App, {global: {stubs: ["v-header"]}})
        expect(true).toBe(true)
    })
})