
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents Bonuss
function BoutiqueBonus() {
	this.BonusArray;
}

BoutiqueBonus.prototype.Age1= function () {
	

	// ----------------------  BONUS HACHE ----------------
	Mine_1 = new BonusMultiplicator(50,1.1,"Hache");
	Mine_1.setName('Silex');
	Mine_1.setDescription("Une etincelle d'evolution (production Haches x1.10)");
	Mine_1.setImg("./Ressources/Images/Bonus/Bois/silex.png");


	Mine_2 = new BonusMultiplicator(200,1.15,"Hache");
	Mine_2.setName('Basalte');
	Mine_2.setDescription("Plus dur  (production Haches x1.15)");
	Mine_2.setImg("./Ressources/Images/Bonus/Bois/basalte.png");


	Mine_3 = new BonusMultiplicator(500,1.2,"Hache");
	Mine_3.setName('Manche en Hickory');
	Mine_3.setDescription('La fierté des Achéens! (production Haches x1.20)');
	Mine_3.setImg("./Ressources/Images/Bonus/Bois/manche_hickory.png");


	Mine_4 = new BonusMultiplicator(800,1.3,"Hache");
	Mine_4.setName('Granite');
	Mine_4.setDescription("Encore plus dur ! (production Haches x1.30) ");
	Mine_4.setImg("./Ressources/Images/Bonus/Bois/granite.png");

	
	// --------------------BONUS BUCHERONS --------------------

	Mine_5 = new BonusMultiplicator(1000,1.25,"Bucheron");
	Mine_5.setName('Stripteaseuses');
	Mine_5.setDescription("Aucun arbre n'arrête un bucheron , surtout avec une jolie fille derrière! (production Bucherons x1.25)");
	Mine_5.setImg("./Ressources/Images/Bonus/Bois/poledance.png");


	Mine_6 = new BonusMultiplicator(1500,1.3,"Bucheron");
	Mine_6.setName("Sirop d'érable");
	Mine_6.setDescription("Les bucherons sont en forme! (production Bucherons x1.3)");
	Mine_6.setImg("./Ressources/Images/Bonus/Bois/sirop_derable.png");


	// --------------------BONUS Castors --------------------

	Mine_7 = new BonusMultiplicator(2000,1.4,"Castors");
	Mine_7.setName("Dentifirice");
	Mine_7.setDescription("Plus forte ,plus blanche : meilleurs dents! (production Castors x1.4) ");
	Mine_7.setImg("./Ressources/Images/Bonus/Bois/dentifrice.png");


	Mine_8 = new BonusMultiplicator(2500,1.5,"Castors");
	Mine_8.setName("Queue de fer");
	Mine_8.setDescription("Pas de sous entendu... (production Castors x1.5) ");
	Mine_8.setImg("./Ressources/Images/Bonus/Bois/queue_fer.png");


	// --------------------BONUS Atelier--------------------

	Mine_9 = new BonusMultiplicator(3000,1.75,"Atelier");
	Mine_9.setName("Meule d'affutage");
	Mine_9.setDescription("Et que ca meule ! (production Ateliers x1.75) ");
	Mine_9.setImg("./Ressources/Images/Bonus/Bois/meule.png");


	Mine_10 = new BonusMultiplicator(3500,2,"Atelier");
	Mine_10.setName("Grosse soirée");
	Mine_10.setDescription("Party Hard  (production Ateliers x2)");
	Mine_10.setImg("./Ressources/Images/Bonus/Bois/boule_disco.png");


	// --------------------BONUS Curseurs --------------------

	Mine_11 = new BonusClick(1000,2);
	Mine_11.setName("Main Caleuses");
	Mine_11.setDescription("Vos mains se sont habitués à couper (Cliquer rapporte +2 ressources)");
	Mine_11.setImg("./Ressources/Images/Bonus/Bois/main.png");


	Mine_12 = new BonusClick(2000,10);
	Mine_12.setName("Fap fap fap fap...");
	Mine_12.setDescription("Fap  (Cliquer rapporte +10 ressources)");
	Mine_12.setImg("./Ressources/Images/Bonus/Bois/fap.png");

	// --------------------BONUS RPS --------------------



	this.BonusArray=[Mine_1,Mine_2,Mine_3,Mine_4,Mine_5,Mine_6,Mine_7,Mine_8,Mine_9,Mine_10,Mine_11,Mine_12];

}

