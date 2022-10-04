const priceCards = cy => {
   // card prices 
   cy.get('#scroll-prop-plan').type('{selectall}{backspace} 50');
   cy.get(':nth-child(1) > .price-item').contains('.total-sum', '64');
   cy.get(':nth-child(2) > .price-item').contains('.total-sum', '375');
   cy.get(':nth-child(3) > .price-item').contains('.total-sum', '525');
};

const currencyIso = cy => {
   cy.get('.price-currency-select').should('have.value', 'eur');
   cy.get('.price-card-starter').contains('$');
   cy.get('.price-currency-select').wait(2000).select('gbp');
   cy.get('.price-card-starter').contains('£');
   cy.get('.price-currency-select').wait(2000).select('eur');
   cy.get('.price-card-starter').contains('€');
}
export default priceCards; currencyIso;