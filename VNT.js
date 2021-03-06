//see readme.txt for full list of references.

//site counter created with help from codefoxx YouTube
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
};

$(()=>{

//Accordion Div with help from SkillForge YouTube tutorial (see readme.txt for citation)
$('.accordionItem').accordion({
  "animate":true,
  "collapsible":true,
  active: 1,
  "heightStyle": "content",
});

//Hamburger Nav referenced w3schools.com
$('.topnav').click(function() {
   $('.topnav').not(this).find('#navlinks').hide();
   $(this).find('#navlinks').toggle("slow");
});

//Contact Me button
$('.ghost-button').on('click', () => {
  $('#contactContent').fadeToggle()
});

//Home Button
$(".homeButton").append("<button>").html('Home').addClass('ghost-button').attr('id', 'homeBtn')
$('#homeBtn').on('click' , () => {
  location.href='https://vacathrower.netlify.app/'
});
$(".homeButton").css('display', 'flex').css('justify-content', 'center').css("align-content", "center")

//Download Resume Button
$('#downloadPDF').on('click' , (e) => {
  e.preventDefault();
   window.location.href = 'https://docs.google.com/document/d/e/2PACX-1vT-KoDmzj7x78LlWgXvu1KrNnbWOgcbCqJNCZ4_0hkHN_uMYurc1sfIAzZwTRhrIGt4Dn-qxkhL2JFt/pub'
});
});
