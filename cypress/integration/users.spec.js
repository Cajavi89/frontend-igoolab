/* eslint-disable no-undef */
///<reference types="cypress"/>
describe('e2e test',()=>{

  beforeEach(()=>{
    cy.visit('/');
  })

  it('actually work',()=>{
    cy.contains('This is our list of users');
  })

  it('render list of users', ()=>{
    cy.get(`[data-cy="user-card"]`).should('have.length',10);
  })

  it('allow user to search an user', ()=>{
    cy.get(`[data-cy='user-search-input']`).type('clementin');
    cy.get(`[data-cy="user-card"]`).should('have.length',2);
    cy.contains('Clementine Bauch');
    cy.contains('Clementina DuBuque');
  })

  it('show nothing when user doesnt exists', ()=>{
    cy.get(`[data-cy='user-search-input']`).type('jon doe');
    cy.get(`[data-cy="user-card"]`).should('have.length',0);
  })

  it('click on button more info', ()=>{
    cy.get(`[data-cy='user-card']`).find(`[data-cy='button-moreinfo']`).first().click();
    cy.get(`[data-cy='button-close-modal']`).click()
  })
})
