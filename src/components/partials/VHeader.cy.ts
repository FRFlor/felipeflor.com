import VHeader from "./VHeader.vue"

describe("<VHeader />", () => {
    it("allows the header animation to be paused and resumed", () => {
        cy.mount(VHeader)
        cy.get("button[aria-label=\"Pause animation\"]").click()
        cy.get("button[aria-label=\"Pause animation\"]").should("not.exist")

        cy.get("button[aria-label=\"Play animation\"]").click()
        cy.get("button[aria-label=\"Pause animation\"]").should("exist")
    })
})