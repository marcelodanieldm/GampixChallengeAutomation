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
const tablaRes = 'body > div > main > div.table-responsive > table > tbody > tr > td:nth-child(1)';
const editBtn = 'a.btn-warning'
const guardarBtn = 'body > div > main > form > div:nth-child(10) > input';

 const tituloHome = 'body > div > main > div.text-center.mb-4 > h1'
 const tituloBusqueda = 'body > div > main > div.card.mb-4.shadow-sm > div.card-header.bg-light > h5'
 const eliminarBtn = 'a.btn.btn-danger.btn-sm'
 const confirmMensaje = 'h3';
 const eliminarBtnConf = 'input[type="submit"].btn.btn-danger';
 const alertBox = '.alert.alert-info';


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
    cy.get(chasisField).type('123456789');
    cy.get(anioField).type('2022');
    cy.get(precioField).type('20.000,00');
    cy.get(colorField).type('Rojo');
    cy.get(estadoField).select('Nuevo');
    cy.get(crearBtn).click();
    cy.wait(1000);
    //Buscar por marca
    cy.get(buscarMarca).type('Fiat');
    cy.get(buscarBtn).click();
    //asserts de resultado de busqueda.
  })

  
  it('TC2 Modificar datos de un auto', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
    cy.wait(1000);
    cy.clearLocalStorage();
    cy.reload(true);
    cy.getAllLocalStorage().should('be.empty');
    //cy.clearCookies();
    //cy.clearCookies().should('be.empty');
    //cy.visit('https://frontend.wildar.dev/Autos')
    
    
    //agregando caso feliz
    cy.wait(1500);
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
    cy.wait(1000);

    //validando el guardado de datos en el Home.
    cy.get(tituloHome).contains('Registro de Automóviles');
    cy.get(tituloBusqueda).should('be.visible');

    //buscar por marca

    cy.get(buscarMarca).type('Fiat')
    cy.get(tablaRes).contains('Fiat');
    cy.get(editBtn).contains('Editar').click();
    cy.wait(1500);
    //Modificar datos de precio, color y condicion
    cy.get(precioField).clear().type('500000');
    cy.get(colorField).clear().type('Rojo');
    cy.get(estadoField).select('Usado');
    cy.get(guardarBtn).click();
    cy.wait(1000);
    
  })

  it('TC3 Eliminar auto de Inventario', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
    //Buscar auto.
    cy.get(buscarMarca).type('Fiat');
    cy.get(buscarBtn).click();
    //validar que lo encontro
    //click en eliminar
    //confirmacion de eliminar

    //cy.get(confirmMensaje).should('have.text');
    cy.get(eliminarBtn).click();
    cy.wait(1000);
    cy.get(eliminarBtnConf).should('have.value','Eliminar').click();
    //cy.get('a[href="/Autos"]').should('have.text', 'Volver a la lista');
    cy.wait(1500);
    //buscar auto eliminado
    cy.get(buscarMarca).type('Fiat')
    cy.get(buscarBtn).click();
    //validacion de auto eliminado
    cy.get(alertBox).should('exist').contains('No se encontraron resultados para la búsqueda especificada.');
   
  })
 

  it.only('TC4 Buscar autos en Inventario', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
    cy.get(buscarMarca).type('Toyota');
    cy.get(buscarBtn).click();
    
  })

  it.skip('TC5 Validaciones al agregar un auto', () => {

    cy.get(agregarAutoBtn).contains('Registrar Nuevo Auto').click();
    cy.wait(1500);
    cy.get(marcaField).type('');
    cy.get(modeloField).type('600');
    cy.get(chasisField).type('12345678910111213');
    cy.get(anioField).type('1983');
    cy.get(precioField).type('40000');
    cy.get(colorField).type('Amarillo');
    cy.get(estadoField).select('Nuevo');
    cy.get(crearBtn).click();
    
  })
})
  