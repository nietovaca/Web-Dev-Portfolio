
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

//with help from SkillForge YouTube tutorial: https://www.youtube.com/watch?v=1cAgfPb6a_8
$('.accordionItem').accordion({
  "animate":true,
  "collapsible":true,
  active: 1,
  "heightStyle": "content",
  "event": "mouseover"

});

//Nav with help from: https://www.w3schools.com
$('.topnav').click(function() {
   $('.topnav').not(this).find('#navlinks').hide();
   $(this).find('#navlinks').toggle();
});

//see about adding a timer for hiding
$('.ghost-button').on('click', () => {
  $('#contactContent').show()
});

});

// with help from https://perishablepress.com
//see if there's a way to adopt a function for each page
// const images = new Array()
// 			function preload() {
// 				for (i = 0; i < preload.arguments.length; i++) {
// 					images[i] = new Image()
// 					images[i].src = preload.arguments[i]
// 				}
// 			}
// 			preload(
// 				"IMG/IMG_0782.jpg",
// 				"IMG/IMG_0035.JPG",
// 				"IMG/IMG_3084.jpeg",
//         "IMG/IMG_3248.jpeg",
//         "IMG/IMGP4637.JPG",
//         "IMG/IMG_7010.JPG"
// 			)