BoutiqueBonus.prototype.Age2= function () {
	
	// ----------------------  BONUS Pioche ----------------
	Mine_13 = new BonusMultiplicator(4000,1.1,"Pioche");
	Mine_13.setName('Manche en Hickory');
	Mine_13.setDescription("Le même manche , mais en mieux  (production Pioches x1.1)");
	Mine_13.setImg("./Ressources/Images/Bonus/Pierre/manche_hickory.png");


	Mine_14 = new BonusMultiplicator(6000,1.2,"Pioche");
	Mine_14.setName('Affutage');
	Mine_14.setDescription("Ca rentre comme papa dans maman! (production Pioches x1.2)");
	Mine_14.setImg("./Ressources/Images/Bonus/Pierre/pierre_afutage.png");


	

	
	// --------------------BONUS Sculpteur --------------------

	Mine_15 = new BonusMultiplicator(8000,1.3,"Sculpteur");
	Mine_15.setName('Gradine');
	Mine_15.setDescription("Précision digne d'un aimbot! (production Sculpteurs x1.3) ");
	Mine_15.setImg("./Ressources/Images/Bonus/Pierre/gradine.png");


	Mine_16 = new BonusMultiplicator(10000,1.4,"Sculpteur");
	Mine_16.setName("Bonne zik");
	Mine_16.setDescription("On se met bien !  (production Sculpteurs x1.4) ");
	Mine_16.setImg("./Ressources/Images/Bonus/Pierre/enceinte.png");


	// --------------------BONUS Racaillou --------------------

	Mine_17 = new BonusMultiplicator(12000,1.5,"Racaillou");
	Mine_17.setName("Centre Pokemon");
	Mine_17.setDescription("Voulez-vous les soigner? (production Racaillous x1.5)");
	Mine_17.setImg("./Ressources/Images/Bonus/Pierre/centre_pokemon.png");


	Mine_18 = new BonusMultiplicator(15000,1.6,"Racaillou");
	Mine_18.setName("Pierre Feu");
	Mine_18.setDescription("Quoi ? On dirait que racaillou évolue !  (production Racaillous x1.6)");
	Mine_18.setImg("./Ressources/Images/Bonus/Pierre/Pierrefeu.png");


	// --------------------BONUS Karateka --------------------

	Mine_19 = new BonusMultiplicator(16000,1.7,"Karateka");
	Mine_19.setName("Ceinture Noire");
	Mine_19.setDescription("Yamete Senpai! (production Karateka x1.7)");
	Mine_19.setImg("./Ressources/Images/Bonus/Pierre/ceinture-noire.png");


	Mine_20 = new BonusMultiplicator(22000,1.8,"Karateka");
	Mine_20.setName("Concentration");
	Mine_20.setDescription("Ahhhhmmmmmmmmmmmmm (production Karateka x1.8)");
	Mine_20.setImg("./Ressources/Images/Bonus/Pierre/concentration.png");

	// --------------------BONUS Carriere --------------------

	Mine_21 = new BonusMultiplicator(25500,1.9,"Carriere");
	Mine_21.setName("Brouette");
	Mine_21.setDescription("Et je parle pas de la position! (production Carriere x1.9)");
	Mine_21.setImg("./Ressources/Images/Bonus/Pierre/brouette.png");


	Mine_22 = new BonusMultiplicator(30000,2,"Carriere");
	Mine_22.setName("Shoot de poudre");
	Mine_22.setDescription("Pas la pierre (production Karateka x2)");
	Mine_22.setImg("./Ressources/Images/Bonus/Pierre/coc.png");

// --------------------BONUS Dojo --------------------

	Mine_23 = new BonusMultiplicator(30000,1.5,"Dojo");
	Mine_23.setName("Mannequin de bois");
	Mine_23.setDescription("Le karate coupant! (production Dojos x1.5)");
	Mine_23.setImg("./Ressources/Images/Bonus/Pierre/mannequin-de-bois.png");


	Mine_24 = new BonusMultiplicator(40000,2,"Dojo");
	Mine_24.setName("Nunchaku");
	Mine_24.setDescription("Avec de l'equipement, ca va plus vite (production Dojos x2)");
	Mine_24.setImg("./Ressources/Images/Bonus/Pierre/nunchaku.png");



	// --------------------BONUS Clique --------------------

	Mine_25= new BonusClick(30000,10);
	Mine_25.setName("Poing du dragon");
	Mine_25.setDescription("Vos mains sont en feu (Cliquer rapporte +10 ressources)");
	Mine_25.setImg("./Ressources/Images/Bonus/Pierre/Shenron_Zenkai.png");


	Mine_26 = new BonusClick(50000,20);
	Mine_26.setName("Potion Magique");
	Mine_26.setDescription("Les Gaulois avait donc raison... (Cliquer rapporte +20 ressources)");
	Mine_26.setImg("./Ressources/Images/Bonus/Pierre/potion_magique.png");

	// --------------------BONUS RPS --------------------
	this.BonusArray=[Mine_13,Mine_14,Mine_15,Mine_16,Mine_17,Mine_18,Mine_19,Mine_20,Mine_21,Mine_22,Mine_23,Mine_24,Mine_25,Mine_26];

}

