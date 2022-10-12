window.onload = () => {
  let soldeCourant = document.getElementById("solde-courants");

  let listeHistorique = document.getElementById("liste-virements");
  let liste = [];
  let valider = document.getElementById("valider");
  valider.addEventListener("click", virement);

  function virement() {
    let montant = document.getElementById("montant-du-virement").value;
    if (montant > 0 || montant < 0) {

      soldeCourant.innerHTML = parseFloat(montant) + parseFloat(soldeCourant.innerHTML) + "€";
      liste.push(montant + "€");
      console.log(liste);
      listeHistorique.innerText = liste;

    } else {
      soldeCourant.innerHTML = parseFloat(soldeCourant.innerHTML) + "€";
      document.getElementById("montant-du-virement").value = ""
    }

  }

  let annuler = document.getElementById("annuler");
  annuler.addEventListener("click", () => {
    document.getElementById("montant-du-virement").value = "";
  });

  let id = document.getElementById("num-id");
  function rndId() {
    let rnd = Math.floor(Math.random() * 10000);
    while (rnd < 1000 || rnd > 9999) {
      rnd = Math.floor(Math.random() * 10000);
    }
    id.innerHTML = rnd;
  }
  rndId();
};
