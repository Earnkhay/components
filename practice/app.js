var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Congratulations, you\'re a Partner', 'success')
  })
}


//accordion event listener
const accordion = document.querySelector('.partner');
const content = document.querySelector('.ptncontent');

accordion.addEventListener('click', accordionFunction);

// function accordionFunction(e) {
//   // element = e.target.classList;      <i class="fas fa-angle-up"></i>
//   // console.log(element);
//   if (e.target.classList.contains('partner')) {
//     //display the accordion content and change background colour.
//     content.style.display = 'block';
//     accordion.style.background = "skyblue";

//     this.classList.toggle('active');

//     //replace the down arrow with the up arrow
//     let arrowUp = e.target.children[1];
    
//     const arrowDown = document.createElement('i')
//     arrowDown.classList.add('fas', 'fa-angle-up');

//     accordion.replaceChild(arrowDown, arrowUp);
//   } else if(e.target.classList.contains('active')){
//     console.log('yes');
//   }
// }

//selecting old arrow
let arrowDown = document.querySelector('.fa-angle-down');


//creating new arrow
const arrowUp = document.createElement('i')
    arrowUp.classList.add('fas', 'fa-angle-up');

//function for the click event
function accordionFunction(e) {

  if (content.style.display === 'block') {
    content.style.display = 'none';
    //default background color
    accordion.style.background = "white";
    //default arrow
    accordion.replaceChild(arrowDown, arrowUp);
  } else {
    content.style.display = 'block';
    //background color when clicked
    accordion.style.background = "skyblue";
    //displays new arrow when clicked
    accordion.replaceChild(arrowUp, arrowDown);
  }


}

