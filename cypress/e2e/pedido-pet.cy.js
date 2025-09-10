
  describe('Verificar a lista de pedido', () => {
 
    beforeEach('Deve retornar o pedido da lista ', () => {
      cy.getHeaders('fixture/lista-id.json').then((response) => {
      cy.getbuscarpet('buscar-petstore.json', response.body);
      expect(response.status).to.eq(200);
        
      });
    });
  });