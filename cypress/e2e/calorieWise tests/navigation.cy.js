
describe("Navigation test", () => {

  
    it("Should navigate to the welcome page", () => {
      cy.viewport(1920, 1080); // Set the viewport to a desktop size
      cy.get(".CalorieBubble_bubble__4Yb4p").should("be.visible");
      cy.get(".MealCard_mealcardContainer__S7MBz").should("have.length", 2); // Assuming MealCard has a class "mealCard"
    });
  
    it("should display correctly on tablet viewport", () => {
      cy.viewport("ipad-2"); // Use a preset for a tablet viewport
      cy.get(".CalorieBubble_bubble__4Yb4p").should("be.visible");
      cy.get(".MealCard_mealcardContainer__S7MBz").should("have.length", 2);
    });
  
    it("should display correctly on mobile viewport", () => {
      cy.viewport("iphone-6"); // Use a preset for a mobile viewport
      cy.get(".CalorieBubble_bubble__4Yb4p").should("be.visible");
      cy.get(".MealCard_mealcardContainer__S7MBz").should("have.length", 2);
    });
  });