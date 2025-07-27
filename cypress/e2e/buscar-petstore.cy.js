//https://petstore.swagger.io/#/


//curl -X 'GET' \
  //'https://petstore.swagger.io/v2/pet/findByStatus?status=available' \
  //-H 'accept: application/json'


  describe('Buscar o animal de estimação', () => {
    it('deve retornar o animal de estimação com ID ', () => {
      cy.getHeaders(9222968140497181000).then((response) => {
      cy.getbuscarpet('buscar-petstore.json', response.body);
     
        expect(response.status).to.eq(200);
        
      });
    });
      })