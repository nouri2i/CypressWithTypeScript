it("Assertion test", () => {
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get("#query-btn")
        .should("contain", "Button")
        .and("have.class", "query-btn")
        .and("be.enabled")
    
    cy.get("#query-btn").invoke("attr","id").should("equal","query-btn")
    
    //Explicit 
    expect(true).to.be.true

    let name = "nouri"
    expect(name).to.be.equal("nouri")
    assert.include("alfa", "al", "not equal")
    assert.strictEqual('4','4',"not equal")
})  