//https://petstore.swagger.io/#/


//curl -X 'GET' \
  //'https://petstore.swagger.io/v2/pet/findByStatus?status=available' \
  //-H 'accept: application/json'


  describe('Buscar o animal de estimação', () => {
  it('deve retornar o animal de estimação com ID 2 ', () => {
      cy.getHeaders(2).then((response) => {
      cy.getbuscarpet('buscar-petstore.json', response.body);
      expect(response.status).to.eq(200);
        
      });
    });

it('deve retornar o animal de estimação com ID 10 ', () => {
      cy.getHeaders(10).then((response) => {
      cy.getbuscarpet('buscar-petstore.json', response.body);
      expect(response.status).to.eq(200);
 });
});


it('deve retornar o animal de estimação com ID 5 ', () => {
      cy.getHeaders(5).then((response) => {
      cy.getbuscarpet('buscar-petstore.json', response.body);
      expect(response.status).to.eq(200);
 });
});


    it('deve retornar 404 quando o ID do animal de estimação não existir', () => {
      cy.getHeaders(999999).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'Pet not found');
      });
    });
  });