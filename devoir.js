const container = document.getElementById('container'); // Ici, on vient sélectionner le conteneur
const clickSound = document.getElementById('Son_clic_souris'); // Encore une fois on viens chercher le sons du clic de la souris pour l'inclue dans le JavaScript
let buttonNumber = 1; // On initialise le nombre de boutons donc sa démarre à 1 par le premier bouton, et c'est un "let" parceque ça valeur va changer jusqu'au nombre max de boutons 
const buttonTexts = ['Cigarettes After Sex', 'Artic Monkeys', 'Sex Pistols', 'Linkin Park', 'Hozier', 'ACDC', 'VIAL']; // Tableau qui contient tous les noms de groupe que j'ai mis.
container.addEventListener('click', (event) => { //Dès qu'il y a click alors ça déclenche ce que contient la boucle
  if (buttonNumber <= 6 && event.target.tagName === 'BUTTON') { //J'ai mis 7 boutons parceque dans la tradition selon Wikipédia les poupées russes étaient constituées de 5,7 ou 10 mais 5 c'est pas assez et 10 peut-etre trop.
    // C'est pour créer un nouveaux bouton mais plus petit que le précedent
    const newButton = document.createElement('button');
    newButton.innerText = buttonTexts[buttonNumber];
    newButton.id = `btn${buttonNumber + 1}`;
    newButton.style.fontSize = `${16 - buttonNumber}px`; //Juste la taille  
    newButton.style.marginTop = `${buttonNumber * 10}px`;
    clickSound.currentTime = 0;
    clickSound.play();  //Juste pour déclencher le son de clic souris

    // Permet de donner une couleur aléatoire aux boutons qui se créent ! 
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    newButton.style.backgroundColor = randomColor;

    buttonNumber++;

    // Ajouter le nouveau bouton au conteneur
    container.appendChild(newButton);
  }
});
