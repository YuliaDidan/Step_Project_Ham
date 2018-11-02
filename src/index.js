
import $ from "jquery";

// import "jquery-ui";

// $( "#tabs" ).tabs();



// $( "#tabs2" ).tabs();


let selectedItem = $(`.services__item`);

selectedItem.click(function(evt){   
    evt.preventDefault();          
    if (selectedItem.hasClass("services__item--selected")){
        
        selectedItem.removeClass("services__item--selected");
    }
    $(this).toggleClass(`services__item--selected`);
    

});

$(".services__item:eq(0)").click();

let selectedLink = $(`.services__link`);

selectedLink.on('click', function(evt){
    evt.preventDefault();
    $(`.services__wrap`).hide();
              
    if (selectedLink.hasClass("services__link--selected")){
        
        selectedLink.removeClass("services__link--selected");
    }
    $(this).toggleClass(`services__link--selected`);
    let tabid = $(this).attr(`href`);
    console.log(tabid);
    $(tabid).show();
    
});

$(".services__link:eq(0)").click();


$("button").on('click', function () {
    $(".content").hide();
    $("button.selected").removeClass('selected');
    $(this).toggleClass('selected')
    let tabid = $(this).attr('data-tab');
    $("#" + tabid).show();
})

$("button:eq(1)").click();





// document.addEventListener('DOMContentLoaded', init);

// function init() {
//   const d = document;
//   const page = d.getElementById('homepage') || d.getElementById('about');
//   const id = page.getAttribute('id');

//   switch (id) {
//     case 'homepage': {
//       console.log('Hello, from Homepage');
//       break;
//     }
//     case 'about': {
//       console.log('Hello, from About page');
//       break;
//     }
//     default: {
//       // ...
//     }
//   }
// }
