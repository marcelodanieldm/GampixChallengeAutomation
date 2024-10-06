
//Asigno variables a los locators.
 agregarAutoBtn = 'body > div > main > div.mb-3 > a';
 marcaField = '#marca';
 estadoDropDown = '#estado';
 buscarBtn = 'body > div > main > div.card.mb-4.shadow-sm > div.card-body > form > div.row.mt-3 > div > button'
 detallesBtn = 'body > div > main > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(8) > a.btn.btn-info.btn-sm'
 eliminarAuto = '';
 titulo = 'body > div > main > div.text-center.mb-4 > h1'
 tituloBusqueda = 'body > div > main > div.card.mb-4.shadow-sm > div.card-header.bg-light > h5'


//Agrego las clase.

class home{
    static navegarHome(){
        cy.get(titulo).should('be.visible');
        cy.get(tituloBusqueda).should('be.visible');   
    }

}


//Exporto.
module.exports = new home();