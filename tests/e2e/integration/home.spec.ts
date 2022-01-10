it("must show the welcome message", () => {
  cy.visit("/");
  cy.get("div").should("contain", "Welcome to the Vuetify + Nuxt.js template");
});