BoutiqueBonus.prototype.Age3= function () {
	
	// ----------------------  BONUS Foreuse ----------------
	Mine_27 = new BonusMultiplicator(10000,1.5,"Foreuses");
	Mine_27.setName('Tête en adamantium');
	Mine_27.setDescription("(production Foreuses x1.5)");
	Mine_27.setImg("./Ressources/Images/Bonus/Petrole/adamantium.png");


	Mine_28 = new BonusMultiplicator(15000,2,"Foreuses");
	Mine_28.setName('Moteur Hydraulique');
	Mine_28.setDescription("(production Foreuses x2)");
	Mine_28.setImg("./Ressources/Images/Bonus/Petrole/hydraulique.png");


	

	
	// --------------------BONUS Soudeur --------------------

	Mine_29 = new BonusMultiplicator(20000,1.5,"Soudeurs");
	Mine_29.setName('Alchimie');
	Mine_29.setDescription("(production soudeurs x1.5)");
	Mine_29.setImg("./Ressources/Images/Bonus/Petrole/erlenmeyer.png");


	Mine_30 = new BonusMultiplicator(25000,2,"Soudeurs");
	Mine_30.setName('Lance-Flamme');
	Mine_30.setDescription("(production Soudeurs x2)");
	Mine_30.setImg("./Ressources/Images/Bonus/Petrole/lance_flamme.png");


	// --------------------BONUS Chat --------------------

	Mine_31= new BonusMultiplicator(30000,1.5,"Chat");
	Mine_31.setName("KriteKrat");
	Mine_31.setDescription("(production des chats x1.5) ");
	Mine_31.setImg("./Ressources/Images/Bonus/Petrole/kritekrat.png");


	Mine_32 = new BonusMultiplicator(35000,2,"Chat");
	Mine_32.setName("Nyan Cat");
	Mine_32.setDescription("(production des chats x2) ");
	Mine_32.setImg("./Ressources/Images/Bonus/Petrole/nyan_cat.png");


	// --------------------BONUS Karateka --------------------

	Mine_33 = new BonusMultiplicator(45000,1.5,"Monsanto");
	Mine_33.setName("OGM");
	Mine_33.setDescription("(production des Monsanto x1.5)");
	Mine_33.setImg("./Ressources/Images/Bonus/Petrole/OGM.png");


	Mine_34 = new BonusMultiplicator(50000,2,"Monsanto");
	Mine_34.setName("Pesticide");
	Mine_34.setDescription("(production des Monsanto x2)");
	Mine_34.setImg("./Ressources/Images/Bonus/Petrole/pesticide.png");

	// --------------------BONUS Iron Man --------------------

	Mine_35 = new BonusMultiplicator(60000,1.5,"IronMan");
	Mine_35.setName("Jarvis");
	Mine_35.setDescription("(production des IronMan x1.5)");
	Mine_35.setImg("./Ressources/Images/Bonus/Petrole/jarvis.png");


	Mine_36 = new BonusMultiplicator(75000,1.8,"IronMan");
	Mine_36.setName("Tesseract");
	Mine_36.setDescription("(production des IronMan x1.8)");
	Mine_36.setImg("./Ressources/Images/Bonus/Petrole/tesseract.png");

// --------------------BONUS Fitness --------------------

	Mine_37 = new BonusMultiplicator(85000,1.5,"FitnessPark");
	Mine_37.setName("Proteine");
	Mine_37.setDescription("De la bonne prod pour gros muscles! (production des Fitness Park x1.5) ");
	Mine_37.setImg("./Ressources/Images/Bonus/Petrole/protein.png");


	Mine_38 = new BonusMultiplicator(100000,2,"FitnessPark");
	Mine_38.setName("Zumba");
	Mine_38.setDescription("Belle vue (production des Fitness Park x2)");
	Mine_38.setImg("./Ressources/Images/Bonus/Petrole/zumba.png");



	

	// --------------------BONUS Internet --------------------

	Mine_39 = new BonusMultiplicator(85000,1.5,"Internet");
	Mine_39.setName("Fibre optique");
	Mine_39.setDescription("(production d'Internet x1.5) ");
	Mine_39.setImg("./Ressources/Images/Bonus/Petrole/fibre_optique.png");


	Mine_40 = new BonusMultiplicator(100000,2,"Internet");
	Mine_40.setName("GangnamStyle");
	Mine_40.setDescription(" Oppa GangnamStyle (production d'Internet x2)");
	Mine_40.setImg("./Ressources/Images/Bonus/Petrole/gangnam_style.png");

	// --------------------BONUS Internet --------------------

	Mine_41 = new BonusMultiplicator(85000,1.5,"Transformer");
	Mine_41.setName("Nitro");
	Mine_41.setDescription("(production des Transformers x1.5) ");
	Mine_41.setImg("./Ressources/Images/Bonus/Petrole/nitro.png");


	Mine_42 = new BonusMultiplicator(100000,2,"Transformer");
	Mine_42.setName("AllSpark");
	Mine_42.setDescription(" (production des Transformers x2)");
	Mine_42.setImg("./Ressources/Images/Bonus/Petrole/allsparks.png");

	// --------------------BONUS Clique --------------------

	Mine_43= new BonusClick(45000,100);
	Mine_43.setName("Souris");
	Mine_43.setDescription("(production des click +100)");
	Mine_43.setImg("./Ressources/Images/Bonus/Petrole/souris.png");


	Mine_44 = new BonusClick(50000,200);
	Mine_44.setName("Tequila");
	Mine_44.setDescription("(production des click +200)");
	Mine_44.setImg("./Ressources/Images/Bonus/Petrole/tequila.png");

	// --------------------BONUS RPS --------------------
	this.BonusArray=[Mine_27,Mine_28,Mine_29,Mine_30,Mine_31,Mine_32,Mine_33,Mine_34,Mine_35,Mine_36,Mine_37,Mine_38,Mine_39,Mine_40,Mine_41,Mine_42,Mine_43,Mine_44];

}

