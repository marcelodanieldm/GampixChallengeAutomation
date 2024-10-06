
//Asigno variables a los selectores.
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


//Agrego la clase.

class registrarNuevo {
    
    static llenarForm (){
        
        cy.get(crearAutoTitulo).should('be.visible');
        cy.get(backToHomeLink).should('be.visible');
        cy.get(marcaField).click;
        cy.get(modeloField).click;
        cy.get(chasisField).click;
        cy.get(anioField).click;
        cy.get(precioField).click;
        cy.get(colorField).click;
        cy.get(estadoField).click;
        cy.get(crearBtn).click;
        
    }

}




//Exporto.
module.exports = new registrarNuevo();
