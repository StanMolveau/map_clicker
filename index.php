<!DOCTYPE html>

<head>
	
    <!-- **END** -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">

	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
	 
	<link href='Main.css' rel='stylesheet' type='text/css'>
	<link href='Ressources/includes/ProgressBar.css' rel='stylesheet' type='text/css'>
	<link href='Pages/Container.css' rel='stylesheet' type='text/css'>

	<!-- JQUERY -->
	<script src="Ressources/includes/jquery_min.js"type="text/javascript"></script>
	<script src="Ressources/includes/jquery_last.js" type="text/javascript" ></script>
    <script src="Ressources/includes/jquery_min_ui.js" type="text/javascript" ></script>
    


</head>

<body>



	<video autoplay loop muted id="bgvid" >
	    <source src="Ressources/Videos/BackgroundMovie.webm" type="video/webm">
	    <source src="Ressources/Videos/BackgroundMovie.mp4" type="video/mp4">
	</video>


	<div id="Container">
		<div class="LeftContainer">
			<div class="Clicker">
				<!--  <progress id="progress"value="0" max="10000"></progress>  -->
				<div class="TitleContain">
							<div> Gold :<span id="Gold"></span></div>
							<div> Bonus :<span id="bonus"></span></div>
				</div>
				<div class="Center">
					<div class="ImageClicker">

					</div>
				</div>
			</div>
		</div>
		<div class="RightContainer">
			<div class="Menu">
				<div class="button" value="0" >
					Home
				</div>
				<div class="button" value="1">
					boutique
				</div>
				<div class="button" value="2">
					Map
				</div>
				<div class="button" value="3">
					Inventaire
				</div>
				<div class="button" value="4">
					Chat
				</div>
				<div class="button" value="5">
					Options
				</div>
			</div>
			<div id="MenuPage">

				<div class="MenuPage_0 MenuPageContained" style="display:block;">
					somthing 0
				</div>
				<div class="MenuPage_1 MenuPageContained" style="display:none;">

					<div class="Inventaire">

						<div class="TitleContain">
							<div> Gold :<span id="Gold"></span></div>
							<div> Bonus :<span id="bonus"></span></div>
						</div>
						<div id="ItemInventory">
							
						</div>
					</div>

					<div class="Boutique">
						<div id="ItemSelling">

						</div>
					</div>

				</div>
				<div class="MenuPage_2 MenuPageContained" style="display:none;">
					
					<canvas id="Map" width="400" height="400" style="border: 2px solid rgb(250,250,250)">
						This text is displayed if your browser does not support HTML5 Canvas.
					</canvas> 

					<div class="TileDescri">
						<div class="Tile">
							<u class="nom">
								Mine sans fond
							</u>
							<div class="caracteristiques">
								<u>caracteristiques :</u> <br>
								+1 : fer <br>
								+5 : pierre
							</div>
							<div class="description">
								<u>description :</u> <br>
								une mine raportant de la pierre et un peu de fer ayant autrefois appartenue a Mr Gimli
							</div>
							<div class="Upgrade">
								<button> UP :</button> 5 Bois 10 Pierre 100 Argent 
							</div>
						</div>
					</div>

				</div>
				<div class="MenuPage_3 MenuPageContained" style="display:none;">
					3
				</div>
				<div class="MenuPage_4 MenuPageContained" style="display:none;">
					4
				</div>
				<div class="MenuPage_5 MenuPageContained" style="display:none;">
					<button class="mute-video"></button>
				</div>
			</div>
		</div>
	</div>	

	
	
</body>



<!-- *******PRELOADER********** -->


    <!-- *******CompileInclude********** -->
    <?php include 'CompileIncludesScripts.php';?>
    <script src="Ressources/Scripts/Main.js" type="text/javascript"></script>
	<!-- BackgroundMovie -->
	<link href='Ressources/Videos/BackgroundMovie.css' rel='stylesheet' type='text/css'>
	<script src="Ressources/Videos/BackgroundMovie.js"type="text/javascript"></script>
