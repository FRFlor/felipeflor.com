import SvgLoader from "./SvgLoader.vue"

describe("<SvgLoader />", () => {
    it("can render arrow-right", () => {
        cy.mount(SvgLoader, {props: {svgName: "arrow-right"}})
        cy.get("svg").should("exist")
    })

    it("can render twitter logo", () => {
        cy.mount(SvgLoader, {props: {svgName: "fa-twitter"}})
        cy.get("svg").should("exist")
    })
})