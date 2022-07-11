

//     let filterCard = document.querySelector('#ABCDEF');
//     let allPicture = document.getElementById('.portfolio-container');

//     filterCard.addEventListener('click')

//       alert('ca marche');

//     if(allPicture.style.gridTemplateAreas === '"air1 air2 air3" "air4 air5 air6"'){
//         allPicture.style.gridTemplateAreas = '"air1 air4"';
//         } else {
//           allPicture.style.gridTemplateAreas = '"air1 air2 air3" "air4 air5 air6"';
//         }
// ;






// Ajouter un écouteur d'évènements à la table
let el = document.querySelector("#pc");
el.addEventListener("click", modifyContent, false);

function modifyContent() {

    let t2 = document.querySelector(".portfolio-container");
    console.log(t2);
    if(t2.style.gridTemplateAreas !== '"air1 air2 air3" "air4 air5 air6"'){
    t2.style.gridTemplateAreas = '"air3 air4"';
    } else {
    t2.style.gridTemplateAreas = '"air1 air2 air3" "air4 air5 air6"';
    };
  }

  let el2 = document.querySelector("#tout");
  el2.addEventListener("click", modifyContent1, false);

  function modifyContent1() {

    let t2 = document.querySelector(".portfolio-container");
  
    console.log(t2);
    if(t2.style.gridTemplateAreas !== '"air1 air2 air3" "air4 air5 air6"'){
    t2.style.gridTemplateAreas = '"air1 air2 air3" "air4 air5 air6"';
    } else {
    t2.style.gridTemplateAreas = '"air1 air2 air3" "air4 air5 air6"';
    };
  }

  let el3 = document.querySelector("#boutique");
  el3.addEventListener("click", modifyContent2, false);

  function modifyContent2() {
  
      let t2 = document.querySelector(".portfolio-container");
      if(t2.style.gridTemplateAreas !== '"air1 air2 air3" "air4 air5 air6"'){
      t2.style.gridTemplateAreas = '"air1 air2"';
      } else {
      t2.style.gridTemplateAreas = '"air1 air2 air3" "air4 air5 air6"';
      };
    }


  let el4 = document.querySelector("#access");
  el4.addEventListener("click", modifyContent3, false);


  
  // Ajouter un écouteur d'évènements à la table
function modifyContent3() {

    let t2 = document.querySelector(".portfolio-container");
    console.log(t2);
    if(t2.style.gridTemplateAreas !== '"air1 air2 air3" "air4 air5 air6"'){
    t2.style.gridTemplateAreas = '"air5 air6"';
    } else {
    t2.style.gridTemplateAreas = '"air1 air2 air3" "air4 air5 air6"';
    };
  }
  
  // Ajouter un écouteur d'évènements à la table