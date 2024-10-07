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
const buscarModelo = '#modelo';
const buscarBtn = 'body > div > main > div.card.mb-4.shadow-sm > div.card-body > form > div.row.mt-3 > div > button';
const tablaRes = 'body > div > main > div.table-responsive > table > tbody > tr > td:nth-child(1)';
const editBtn = 'a.btn-warning'
const guardarBtn = 'body > div > main > form > div:nth-child(10) > input';

 const tituloHome = 'body > div > main > div.text-center.mb-4 > h1';
 const tituloBusqueda = 'body > div > main > div.card.mb-4.shadow-sm > div.card-header.bg-light > h5';
 const eliminarBtn = 'a.btn.btn-danger.btn-sm';
 const confirmMensaje = 'h3';
 const eliminarBtnConf = 'input[type="submit"].btn.btn-danger';
 const alertBox = '.alert.alert-info';
 const alertField = ':nth-child(1) > .text-danger';


describe('Cinco test cases', () => {

  beforeEach(()=>{
  
   cy.getAllLocalStorage().should('be.empty');
   cy.visit('https://frontend.wildar.dev/Autos')
  })


  it('TC1 Agregar auto', () => {
  
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
   
  })

  
  it('TC2 Modificar datos de un auto', () => {

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

    //Buscar auto.
    cy.get(buscarMarca).type('Fiat');
    cy.get(buscarBtn).click();
    cy.get(eliminarBtn).click();
    cy.wait(1000);
    cy.get(eliminarBtnConf).should('have.value','Eliminar').click();
    cy.wait(1500);
    //buscar auto eliminado
    cy.get(buscarMarca).type('Fiat')
    cy.get(buscarBtn).click();
    //validacion de auto eliminado
    cy.get(alertBox).should('exist').contains('No se encontraron resultados para la búsqueda especificada.');
   
  })
 

  it('TC4 Buscar autos en Inventario', () => {

     //Caso feliz
    cy.wait(1500);
    cy.get(agregarAutoBtn).contains('Registrar Nuevo Auto').click();
    cy.wait(1500);
    cy.get(marcaField).type('Volkswagen');
    cy.get(modeloField).type('Gol');
    cy.get(chasisField).type('12345678910111214');
    cy.get(anioField).type('2009');
    cy.get(precioField).type('30000');
    cy.get(colorField).type('Gris');
    cy.get(estadoField).select('Usado');
    cy.get(crearBtn).click();
    cy.wait(1000);
    //Busqueda
    cy.get(buscarMarca).type('Volkswagen');
    cy.get(buscarModelo).type('Gol')
    cy.get(buscarBtn).click();
    //Validaciones de filtro
    cy.get('td').contains('Gol');
    cy.get('td').contains('Volkswagen');

    
  })

  it('TC5 Validaciones al agregar un auto', () => {

    cy.get(agregarAutoBtn).contains('Registrar Nuevo Auto').click();
    cy.wait(1500);
    //cy.get(marcaField).type('');
    cy.get(modeloField).type('600');
    cy.get(chasisField).type('12345678910111213');
    cy.get(anioField).type('1983');
    cy.get(precioField).type('40000');
    cy.get(colorField).type('Amarillo');
    cy.get(estadoField).select('Nuevo');
    cy.get(crearBtn).click();
    //validacion de obligatoriedad
    cy.get(alertField).contains('La Marca es obligatoria');
    
  })
})
  