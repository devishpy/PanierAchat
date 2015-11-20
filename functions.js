//Création d'un tableau qui contiendra les commandes.
var PanierAchat = [];

//Fonction affichant le contenu du Panier.
function AfficherpanierAchat(){
    var commandeProduitsTblBody=document.getElementById("commandeProduitsTblBody");

    //Suppression de Rangées précédentes de la table de commandes
    while(commandeProduitsTblBody.rows.length>0) {
        commandeProduitsTblBody.deleteRow(0);
    }

    //Variable pour le prix total du Panier
    var panier_total_prix=0;

    //Itération pour la liste des objects
    for(var produit in PanierAchat){

        //Nouvelle Rangée
        var row=commandeProduitsTblBody.insertRow();

        //Créer 3 cellulles
        var cellNom = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrix = row.insertCell(2);
        cellPrix.align="right";

        //Remplir cellulle avec les valeurs de la commande actuelle.
        cellNom.innerHTML = PanierAchat[produit].Nom;
        cellDescription.innerHTML = PanierAchat[produit].Description;
        cellPrix.innerHTML = PanierAchat[produit].Prix;
        panier_total_prix+=PanierAchat[produit].Prix;
    }

    //Remplir coût du Panier
    document.getElementById("panier_total").innerHTML=panier_total_prix;
}


function AjouterPanier(nom,description,prix){

   //Objet JavaScript contenant les propriétés:Nom,Description and Prix

   var uniqueProduit = {};

   //Remplissage de la Commande object avec données
   uniqueProduit.Nom=nom;
   uniqueProduit.Description=description;
   uniqueProduit.Prix=prix;

   //Ajouter les nouvelles commandes au Panier.
   PanierAchat.push(uniqueProduit);

   //Aficher sur l'écran
   AfficherpanierAchat();

}


function RetirerPanier(nom,description,prix){

   //Objet JavaScript contenant les propriétés:Nom,Description and Prix

   var uniqueProduit = {};

   //Remplissage de la Commande object avec données
   uniqueProduit.Nom=nom;
   uniqueProduit.Description=description;
   uniqueProduit.Prix=prix;

   //Ajouter les nouvelles commandes au Panier.
   PanierAchat.pop(uniqueProduit);

   //Aficher sur l'écran
   AfficherpanierAchat();

}
