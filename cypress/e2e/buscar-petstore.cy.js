//https://petstore.swagger.io/#/


//curl -X 'GET' \
  //'https://petstore.swagger.io/v2/pet/findByStatus?status=available' \
  //-H 'accept: application/json'


  describe('Buscar o animal de estimação', () => {
    it('deve retornar o animal de estimação com ID ', () => {
      cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/1',
        headers: {
          accept: 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
      });
    });
  });