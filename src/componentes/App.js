import React,{Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {calcularMarca, obtenerDiferenciaAnio, obtenerPlan} from '../Helper';

class App extends Component {

 state = {
   resultado : '',
   datos : {}

 }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    //Base minima del seguro: 2000,
    let resultado = 2000;

    //obtener la diferncia de años
    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restarle el 3% al valor del seguro
    resultado-= ((diferencia*3) * resultado ) / 100;

    //Europeo aumenta el valor 30%, el americano 15%, el asiatico 5%
    resultado = calcularMarca(marca) * resultado;

    //el plan del auto: el basico aumenta 20% y el completo 50%
    let incrementoPlan = obtenerPlan(plan);

    //dependiendo del planm incrementar:
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //creamos el objeto para el resumen

    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year

    }

    //ya tenemos el costo
    this.setState({
      resultado:resultado,
      datos: datosAuto
    })
  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro"/>
   
        <div className="contenedor-formulario">
         <Formulario
           cotizarSeguro={this.cotizarSeguro}
         />

        <Resumen
          datos={this.state.datos}
          resultado={this.state.resultado}
        />
        </div>

       
      </div>   
     )

  }
  
}

export default App;
