//importo
import editar from /../pages/editar
import home from /../pages/home
import registraNuevo from /../pages/homePage


describe('Cinco test cases', () => {



  it('TC1 Agregar auto', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
  })

  it('TC2 Modificar datos de un auto', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
  })

  it('TC3 Eliminar auto de Inventario', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
  })

  it('TC4 Buscar autos en Inventario', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
  })

  it('TC5 Validaciones al agregar un auto', () => {
    cy.visit('https://frontend.wildar.dev/Autos')
  })
})