BoutiqueBonus.prototype.Age4= function () {
	
	// ----------------------  BONUS Sabre Laser ----------------
	Mine_45 = new BonusMultiplicator(50000,1.5,"Sabre Laser");
	Mine_45.setName('Force Obscur!');
	Mine_45.setDescription("Join the dark side ! (production sabre Laser x1.5)");
	Mine_45.setImg("./Ressources/Images/Bonus/Futur/force_obscur.png");


	Mine_46 = new BonusMultiplicator(75000,2,"Sabre Laser");
	Mine_46.setName('Sabre double-lame');
	Mine_46.setDescription("Le dernier Sith ! (production sabres laser x2)");
	Mine_46.setImg("./Ressources/Images/Bonus/Futur/sabre_double.png");


	

	
	// --------------------BONUS  Terminator --------------------

	Mine_47 = new BonusMultiplicator(20000,1.5,"Terminator");
	Mine_47.setName('T-800');
	Mine_47.setDescription(" Il est revenu (production Terminator x1.5)");
	Mine_47.setImg("./Ressources/Images/Bonus/Futur/t800.png");


	Mine_48 = new BonusMultiplicator(25000,2,"Terminator");
	Mine_48.setName('T-1000');
	Mine_48.setDescription("Tes parents sont morts John (production Terminator x2)");
	Mine_48.setImg("./Ressources/Images/Bonus/Futur/t2000.png");


	// --------------------BONUS Alien --------------------

	Mine_49= new BonusMultiplicator(30000,1.5,"Alien");
	Mine_49.setName("Eiffel65");
	Mine_49.setDescription("Dabedi dabedaaaa (production des aliens x1.5) ");
	Mine_49.setImg("./Ressources/Images/Bonus/Futur/blue.png");


	Mine_50 = new BonusMultiplicator(35000,2,"Alien");
	Mine_50.setName("Predalien");
	Mine_50.setDescription(" Très moche, mais très fort(production des aliens x2) ");
	Mine_50.setImg("./Ressources/Images/Bonus/Futur/predalien.png");


	// --------------------BONUS Aperture Science --------------------

	Mine_51 = new BonusMultiplicator(45000,1.5,"Aperture Science");
	Mine_51.setName("Portal Gun");
	Mine_51.setDescription(" créé des mini trou de verre (production des Aperture Science x1.5)");
	Mine_51.setImg("./Ressources/Images/Bonus/Futur/portal_gun.png");


	Mine_52 = new BonusMultiplicator(50000,2,"Aperture Science");
	Mine_52.setName("Glados");
	Mine_52.setDescription(" Staying Alive , Staying Alive ... (production des Aperture Science x2)");
	Mine_52.setImg("./Ressources/Images/Bonus/Futur/glados.png");

	// --------------------BONUS Neo --------------------

	Mine_53 = new BonusMultiplicator(60000,1.5,"Neo");
	Mine_53.setName("Lunette de soleil");
	Mine_53.setDescription("Parce que c'est plus classe (production de Neo x1.5)");
	Mine_53.setImg("./Ressources/Images/Bonus/Futur/lunettes_neo.png");


	Mine_54 = new BonusMultiplicator(75000,1.8,"Neo");
	Mine_54.setName("Bombe EMP");
	Mine_54.setDescription(" Défonce tous les robots (production de Neo x1.8)");
	Mine_54.setImg("./Ressources/Images/Bonus/Futur/emp_grenade.png");

// --------------------BONUS Salle du temps --------------------

	Mine_55 = new BonusMultiplicator(85000,1.5,"Salle du temps");
	Mine_55.setName("Haricots Magiques");
	Mine_55.setDescription("Repas à emporter! (production de la Salle du temps x1.5) ");
	Mine_55.setImg("./Ressources/Images/Bonus/Futur/haricot_magique.png");


	Mine_56 = new BonusMultiplicator(100000,2,"Salle du temps");
	Mine_56.setName("Super Sayans God");
	Mine_56.setDescription("La puissance d'un dieu? (production de la Salle du temps x2)");
	Mine_56.setImg("./Ressources/Images/Bonus/Futur/super_saiyan_god.png");



	

	// --------------------BONUS Cerebro --------------------

	Mine_57 = new BonusMultiplicator(85000,1.5,"Cerebro");
	Mine_57.setName("Fauteuil Roulant");
	Mine_57.setDescription(" C'est plus stylé dans un Cerebro (production de Cerebro x1.5) ");
	Mine_57.setImg("./Ressources/Images/Bonus/Futur/fauteuil_xavier.png");


	Mine_58 = new BonusMultiplicator(100000,2,"Cerebro");
	Mine_58.setName("Crane Rasé");
	Mine_58.setDescription(" Meilleurs transmission (production de Cerebro x2)");
	Mine_58.setImg("./Ressources/Images/Bonus/Futur/crane_rasée.png");

	// --------------------BONUS Delorean --------------------

	Mine_59 = new BonusMultiplicator(85000,1.5,"DeLorean");
	Mine_59.setName("2.21 Gigowatts");
	Mine_59.setDescription(" Nom de ZEUS ! (production des Deloreans x1.5) ");
	Mine_59.setImg("./Ressources/Images/Bonus/Futur/2.21gigowatts.png");


	Mine_60 = new BonusMultiplicator(100000,2,"DeLorean");
	Mine_60.setName("Voiture volante");
	Mine_60.setDescription(" Oh c'est l'pied (production des Deloreans x2)");
	Mine_60.setImg("./Ressources/Images/Bonus/Futur/delorean_volante.png");

	// --------------------BONUS Trou Noir --------------------

	Mine_61 = new BonusMultiplicator(85000,1.5,"Trou Noir");
	Mine_61.setName("Trou de verre");
	Mine_61.setDescription(" 2 trous noirs qui font un pont ! (production des Trous Noir x1.5) ");
	Mine_61.setImg("./Ressources/Images/Bonus/Futur/trou_ver.png");


	Mine_62 = new BonusMultiplicator(100000,2,"Trou Noir");
	Mine_62.setName("Pays des licornes");
	Mine_62.setDescription(" Et des cacapapillons (production des Trous Noir x2)");
	Mine_62.setImg("./Ressources/Images/Bonus/Futur/licorne.png");


	// --------------------BONUS Jésus(resurrection) --------------------

	Mine_63 = new BonusMultiplicator(85000,1.5,"Jésus (résurrection)");
	Mine_63.setName("Chorégraphie Zombie");
	Mine_63.setDescription(" Thrillerrrrr ! (production des jesus x1.5) ");
	Mine_63.setImg("./Ressources/Images/Bonus/Futur/chorégraphie_zombie.png");


	Mine_64 = new BonusMultiplicator(100000,5,"Jésus (résurrection)");
	Mine_64.setName("Benediction herbologique");
	Mine_64.setDescription(" sssssssuuuppppp bitchhhh (production des Jesus x5)");
	Mine_64.setImg("./Ressources/Images/Bonus/Futur/benediction_herbologique.png");

	// --------------------BONUS Clique --------------------

	Mine_65= new BonusClick(45000,150);
	Mine_65.setName("5 doigts et la paume");
	Mine_65.setDescription(" Font exploser le coeur de l'ennemi(production des click +150)");
	Mine_65.setImg("./Ressources/Images/Bonus/Futur/main.png");


	Mine_66 = new BonusClick(50000,300);
	Mine_66.setName("Main divine");
	Mine_66.setDescription(" Permet de découper le cake(production des click +300)");
	Mine_66.setImg("./Ressources/Images/Bonus/Futur/main_divine.png");

	// --------------------BONUS RPS --------------------
	this.BonusArray=[Mine_45,Mine_46,Mine_47,Mine_48,Mine_49,Mine_50,Mine_51,Mine_52,Mine_53,Mine_54,Mine_55,Mine_56,Mine_57,Mine_58,Mine_59,Mine_60,Mine_61,Mine_62,Mine_63,Mine_64,Mine_65,Mine_66];

}

