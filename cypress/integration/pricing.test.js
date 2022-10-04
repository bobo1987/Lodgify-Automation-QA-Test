import priceCards from '../Components/pricesAndCurrencies'
import currencyIso from '../Components/pricesAndCurrencies'

describe("Testing lodgify pricing page ...", () => {
    beforeEach(() => {
      cy.visit("Pricing.html")
    });
    it("pricing cards validations - should fail", () => {
      priceCards(cy);
    });
   
    it("currency check", () => {
      it('should have the correct currency selected', () => {
        currencyIso(cy);
    });
  });
});