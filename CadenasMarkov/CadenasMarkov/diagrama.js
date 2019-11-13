//Genera el objeto requerido(Diagram,Model)
var $ = go.GraphObject.make;
//Crea el diagrama, tomando el div donde se va a pintar
var myDiagram = $(go.Diagram,"myDiagramDiv");
//El modelo es donde se crean los nodos 


myDiagram.nodeTemplate = $(go.Node, "Auto", 
						 $(go.Shape, "Ellipse", { width: 125, height: 125, margin: 10 }, new go.Binding ("fill", "color")), 
						 $(go.TextBlock,{margin: 10}, new go.Binding ("text", "key")));

myDiagram.model = new go.GraphLinksModel(
	[
		{key: 'S1', color: "green"},
		{key: 'S2', color: "blue"},
		{key: 'S3', color: "blue"},
	],

	[
		{ from: "S1", to: "S1" },
		{ from: "S1", to: "S2" },
		{ from: "S1", to: "S3" },
		{ from: "S2", to: "S2" },
		{ from: "S2", to: "S1" },
		{ from: "S2", to: "S3" },
		{ from: "S3", to: "S3" },
		{ from: "S3", to: "S2" },
		{ from: "S3", to: "S1" },
	]
);