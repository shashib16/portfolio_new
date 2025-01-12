// cypress/integration/todo.spec.ts

describe('Todo Application', () => {
    beforeEach(() => {
      // Replace with the URL of your Todo application
      cy.visit('/app/components/Body/index.js');
    });
    it('should display the todo form', () => {
      cy.get('input[placeholder="Add a new to-do"]').should('be.visible');
      cy.get('button').contains('Add').should('be.visible');
    });
  
    it('should allow typing in the todo input field', () => {
      cy.get('input[placeholder="Add a new to-do"]')
        .type('New Todo Item')
        .should('have.value', 'New Todo Item');
    });
  
    it('should add a new todo item to the list', () => {
      cy.get('input[placeholder="Add a new to-do"]').type('New Todo Item');
      cy.get('button').contains('Add').click();
  
      cy.get('.todo-item').should('contain', 'New Todo Item');
    });
  
    it('should persist todo items across reloads', () => {
      cy.get('input[placeholder="Add a new to-do"]').type('Persistent Todo Item');
      cy.get('button').contains('Add').click();
  
      cy.get('.todo-item').should('contain', 'Persistent Todo Item');
  
      // Reload the page
      cy.reload();
  
      // Verify the item is still there
      cy.get('.todo-item').should('contain', 'Persistent Todo Item');
    });
  });