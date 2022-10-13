it('google test', () => {
    cy.visit("https://google.com")
    cy.get('#L2AGLb').click()
    cy.get('.SDkEP').type("Automation step by step {enter}")
})