
$(document).ready(function(){
//Sirve para que se cargue los elementos cuando se vayan a ejecutar
$('#ec').hide(3000);//ocultar el elemento en 3000seg
//Selector mediante clase
$('.escritores').css('font-size','24px');
//Selector mediante clase y posición
$('.escritores:eq()').css('color','violet');//se empieza desde 0
//Selector mediante una combinación de selectores
$('#directores li').addClass('cine');//addClass añade nombre de una clase css
});
