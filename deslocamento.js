var service=new google.maps.DistanceMatrixService();

destinos=origens=["-23.528749229636432,-46.789267385707703",
"-23.626140767762415,-46.56606252516378",
"-23.566880439764351,-46.571848341078905",
"-23.547576361482815,-46.711884883685315",
"-23.573924948085118,-46.515678788602408",
"-23.540212286151199,-46.485831421609049",
"-23.521252527840961,-46.673916903478066"];

/*
Pontos do município de são Paulo (Distritos)
"-23.528749229636432,-46.789267385707703",
"-23.626140767762415,-46.56606252516378",
"-23.566880439764351,-46.571848341078905",
"-23.547576361482815,-46.711884883685315",
"-23.573924948085118,-46.515678788602408",
"-23.540212286151199,-46.485831421609049",
"-23.521252527840961,-46.673916903478066",
"-23.560818779965061,-46.647332757534066",
"-23.537636433186439,-46.594707698445774",
"-23.526006833767294,-46.636824347082637",
"-23.543679003251622,-46.617491901130421",
"-23.448678998322293,-46.688355954942402",
"-23.570164042887139,-46.726193084629109",
"-23.454394965633654,-46.662029747093605",
"-23.564335936954613,-46.616897493675474",
"-23.628112406672948,-46.667905499988059",
"-23.674532544140519,-46.687475691455489",
"-23.635833911156183,-46.763441716124099",
"-23.49886193872387,-46.518676110024565",
"-23.668734550554351,-46.780463417032223",
"-23.551175930589803,-46.538373640277243",
"-23.501000244631257,-46.657348462840275",
"-23.673818765305633,-46.656824421215745",
"-23.725813186632962,-46.701994826573525",
"-23.562056098607606,-46.491214066376408",
"-23.584725433506733,-46.400815107601957",
"-23.548626051422733,-46.660071954961566",
"-23.631177773528627,-46.620748713918026",
"-23.486282053823487,-46.69726721905451",
"-23.789698681545275,-46.668681781197492",
"-23.556394445380743,-46.406692531477383",
"-23.596042658186985,-46.661440557154499",
"-23.612616918961582,-46.42672989191361",
"-23.591722454816981,-46.602867011007859",
"-23.602083790573342,-46.685401165954517",
"-23.533895130873564,-46.455843652356855",
"-23.650469384624824,-46.64591797052929",
"-23.511053630592958,-46.747144131816135",
"-23.543793492933752,-46.748715360701574",
"-23.445729657757738,-46.739479083244603",
"-23.716223824258936,-46.767797693935982",
"-23.566381368009477,-46.66675630991854",
"-23.680770596050998,-46.739407555267569",
"-23.567426544872017,-46.432535179609651",
"-23.522581216372451,-46.705893962565987",
"-23.566926654506279,-46.631787741831793",
"-23.497630602393549,-46.675849604705292",
"-23.459448371126147,-46.640755013077701",
"-23.561400380471184,-46.596341840538798",
"-23.596229829228129,-46.70794979338018",
"-23.830153407889654,-46.716468280873023",
"-23.527196646448772,-46.617412633182177",
"-23.57604651136641,-46.46291741678651",
"-23.706878613507758,-46.649885314655393",
"-23.52319504989007,-46.528771950623238",
"-23.538694962914978,-46.680852828312325",
"-23.566410526696245,-46.688643236152608",
"-23.480841446475491,-46.726122641582471",
"-23.515679590344632,-46.493754587551251",
"-23.592441537493084,-46.785470356988689",
"-23.544821344644951,-46.641017675801365",
"-23.571155066942872,-46.758861615459416",
"-23.630698462796921,-46.598129726557239",
"-23.531881471999395,-46.652762401534055",
"-23.499905591924659,-46.630330484052152",
"-23.642349219584816,-46.701241105101708",
"-23.594617099244882,-46.543558912148335",
"-23.60018907528795,-46.481210686924733",
"-23.628200729676671,-46.453981359181874",
"-23.605560697995262,-46.50953747288677",
"-23.614479989655315,-46.641204879984144",
"-23.547557059247382,-46.631453905912352",
"-23.685630395657601,-46.713849920687323",
"-23.538624040414394,-46.567346280650781",
"-23.475674126202115,-46.606002308987136",
"-23.62622288727092,-46.728250306731063",
"-23.567783514597959,-46.546002824197068",
"-23.50925098803571,-46.605697267560281",
"-23.529212935821789,-46.734361937488849",
"-23.51301453254446,-46.577728837881764",
"-23.586447912436583,-46.635890690568957",
"-23.539481676878271,-46.518182204900583",
"-23.488749224441914,-46.577503685386006",
"-23.592557760091093,-46.572694497807568",
"-23.599379973077511,-46.739182696394195",
"-23.493431355986843,-46.747179324058244",
*/

