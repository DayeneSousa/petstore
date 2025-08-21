describe('CT01 - Validação da função de Majoração MANUAL', () => {
    before('Gerar token', () => {      
        cy.postGerarToken(null,'v1/authenticate', auth.user, auth.pass).then((response) => {
        expect(response.status).to.eq(200)
        const token = response.body.accessToken;
        Cypress.env('accessToken', token)
        console.log(token)
    
        })
        })
      

        
before('Pre-Condição: Encontra o valor do ajuste de limite', () => {
        const token = Cypress.env('accessToken')
        let valor
        cy.getHeaderTk(null, 'v1/controle-limite-credito/ajuste', token, majo_manual.idconta, majo_manual.cpf).then((response) => {
           expect(response.status).to.eq(200)
           valor = response.body.limiteMaximo
           cy.log(valor)
      
                         
        })
        }) 

        it("Deve Aumentar os Limites Maximo e Atual do Cliente", () => {            
            const token = Cypress.env('accessToken')
           
            cy.fixture("ajuste-limite/majo-autom").then((json) => { 
            json.valorAjuste = faker.number.int({min: valor +1, max: valor + 5})
            let resultadoAjuste
             resultadoAjuste = json.valorAjuste
           
       
        cy.postBodyHeaderTk(null, 'v1/ajuste-limite', json, token, majo_auto.idconta, majo_auto.cpf).then((response) => {
            expect(response.status).to.eq(200)
            
            cy.log(json.valorAjuste)
           
       
            })
            it("Deve Aumentar os Limites Maximo e Atual do Cliente", () => {            
            const token = Cypress.env('accessToken')
            const valor = Cypress.env('limiteMaximo')
            cy.fixture("ajuste-limite/majo-autom").then((json) => { 
            json.valorAjuste = faker.number.int({min: valor +1, max: valor + 5})
            const resultadoAjuste = json.valorAjuste
            Cypress.env('json.valorAjuste', resultadoAjuste)   
       
        cy.postBodyHeaderTk(null, 'v1/ajuste-limite', json, token, majo_auto.idconta, majo_auto.cpf).then((response) => {
            expect(response.status).to.eq(200)
            
            cy.log(json.valorAjuste)
           
       
            })
            })
            })it("Deve Aumentar os Limites Maximo e Atual do Cliente", () => {            
            const token = Cypress.env('accessToken')
            const valor = Cypress.env('limiteMaximo')
            cy.fixture("ajuste-limite/majo-autom").then((json) => { 
            json.valorAjuste = faker.number.int({min: valor +1, max: valor + 5})
            const resultadoAjuste = json.valorAjuste
            Cypress.env('json.valorAjuste', resultadoAjuste)   
       
        cy.postBodyHeaderTk(null, 'v1/ajuste-limite', json, token, majo_auto.idconta, majo_auto.cpf).then((response) => {
            expect(response.status).to.eq(200)
            
            cy.log(json.valorAjuste)
           
       
            })
            })
            })it("Deve Aumentar os Limites Maximo e Atual do Cliente", () => {            
            const token = Cypress.env('accessToken')
            const valor = Cypress.env('limiteMaximo')
            cy.fixture("ajuste-limite/majo-autom").then((json) => { 
            json.valorAjuste = faker.number.int({min: valor +1, max: valor + 5})
            const resultadoAjuste = json.valorAjuste
            Cypress.env('json.valorAjuste', resultadoAjuste)   
       
        cy.postBodyHeaderTk(null, 'v1/ajuste-limite', json, token, majo_auto.idconta, majo_auto.cpf).then((response) => {
            expect(response.status).to.eq(200)
            
            cy.log(json.valorAjuste)
           
       
            })
            })
            })
            it("Deve Aumentar os Limites Maximo e Atual do Cliente", () => {            
            const token = Cypress.env('accessToken')
            const valor = Cypress.env('limiteMaximo')
            cy.fixture("ajuste-limite/majo-autom").then((json) => { 
            json.valorAjuste = faker.number.int({min: valor  - 1, max: valor + 5})
            const resultadoAjuste = json.valorAjuste
            Cypress.env('json.valorAjuste', resultadoAjuste)   
       
        cy.postBodyHeaderTk(null, 'v1/ajuste-limite', json, token, majo_auto.idconta, majo_auto.cpf).then((response) => {
            expect(response.status).to.eq(200)
            
            cy.log(json.valorAjuste)
           
       
            })
            })
            })
            })
            