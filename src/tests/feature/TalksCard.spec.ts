import {mount} from "@vue/test-utils"
import TalkCard from "@/components/TalkCard.vue"

describe("TalksCard", () => {
    it("Renders chips for the topics", () => {
        const chips = ["Chip 1", "Chip 2"]
        const wrapper = mount(TalkCard, {props: {chips, videoPoster: "any.com", videoUrl: "any.com", title: "any"}})

        chips.forEach(chip => expect(wrapper.text()).toContain(chip))
    })
})