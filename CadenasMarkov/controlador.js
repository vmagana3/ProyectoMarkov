
//Obtenemos datos de las cajas de texto
document.getElementById('boton').addEventListener('click',getDatos);

function getDatos()
{
    var P11 = document.getElementById('AA').value;
    var P12 = document.getElementById('AB').value;
    var P13 = document.getElementById('AC').value;
    var P21 = document.getElementById('BA').value;
    var P22 = document.getElementById('BB').value;
    var P23 = document.getElementById('BC').value;
    var P31 = document.getElementById('CA').value;
    var P32 = document.getElementById('CB').value;
    var P33 = document.getElementById('CC').value;
    var iteraciones = document.getElementById('iteraciones').value;
    
    var PS1 = P11;
    var PS2 = P12;
    var PS3 = P13;

   calcular1(PS1,PS2,PS3,P11,P21,P31);

}

function calcular1(PS1,PS2,PS3,P11,P21,P31)
{
    PS1 = ((PS1*P11)+(PS2*P21)+(PS3*P31)).toFixed(3);
    return console.log(PS1);
}

function calcular2()
{
    PS2 = ((PS1*P12)+(PS2*P22)+(PS3*P32)).toFixed(3); 
}

function calcular3()
{
    PS3 = ((PS1*P13)+(PS2*P23)+(PS3*P33)).toFixed(3);
}


//function calcular(PS1,PS2,PS3,P11,P12,P13,P21,P22,P23,P31,P32,P33)
//{
   //     PS1 = ((PS1*P11)+(PS2*P21)+(PS3*P31)).toFixed(3);
     //   PS2 = ((PS1*P12)+(PS2*P22)+(PS3*P32)).toFixed(3);
       // PS3 = ((PS1*P13)+(PS2*P23)+(PS3*P33)).toFixed(3);
        //console.log(`Iteracion: ${i}`);
        //console.log(`El valor de PS1 = ${PS1}`);
        //console.log(`El valor de PS2 = ${PS2}`);
        //console.log(`El valor de PS3 = ${PS3}`);
        //function calcular(PS1,PS2,PS3,P11,P12,P13,P21,P22,P23,P31,P32,P33)
//{
    //PS1 = ((PS1*P11)+(PS2*P21)+(PS3*P31)).toFixed(3);
    //PS2 = ((PS1*P12)+(PS2*P22)+(PS3*P32)).toFixed(3);
    //PS3 = ((PS1*P13)+(PS2*P23)+(PS3*P33)).toFixed(3);
    //console.log(`Iteracion:-------------------------`);
    //console.log(`El valor de PS1 = ${PS1}`);
    //console.log(`El valor de PS2 = ${PS2}`);
    //console.log(`El valor de PS3 = ${PS3}`);
//}

//}








//checar recursividad para resolver el problemas
















