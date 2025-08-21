//https://petstore.swagger.io/#/


//curl -X 'GET' \
  //'https://petstore.swagger.io/v2/pet/findByStatus?status=available' \
  //-H 'accept: application/json'


  describe('Listar por status o animal de estimação', () => {
    it('deve retornar animais de estimação com status disponível', () => {
      cy.getListarPets('findByStatus?status=available').then((response) => {
      cy.getbuscarpet('listar-petstore.json', response.body)      
        expect(response.status).to.eq(200);
      });
   });




  
    it('deve retornar animais de estimação com status pendente', () => {
      cy.getListarPets('findByStatus?status=pending').then((response) => {
      cy.getbuscarpet('listar-petstore.json', response.body)      
        expect(response.status).to.eq(200);
      });
   });



  
    it('deve retornar animais de estimação com status Vendido', () => {
      cy.getListarPets('findByStatus?status=sold').then((response) => {
      cy.getbuscarpet('listar-petstore.json', response.body)      
        expect(response.status).to.eq(200);
      });
    });
  });







  