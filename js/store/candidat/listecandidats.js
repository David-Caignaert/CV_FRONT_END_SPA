//tableau pour liste des candidats
let liste_candidat = new Array();
//appel ajax via axios en get
axios
  .get(backend + "listecandidats.php")
  //réponse et récuparation des données
  .then((response) => {
    liste_candidat = response.data;
    console.log("liste_candidats", liste_candidat);
    let candidat = document.querySelector(".candidat").outerHTML;
    let contenu = "";
    //parcourir la liste
    for (let i = 0; i < liste_candidat.length; i++) {
      let candidat_contenu = candidat;
      candidat_contenu = candidat_contenu.replace(
        "{{nom_candidat}}",
        liste_candidat[i].nom
      );
      candidat_contenu = candidat_contenu.replace(
        "{{prenom_candidat}}",
        liste_candidat[i].prenom
      );
      candidat_contenu = candidat_contenu.replace(
        "{{age_candidat}}",
        liste_candidat[i].dateNaissance
      );
      candidat_contenu = candidat_contenu.replace(
        "{{adresse_candidat}}",
        liste_candidat[i].adresse
      );
      candidat_contenu = candidat_contenu.replace(
        "{{ville_candidat}}",
        liste_candidat[i].ville
      );
      candidat_contenu = candidat_contenu.replace(
        "{{mail_candidat}}",
        liste_candidat[i].mail
      );
      candidat_contenu = candidat_contenu.replace(
        "{{info_candidat}}",
        liste_candidat[i].info
      );
      contenu += candidat_contenu;
    }
    //candidat.replace("{{nom_candidat}}", liste_candidat[0].nom);
    document.querySelector(".candidat_contenu").innerHTML = contenu;
  })
  // Si erreur de larequete
  .catch((error) => {
    console.log("Erreur", error);
  });
