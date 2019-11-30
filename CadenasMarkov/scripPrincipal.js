
//Obtenemos datos de las cajas de texto
document.getElementById('boton').addEventListener('click',getDatos);

function getDatos()
{
    const P11 = document.getElementById('AA').value;
    const P12 = document.getElementById('AB').value;
    const P13 = document.getElementById('AC').value;
    const P21 = document.getElementById('BA').value;
    const P22 = document.getElementById('BB').value;
    const P23 = document.getElementById('BC').value;
    const P31 = document.getElementById('CA').value;
    const P32 = document.getElementById('CB').value;
    const P33 = document.getElementById('CC').value;
    const iteraciones = document.getElementById('iteraciones').value;
    printDiagrama(P11,P12,P13,P21,P22,P23,P31,P32,P33);

    var PS1 = new Nodo(P11);
    var PS2 = new Nodo(P12);
    var PS3 = new Nodo(P13);

   
    var i = 1;
    do{
        calcular1(PS1.getValor() ,PS2.getValor() ,PS3.getValor() ,P11,P21,P31);
        calcular2(PS1.getValor() ,PS2.getValor() ,PS3.getValor() ,P12,P22,P32);
        calcular3(PS1.getValor() ,PS2.getValor() ,PS3.getValor() ,P13,P23,P33);
        
        var div1 = document.createElement("div")
        var div2 = document.createElement("div")
        var div3 = document.createElement("div")
        var vuelta = document.createElement("div")
    
        vuelta.className = "bg-secondary col-md-12 text-white";
        div1.className = "col-md-12 border-bottom";
        div2.className = "col-md-12 border-bottom";
        div3.className = "col-md-12 border-bottom";
        
        vuelta.innerHTML=`<p class="my-2">VUELTA ${i}</p>`
        div1.innerHTML=`<p class="my-2">PS1 = ${resultado1}</p>`
        div2.innerHTML=`<p class="my-2">PS2 = ${resultado2}</p>`
        div3.innerHTML=`<p class="my-2">PS3 = ${resultado3}</p>`

        resultados = document.getElementById('resultados').appendChild(vuelta)
        resultados = document.getElementById('resultados').appendChild(div1)
        resultados = document.getElementById('resultados').appendChild(div2)
        resultados = document.getElementById('resultados').appendChild(div3)



        PS1.setValor(resultado1)
        PS2.setValor(resultado2)
        PS3.setValor(resultado3)
        i++
    }while(i<=iteraciones)
}


function calcular1(PS1,PS2,PS3,P11,P21,P31)
{
    resultado1 = ((PS1*P11)+(PS2*P21)+(PS3*P31)).toFixed(6);
    return resultado1 
    //console.log(PS1.valor)
    
}

function calcular2(PS1,PS2,PS3,P12,P22,P32)
{
    resultado2 = ((PS1*P12)+(PS2*P22)+(PS3*P32)).toFixed(6);
    return resultado2


}

function calcular3(PS1,PS2,PS3,P13,P23,P33)
{
    resultado3 = ((PS1*P13)+(PS2*P23)+(PS3*P33)).toFixed(6);
    return resultado3
}

function printDiagrama(P11,P12,P13,P21,P22,P23,P31,P32,P33)
{
     //Genera el objeto requerido(Diagram,Model)
            var $ = go.GraphObject.make;
            //Crea el diagrama, tomando el div donde se va a pintar
            var diagrama  = document.getElementById("myDiagramDiv");
            var myDiagram = $(go.Diagram,diagrama);
            //Estilos del diagrama
            myDiagram.nodeTemplate = $(go.Node, "Auto", $(go.Shape, "Ellipse", { width: 125, height: 125, margin: 10 }, 
            new go.Binding("text","text"),
            new go.Binding("loc"),
            new go.Binding ("fill", "color")), $(go.TextBlock,{margin: 10}, 
            new go.Binding ("text", "key")));
            //Estilos de las flechas
            myDiagram.linkTemplate =
            $(go.Link,{curve:go.Link.Bezier},
              $(go.Shape), $(go.Shape, { toArrow: "Standard" }),
              $(go.TextBlock, new go.Binding("text", "text"))
            );
        //Definimos enlaces de nodos
        myDiagram.model = new go.GraphLinksModel(
            [
                {key: 'S1', color: "#ff2e63"},
                {key: 'S2', color: "#08d9d6"},
                {key: 'S3', color: "#fce38a"},
            ],
            
            [
                { from: "S1", to: "S1",text:`${P11}`},
                { from: "S1", to: "S2",text:`${P12}`},
                { from: "S1", to: "S3",text:`${P13}`},
                { from: "S2", to: "S2",text:`${P22}`},
                { from: "S2", to: "S1",text:`${P21}`},
                { from: "S2", to: "S3",text:`${P23}`},
                { from: "S3", to: "S3",text:`${P33}`},
                { from: "S3", to: "S2",text:`${P32}`},    
                { from: "S3", to: "S1",text:`${P31}`},
            ],
        );
}


















