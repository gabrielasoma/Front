import { NumeroPipe } from './numero.pipe';

describe('NumeroPipe', () => {
  it('create an instance', () => {//verifica que se cree bien
    const pipe = new NumeroPipe();//crea nueva instancia
    expect(pipe).toBeTruthy();//verifica si la instancia existe
  });
});
