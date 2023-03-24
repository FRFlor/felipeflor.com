import {mount} from "@vue/test-utils"
import SvgLoader from "@/components/SvgLoader.vue"
import {vi} from "vitest"

vi.mock("@/assets/svg/the-svg-file.svg?raw", () => ({default: "<svg data-test='mocked-svg'></svg>"}))

describe("SvgLoader", () => {
    it("loads the svg from the assets folder based on the given name", async () => {
        const wrapper = mount(SvgLoader, {props: {svgName: "the-svg-file"}})
        expect(wrapper.find("svg[data-test=mocked-svg]")).toBeDefined()
    })
})