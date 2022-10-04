import contactForm from '../Components/contact';
import formNoEmail from '../Components/contact';
import mandatoryFieldsMsg from '../Components/contact';

describe("Testing lodgify contact page ...", () => {
  beforeEach(() => {
    cy.visit('/Contact.html');
  });
  it("happy scenario", () => {
    contactForm(cy);
  });

  it("validating mandatory fields before - Send", () => {
    mandatoryFieldsMsg(cy);
  });

  it("phone number mandatory field - should return error", () => {
    formNoEmail(cy);
  });
});