//Calcula Método Naive

calculaMatrizPublico(origens,destinos);
calculaMatrizCarro(origens,destinos);

//Calcula método aprimorado

//calculaMatrizCarroAp(origens);
function calculaMatrizCarro(origens,destinos){
	service.getDistanceMatrix(
    	  {
        	origins: origens,
        	destinations: destinos,
	        travelMode: google.maps.TravelMode.DRIVING,
        	unitSystem: google.maps.UnitSystem.METRIC,
        	avoidHighways: false,
        	avoidTolls: false
      	}, callbackCarro);
}
function calculaMatrizPublico(origens,destinos){
	service.getDistanceMatrix(
    	  {
        	origins: origens,
        	destinations: destinos,
	        travelMode: google.maps.TravelMode.TRANSIT,
        	unitSystem: google.maps.UnitSystem.METRIC,
        	avoidHighways: false,
        	avoidTolls: false
      	}, callbackPublico);
}

function callbackCarro(response, status) {
	callback(response,status,0);
}
function callbackPublico(response,status) {
	callback(response,status,1);
}
function callback(response,status,travelMode){
	if (status == google.maps.DistanceMatrixStatus.OK) {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      var distanceMatrix=new Array(origins.length);
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        distanceMatrix[i]=new Array(results.length);
        for (var j = 0; j < results.length; j++) {
        	distanceMatrix[i][j]=results[j].duration.value;
        }
      }
	  imprimeMatriz(distanceMatrix,travelMode);
    } else {
      alert(status);
    }
}
function imprimeMatriz(matriz,travelMode){
	var tabela='tabela_publico';
	if(travelMode==0){
		tabela='tabela_carro';
	}
	var tbody = document.getElementById(tabela).getElementsByTagName('tbody')[0];
	var row=tbody.insertRow();
	var cell=row.insertCell();
	cell.appendChild(document.createTextNode(""));
	for(var i=0;i<matriz[0].length;i++){
		var cell=document.createElement("th");
		cell.appendChild(document.createTextNode(i+1));
		row.appendChild(cell);
	}
	for(var i=0;i<matriz.length;i++){
		var row=tbody.insertRow();
		var cell=document.createElement("th");
		cell.appendChild(document.createTextNode(i+1));
		row.appendChild(cell);
		for(var j=0;j<matriz[i].length;j++){
			var cell=row.insertCell();
			cell.appendChild(document.createTextNode(matriz[i][j]));
		}
	}
}



//Método aprimorado
//Só admite matrizes quadradas

function calculaMatrizCarroAp(pontos){
	var n=pontos.length;
	var counter=0;
	var distanceMatrix=new Array(pontos.length);
	var destinos=new Array();


	getDistanceMatrix();

	function getDistanceMatrix(){
		destinos=new Array();
		for(var i=counter+1;i<pontos.length;i++){
			destinos.push(pontos[i]);
		}
		service.getDistanceMatrix(
    		  {
        	origins: [pontos[counter]],
      	  	destinations: destinos,
	        travelMode: google.maps.TravelMode.DRIVING,
       	 	unitSystem: google.maps.UnitSystem.METRIC,
       	 	avoidHighways: false,
       	 	avoidTolls: false
    	  	}, callbackCarroAp);
	}

	function callbackCarroAp(response,status){
		if (status == google.maps.DistanceMatrixStatus.OK) {
      		var origins = response.originAddresses;
      		var destinations = response.destinationAddresses;
        	var results = response.rows[0].elements;
        	distanceMatrix[counter]=new Array(results.length);
        	distanceMatrix[counter][counter]=0;
        	for (var j = 0; j < results.length; j++) {
        		distanceMatrix[counter][j+counter+1]=results[j].duration.value;
        	}
      		if(counter<n-2){
	  			counter++;
	  			getDistanceMatrix();
	  		}else{
	  			distanceMatrix[pontos.length-1]=new Array();
	  			distanceMatrix[pontos.length-1][pontos.length-1]=0;
	  			matrixSimmetry();
	  			imprimeMatriz(distanceMatrix,0);
	  		}
    	} else {
      		alert(status);
    	}
	}
	function matrixSimmetry(){
		for(var i=0;i<distanceMatrix.length;i++){
			for(var j=i;j<distanceMatrix.length;j++){
				distanceMatrix[j][i]=distanceMatrix[i][j];
			}
		}
	}
}