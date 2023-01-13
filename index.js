
// this part for detecting click process----------------------------


var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i =0; i<numberOfDrums; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",handleClick) // addEvenetListener is a highorder function
   function handleClick()
   {
     // alert("i got clicked!!");

     // this.style.color="black";
     var ButtoninnerHtml = this.innerHTML;
     makeSound( ButtoninnerHtml); // function calling && passing value the innerHTML(only letter part) of button


     buttonAnimation( ButtoninnerHtml);

    }

}

// document.querySelectorAll("button")[0].addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);
// when click detected then function handle click executed;


// this part for keyboard press process---------------------------------


document.addEventListener("keypress", function(event)
{
makeSound(event.key); // calling function,ans paasing value of keyy

buttonAnimation(event.key);

});
// separate function
function makeSound(key)
{

  switch (key) {
    case "a":
      var a = new Audio('sounds/Apnaa Mujhe Tu Lagaa Lyrical _ 1920 Evil Returns _ Aftab Shivdasani, Sonu Nigam.mp3');
      a.play();
   break;

   case "b":
     var b = new Audio('sounds/bollywood_STK - Bewajah.mp3');
     b.play();
  break;

  case "c":
    var c = new Audio('Challa.mp3');
    c.play();
 break;

 case "d":
   var d = new Audio('sounds/Dil Ibaadat Audio Song - Tum Mile_Emraan Hashmi,Soha Ali Khan_Pritam_KK_Sayeed Quadri.mp3');
   d.play();
break;

case "l":
  var l = new Audio('sounds/Lyrical_ Labon Ko _ Bhool Bhulaiyaa _ Pritam _ K.K._ Akshay Kumar, Shiney Ahuja, Vidya Balan.mp3');
  l.play();
break;

case "f":
 var f = new Audio('sounds/bollywood_Fanaa 2006 - Chand Sifarish.mp3');
 f.play();
break;

case "g":
var g = new Audio('sounds/old_Ghajini - Guzarish.mp3');
g.play();
break;

    default: console.log(ButtoninnerHtml);

  }

}


function buttonAnimation(currentKey)
{
 var targetButton = document.querySelector("." + currentKey);
 targetButton.classList.add("pressed");

 setTimeout(function(){
   targetButton.classList.remove("pressed");
 }, 100);
}
