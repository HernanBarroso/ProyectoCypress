import * as XLSX from 'xlsx'

describe('Login Fallido', function() {
  const loginData: { username: string; password: string }[] = [];
    
  beforeEach(() => {
        cy.task('logMessage', 'Iniciando prueba para verificar Listener');
        cy.visit(Cypress.env('baseUrl')); 
    });

    before(() => {
      cy.readFile('cypress/fixtures/login_fallido.xlsx', 'binary').then((fileContent) => {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const worksheet = workbook.Sheets['Sheet1']; // Reemplaza "Sheet1" por el nombre de la hoja de tu archivo Excel
        loginData.push(...XLSX.utils.sheet_to_json(worksheet) as { username: string; password: string }[])
      })
    })

    loginData.forEach((data) => {
      it('Intento de inicio de sesión fallido con datos del Excel', () => {
      cy.get('[data-test="username"]').type(data.username);
      cy.get('[data-test="password"]').type(data.password);
      cy.get('[data-test="login-button"]').click();
    
      cy.get('[data-test="error"]').should('be.visible'); 
      
      cy.reload(); // Reiniciar el estado para el siguiente intento de inicio de sesión
      })
    })
})