BoutiqueBonus.prototype.Afficher= function (div) {
	$('.Bonus').html("");
	var nb = 0;
	this.BonusArray.forEach(function(index,nb){
		$('.Bonus').append(index.Afficher(nb));
		$('.Bonus').append(index.Afficher2(nb));
		
		nb++;
	});
	$(".Bonus").children().each(function() {
		
		$(this).on("click", function() {
			Game.AcheterBonus($(this).attr("value"));
		})
	});


}





BoutiqueBonus.prototype.RemoveBonus=function(ind){
	
	//this.UpgradeAchat(ind);
	return this.BonusArray.splice(ind,1);
}

BoutiqueBonus.prototype.UpgradeAchat=function(ind){
	var OldBonus =this.BonusArray[ind];
	var NewBonus;
	if (this.BonusArray[ind].constructor.name=="BonusIncome")
	{

		NewBonus = new BonusIncome(parseInt(OldBonus.getCost()*1.5+10),OldBonus.getIncomeAmount()*2);
	}
	 
	this.BonusArray.push(NewBonus);
}

BoutiqueBonus.prototype.getBonus=function(nb){
	return this.BonusArray[nb];
}

BoutiqueBonus.prototype.RefreshBonus=function(LastAchat){
	alert(LastAchat.constructor.name);
	return;
}
