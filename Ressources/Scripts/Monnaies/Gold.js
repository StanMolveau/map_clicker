//////CLASS_GOLD\\\\\\\\\\\\\\\\\\
function Gold(){

   // Add object properties
   this.gold = 0;
   this.TotalGold= 0;
}

	// Add methods
	Gold.prototype.getGold = function(){

		return this.gold;
	};
	Gold.prototype.getTotalGold = function(){
		

	    return this.TotalGold;
	};
	Gold.prototype.IncrementGold = function(){

	    this.gold=this.gold+1;
	    this.TotalGold=this.TotalGold+1;
	};
	Gold.prototype.setGold = function(int){

	    this.gold=int;
	    this.TotalGold=int;
	};


	Gold.prototype.AddGold = function(int){

	    this.gold=this.gold+int;
	    this.TotalGold=this.TotalGold+int;
	};
	Gold.prototype.Afficher = function(){
		var arrondie = arrondir(this.getGold());
		arrondie = formatMillier(arrondie);
	    $('#Gold').html(arrondie);
	};
	Gold.prototype.RemoveGold = function(int){

		

		this.gold=this.gold-int;
	};

function arrondir(resultat) {
        
	  resultat2 = Math.round(resultat); 

      return resultat2;
}

// Instantiate new objects 
var mongold = new Gold();


function formatMillier( nombre){
  nombre += '';
  var sep = ' ';
  var reg = /(\d+)(\d{3})/;
  while( reg.test( nombre)) {
    nombre = nombre.replace( reg, '$1' +sep +'$2');
  }
  return nombre;
}
