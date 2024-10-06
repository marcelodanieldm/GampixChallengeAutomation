/*import home from '../e2e/pages/home'
import registrarNuevo from '../e2e/pages/registrarNuevo'
import editar from '../e2e/pages/editar'

*/

//Selectores
const marcaField = '#Marca';
const modeloField = '#Modelo';
const chasisField = '#NumeroChasis';
const anioField = '#Anio';
const precioField = '#Precio';
const colorField = '#Color';
const estadoField = '#Estado';
const crearBtn = 'body > div > main > form > div:nth-child(8) > input';
const crearAutoTitulo = 'body > div > main > h1';
const backToHomeLink = 'body > div > main > div > a';
const agregarAutoBtn = '.mb-3 > .btn';

const buscarMarca = '#marca';
const buscarBtn = 'body > div > main > div.card.mb-4.shadow-sm > div.card-body > form > div.row.mt-3 > div > button';
const tablaRes = 'body > div > main > div.table-responsive';
const editBtn = 'body > div > main > div.table-responsive > table > tbody > tr:nth-child(3) > td:nth-child(8) > a.btn.btn-warning.btn-sm';
const guardarBtn = 'body > div > main > form > div:nth-child(10) > input';











describe('Cinco test cases', () => {

 // beforeEach(()=>{
    //cy.visit('https://frontend.wildar.dev/Autos')
 // })

//Ejecucion de tests

  it('TC1 Agregar auto', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
    cy.get(agregarAutoBtn).contains('Registrar Nuevo Auto').click();
    cy.wait(2500);
    cy.get(marcaField).type('Toyota');
    cy.get(modeloField).type('Corolla');
    cy.get(chasisField).type('ABC123456789');
    cy.get(anioField).type('2022');
    cy.get(precioField).type('20.000,00');
    cy.get(colorField).type('Rojo');
    cy.get(estadoField).select('Nuevo');
    cy.get(crearBtn).click();
    //Buscar por marca
    cy.get(buscarMarca).type('Fiat');
    cy.get(buscarBtn).click();
    //asserts de resultado de busqueda.




  })

  it.only('TC2 Modificar datos de un auto', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
    //agregar caso feliz
    cy.visit('https://frontend.wildar.dev/Autos')
    cy.get(agregarAutoBtn).contains('Registrar Nuevo Auto').click();
    cy.wait(1500);
    cy.get(marcaField).type('Fiat');
    cy.get(modeloField).type('600');
    cy.get(chasisField).type('12345678910111213');
    cy.get(anioField).type('1983');
    cy.get(precioField).type('40000');
    cy.get(colorField).type('Amarillo');
    cy.get(estadoField).select('Nuevo');
    cy.get(crearBtn).click();
    //buscar por marca
    cy.get(tablaRes).contains('Fiat').
    cy.get(editBtn).click();
    cy.get(body > div > main > h1).should('have.text', 'Editar Auto');
    //Modificar datos de precio, color y condicion
    cy.get(precioField).type('500000');
    cy.get(colorField).type('Rojo');
    cy.get(estadoField).select('Usado');
    cy.get(guardarBtn).click();
    
    //validacion de guardado exitoso

    
  })

  it('TC3 Eliminar auto de Inventario', () => {
    //Buscar auto.
    cy.get(buscarMarca).type('Fiat');
    cy.get(buscarBtn).click();
    //validar que lo encontro
    //click en eliminar
    //buscar auto eliminado
    //validacion de auto eliminado
   
  })

  it('TC4 Buscar autos en Inventario', () => {
    cy.get(buscarMarca).type('Toyota');
    cy.get(buscarBtn).click();
    
  })

  it('TC5 Validaciones al agregar un auto', () => {
    
  })
})
  