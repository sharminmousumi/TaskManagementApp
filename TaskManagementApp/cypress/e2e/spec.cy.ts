// Please complete the following end to end tests for the entire application

describe('Task table', () =>
  {
  
    it('should display a list of tasks', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('table#taskTable').should('exist');
    // Check if there are any rows in the task table
    cy.get('table#taskTable tbody tr').should('have.length.greaterThan', 0);
  
    });
  
    it('should be able to change the completion status of a task from Yes to No or from No to Yes', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('table#taskTable tbody tr:first-child .completion-status-toggle').click();
      cy.get('table#taskTable tbody tr:first-child .completion-status').should(($status) => {
        const text = $status.text();
        expect(text).to.be.oneOf(['Yes', 'No']);
      });
  
    });
  
    it('should be able to change the assigned user of a task', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('table#taskTable tbody tr:first-child .assigned-user-dropdown').click();
      cy.get('.assigned-user-dropdown-option').contains('New User').click();
      cy.get('table#taskTable tbody tr:first-child .assigned-user').should('contain', 'New User');
  
  
    });
  
    it('should be able to create a task', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('button#createTaskButton').click();
      cy.get('input#taskName').type('New Task');
      cy.get('select#assignedUser').select('User 1');
      cy.get('button#saveTaskButton').click();
      cy.get('table#taskTable tbody tr').last().should('contain', 'New Task');
  
    });
  
    it('should be able to delete a task', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('table#taskTable tbody tr:first-child .delete-task-button').click();
      cy.get('button#confirmDeleteTask').click();
      cy.get('table#taskTable tbody tr').should('have.length.lessThan',);
  
    });
  
  
  });
  
  describe('User table', () =>
  {
    it('should display a list of users', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('table#userTable').should('exist');
      cy.get('table#userTable tbody tr').should('have.length.greaterThan', 0);
  
    });
  
  
    it('should be able to create a user', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('button#createUserButton').click();
      cy.get('input#userName').type('New User');
      cy.get('button#saveUserButton').click();
      cy.get('table#userTable tbody tr').last().should('contain', 'New User');
  
    });
  
    it('should be able to delete a user', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('table#userTable tbody tr:first-child .delete-user-button').click();
      cy.get('button#confirmDeleteUser').click();
      cy.get('table#userTable tbody tr').should('have.length.lessThan',);
    });
  
    it('should not be able to delete a user if they have tasks assigned to them', () =>
    {
      cy.visit('http://localhost:4500');
      cy.get('table#userTable tbody tr:first-child .delete-user-button').click();
      cy.get('.alert').should('contain', 'Cannot delete user with assigned tasks');
  
    });
  });
  