const contactForm = cy => {
    cy.get('[placeholder="Name"]').type('bojan');
    cy.get('.PhoneInputCountrySelect').select('MK');
    cy.get('[data-testid="phone-input"]').type('38972240508');
    cy.get('[placeholder="Email"]').type('bojadzijevski@gmail.com');
    cy.get('[placeholder="Guests"]').type('2');
    cy.get('[placeholder="Arrival"]').type('14/04/2023', { force: true });
    cy.get('[placeholder="Departure"]').type('14/06/2023', { force: true });
    cy.get('.input > textarea').type('lorem ipsum');
    cy.get('[data-testid="form"] [data-testid="button"]').click();
    cy.get('[data-testid="form"] > .success').should('be.visible')
};
const formNoEmail = cy => {
    cy.get('[placeholder="Name"]').type('bojan');
    cy.get('.PhoneInputCountrySelect').select('MK');
    cy.get('[placeholder="Email"]').type('bojadzijevski@gmail.com');
    cy.get('[placeholder="Guests"]').type('2');
    cy.get('[placeholder="Arrival"]').type('14/04/2023', { force: true });
    cy.get('[placeholder="Departure"]').type('14/06/2023', { force: true });
    cy.get('.input > textarea').type('lorem ipsum');
    cy.get('[data-testid="form"] [data-testid="button"]').click();
    cy.get('[data-testid="form"] > .error').should('be.visible');
};
const mandatoryFieldsMsg = cy => {
    cy.get('[data-testid="form"] [data-testid="button"]').click();
    cy.get(':nth-child(1) > :nth-child(1) > .input > .ui').should('be.visible');
    cy.get(':nth-child(4) > .input > .ui').should('be.visible');
    cy.get('.eight > .input > .ui').should('be.visible');
};

export default mandatoryFieldsMsg; formNoEmail; contactForm;