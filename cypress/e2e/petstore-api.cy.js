//https://petstore.swagger.io/#/


//curl -X 'GET' \
  //'https://petstore.swagger.io/v2/pet/findByStatus?status=available' \
  //-H 'accept: application/json'


  describe('Listar por status o animal de estimação', () => {
    it('deve retornar animais de estimação com status disponível', () => {
      cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available',
        headers: {
          accept: 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  });