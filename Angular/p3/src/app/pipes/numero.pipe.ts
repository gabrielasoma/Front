import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {
  //Transforma y formatea un número
  transform(value: number, decimales: number, moneda?:string): number | string {
    
    const factor = Math.pow(10, decimales);    
    let valorRedondeado;

    if(value >=0){//si es positivo
      valorRedondeado = Math.round(value * factor)/factor;//redondea el positivo
    }else{
      valorRedondeado = (Math.round(-value * factor)/factor) *-1;//redondea el valor negativo
    }
    //formatea según ubicación
    let valorFormateado = new Intl.NumberFormat('de-DE',{minimumFractionDigits: decimales}).format(valorRedondeado);
    return moneda ? valorFormateado + ' ' + moneda : valorFormateado;//devuelve numero formateado
  }
  

}
