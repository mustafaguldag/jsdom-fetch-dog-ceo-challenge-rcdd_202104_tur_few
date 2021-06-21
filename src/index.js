document.addEventListener('DOMContentLoaded', function () {
 
  fetch1();
  fetch2();

});
  


console.log('%c HI', 'color: firebrick')

let array = [];

const imgUrlDogPhoto = "https://dog.ceo/api/breeds/image/random/4";

function fetch1() { 

fetch("https://dog.ceo/api/breeds/image/random/4")
.then((response) => {
    return response.json(); 
  })
  .then((json) => {
    renderDogPhotos(json)

  

    })
  };
  function renderDogPhotos(json) {
    console.log(json)
    console.log(json.message)
    let imageCon = document.getElementById("dog-image-container");
    for (i=0; i <json.message.length;i++){ 
    let listImage = document.createElement("img");
    listImage.setAttribute("src", json.message[i]);
    imageCon.append(listImage);
    }
  } 
  
  function fetch2() { 

  fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then(json => listDogNames(json));
  }

  function listDogNames(json) {
    console.log(json)
    let dogUl = document.getElementById("dog-breeds");

    const blabla1 = Object.keys(json.message);
    for (i=0; i< blabla1.length;i++) {
      let listDogs = document.createElement("li");
      listDogs.innerText = blabla1[i];
      dogUl.appendChild(listDogs);
      listDogs.addEventListener('click', changeColor);

};
}
function changeColor(event) {
  event.target.style.color = 'blue';
}

const dropDown = document.getElementById("breed-dropdown");
console.log(dropDown);




 dropDown.addEventListener("change", function(event){
   const newDogList = [...listDogs];
  
   const chosenOption = event.target.value
  
   newDogList.forEach(dog){
     if (chosenOption == dog.innerText[0]){
       dog.style.display = "block";
     } else {dog.style.display = "none";}
   }
 }
);








  

  


