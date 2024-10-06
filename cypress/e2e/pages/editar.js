//import home from '..home/pages/home'
//import registrarNuevo from './registrarNuevo';

const modifAutoBtn = 'body > div > main > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(8) > a.btn.btn-warning.btn-sm'

const guardarBtn = 'body > div > main > form > div:nth-child(10) > input';




//Agrego la clase

class editar {

    static buscarAuto(){
        home.buscarBtn();
        

    }

    static modificarDatos(){
        home.modifAutoBtn().click;
        home.




    }
}




//Exporto.
module.exports = new editar();