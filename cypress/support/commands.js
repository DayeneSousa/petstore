// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//Cypress
Cypress.Commands

// -- This is a parent command --
//Cypress.Commands.add('validarpet', (email, password) => { ... 



//})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getbuscarpet', (schemaPath, responseBody) => {
   cy.log('Response Body:', JSON.stringify(responseBody, null,2))
   cy.readFile(`cypress/schema/${schemaPath}`).then((schema) => {
      expect(responseBody).to.be.jsonSchema(schema);
      cy.log('Contrato validado com sucesso!')
 
})
})


Cypress.Commands.add('getHeaders', (petId) => {
   cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${petId}`,
       failOnStatusCode: false, // Não falhará se o status for 404
        headers: {
          accept: 'application/json'

        }
   })
   })
   


Cypress.Commands.add('getListarPets', (endpoint) => {
    cy.request({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${endpoint}`,
        failOnStatusCode: false, // Não falhará se o status for 404
        headers: {
          accept: 'application/json'
                }
   })
   })
   