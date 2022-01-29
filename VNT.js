
//Ghost button - not functional
// let coll = document.getElementsByClassName("ghost-button");
// let i;
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

$(()=>{

$('.accordionItem').accordion({
  "animate":true,
  "collapsible":true
});

//top nav function
$('.topnav').click(function() {
   $('.topnav').not(this).find('#navlinks').hide();
   $(this).find('#navlinks').toggle();
});

// $('.ghost-button').accordion({
//   "animate": true,
//   "collapsible": true
// })
$('.ghost-button').on('click', () => {
  $('#contactContent').show()
});

});

//
// const $accordionTitles = $('.accordionTitle')
// $accordionTitles.each((accordionTitle) => {
//   accordionTitle.on('click', () => {
//     accordionTitle.toggleClass('open')
//   })
// })

// const $nav = $('#navlinks');
// $nav.on('click', () => {
//   if ($nav.css('display', 'block')) {
//       $nav.css('display', 'none')
//   } else {
//     $nav.css('display', 'block')
//   }
// } );

//Nav with help from: https://www.w3schools.com
            // function openNav(){
            //   const nav = $('#navlinks');
            //   if (nav.style.display === "block") {
            //     nav.style.display = "none";
            //   } else {
            //     nav.style.display = "block";
            //   }
            // }
// function openDiv() {
//   let div = document.getElementById("content");
//   if (div.style.display === "block") {
//     div.style.display = "none";
//   } else {
//     div.style.display = "block"
//   }
// }

//with help from https://www.webhostingsecretrevealed.net
// let images = new Array();
// let preloadImages = () => {
//   for (let i=0; i < preloadImages.arguments.length; i++){
//        images[i] = new Image();
//       images[i].src = preloadImages.arguments[i];
//   }
// }
// preloadImages("/Users/vanessa_nieto/Public/Portfolio/Home/IMG/IMG_0782.jpg", "/Users/vanessa_nieto/Public/Portfolio/Home/IMG/IMG_0035.JPG", "/Users/vanessa_nieto/Public/Portfolio/Home/IMG/IMG_3084.jpeg", "/Users/vanessa_nieto/Public/Portfolio/Home/IMG/IMG_3248.jpeg" , "/Users/vanessa_nieto/Public/Portfolio/Home/IMG/IMGP4637.JPG" , "/Users/vanessa_nieto/Public/Portfolio/Home/IMG/IMG_7010.JPG");
////
