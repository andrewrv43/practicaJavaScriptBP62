document.write("<h1>Hola Mundo</h1>")
/*
var nombre="Andrew";
var apellido="Rueda";
var cedula="1722225461";
var ingresos=450.00;
var gastos=13;
var declarado=true;
const periodo=2023;
var datosCompletos=nombre + apellido;
console.log(datosCompletos)
var baseImponible = ingresos-gastos;
console.log(baseImponible)

var pasar=['leer', 'nadar', 'escribir'];

var datosExtra={
"nombre": "Andrew",
"edad": 20,
"ciudad":"Quito"
};

var baseImponible=ingresos-gastos;
var impuesto=0;
var impuestoFraccionBasica=0;
var porcentajeExcedente=0;
var excedente=0;

if (baseImponible>17854 && baseImponible<=21442)
{
impuestoFraccionBasica=511;
excedente=baseImponible-17854;
porcentajeExcedente=excedente*0.12;
} 
impuesto=impuestoFraccionBasica+porcentajeExcedente;
console.log('Usted debe cancelar por Impuesto a la Renta '+impuesto)
document.write("<h3>Su impuesto a la renta es </h3>"+impuesto)

impuestoFraccionBasica=[0,0,154,511,941,4156,8440,13798,22366];
console.log(impuestoFraccionBasica)
for(let i=0; i<impuestoFraccionBasica.length;i++)
{
console.log(impuestoFraccionBasica[i])
}
function saludo(persona)
{
console.log("Hola querido "+ persona)
}


saludo('Andrew');

*/

var ingresos=prompt("SUS INGRESOS SON: ")
var gastos=prompt("SUS EGRESOS SON: ")

var deducible=(ingresos-gastos)
var impuesto

if(deducible>=0&&deducible<11212){
	impuesto=(deducible-0)
	impuesto=((impuesto*0)/100)
	impuesto+=0
}

else if(deducible>=11212&&deducible<14285){
	impuesto=(deducible-11212)
	impuesto=((impuesto*5)/100)
	impuesto+=0
}

else if(deducible>=14285&&deducible<17854){
	impuesto=(deducible-14285)
	impuesto=((impuesto*10)/100)
	impuesto+=154
}

else if(deducible>=17854&&deducible<21442){
	impuesto=(deducible-17854)
	impuesto=((impuesto*12)/100)
	impuesto+=511
}

else if(deducible>=21442&&deducible<42874){
	impuesto=(deducible-21442)
	impuesto=((impuesto*15)/100)
	impuesto+=941
}
else if(deducible>=42874&&deducible<64297){
	impuesto=(deducible-42874)
	impuesto=((impuesto*20)/100)
	impuesto+=4156
}
else if(deducible>=64297&&deducible<85729){
	impuesto=(deducible-11212)
	impuesto=((impuesto*25)/100)
	impuesto+=8440
}
else if(deducible>=85729&&deducible<114288){
	impuesto=(deducible-85729)
	impuesto=((impuesto*30)/100)
	impuesto+=13798
}
else if(deducible>114288){
	impuesto=(deducible-114288)
	impuesto=((impuesto*35)/100)
	impuesto+=22366
}

console.log("SU IMPUESTO ES DE: "+impuesto)

document.write("<p>SU IMPUESTO ES DE: "+impuesto+"$</p>")
