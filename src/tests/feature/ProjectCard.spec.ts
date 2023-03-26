import {mount} from "@vue/test-utils"
import ProjectCard from "@/components/ProjectCard.vue"

describe("ProjectCard", () => {
    it("Renders the Visit Website anchor tag when websiteUrl is provided", () => {
        let websiteUrl = "the-project-website.com"
        const wrapper = mount(ProjectCard, {
            props: {
                videoSource: "not-important.com/video.webm",
                videoPoster: "not-important.com/video.jpg",
                title: "The title of the project",
                websiteUrl
            }
        })

        const visitWebsiteAnchorTag = wrapper.find(`a[href=${websiteUrl}]`)

        expect(visitWebsiteAnchorTag.exists()).toBe(true)
    })

    it("Does not render the Visit Website anchor tag when websiteUrl is not provided", () => {
        const wrapper = mount(ProjectCard, {
            props: {
                videoSource: "not-important.com/video.webm",
                videoPoster: "not-important.com/video.jpg",
                title: "The title of the project"
            }
        })

        expect(wrapper.find("[data-test=visit-website]").exists()).toBe(false)
    })

    it("Renders the See Source Code anchor tag when sourceCodeUrl is provided", () => {
        const sourceCodeUrl = "github.com/FRFlor/the-project"
        const wrapper = mount(ProjectCard, {
            props: {
                videoSource: "not-important.com/video.webm",
                videoPoster: "not-important.com/video.jpg",
                title: "The title of the project",
                sourceCodeUrl
            }
        })

        const sourceCodeAnchorTag = wrapper.find(`a[href=${sourceCodeUrl}]`)

        expect(sourceCodeAnchorTag.exists()).toBe(true)
    })

    it("Does not render the Visit Website anchor tag when websiteUrl is not provided", () => {
        const wrapper = mount(ProjectCard, {
            props: {
                videoSource: "not-important.com/video.webm",
                videoPoster: "not-important.com/video.jpg",
                title: "The title of the project"
            }
        })

        expect(wrapper.find("[data-test=visit-source-code]").exists()).toBe(false)
    })
})