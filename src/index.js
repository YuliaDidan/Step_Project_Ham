
import $ from "jquery";

// import "jquery-ui";

import slick from 'slick-carousel';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const d = document;
  const page = d.getElementById('homepage') || d.getElementById('about');
  const id = page.getAttribute('id');

  switch (id) {
    case 'homepage': {
      console.log('Hello, from Homepage');
      break;
    }
    case 'about': {
      console.log('Hello, from About page');
      break;
    }
    default: {
      // ...
    }
  }
}

$(document).ready(function() {
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
        $(tabid).show();
        
    });
    
    $(".services__link:eq(0)").click();
    
    let selectedWorksLink = $(`.works__menu-item-link`);
    
    selectedWorksLink.on('click', function(evt){
        evt.preventDefault();
        $(`.works__gallery`).hide();
                  
        if (selectedWorksLink.hasClass("works__menu-item-link--selected")){
            
            selectedWorksLink.removeClass("works__menu-item-link--selected");
        }
        $(this).toggleClass(`works__menu-item-link--selected`);
        let tabid = $(this).attr(`href`);    
        $(tabid).show();
        
    });
    
    $(".works__menu-item-link:eq(0)").click();

    $(function(){

        let worksBtn = $(`.works__btn`);                 
        let itemSize=12;
        let maxGalleryLength = 36;
        let count = 0;
        
        function addImagesFromResource() {       
            let arrayElements = [];
            for (let i=0; i<itemSize; i++){
                let elem = $(`<div class="col-3"><img src="https://picsum.photos/200/?image=${count*2}" alt="picture" class="works__img"></div>`);
                // let imageNum = Math.floor((Math.random() * 11) + 1);
                // let elem = $(`<div class="col-3"><img src="./img/works/graphic_design/gd${count}.jpg" alt="picture" class="works__img"></div>`);
                // let elem = $(`<img>`);
                // elem.attr('src', `https://picsum.photos/200/300/?image=${count*3}`)
                // .attr(`alt`, `images${count + 1}`)
                // .addClass(`works__img`)
                // .wrap(`<div class="col-3"></div>`)
                // .parent()
                // // .addClass(`col-3`)
                elem.on(`click`, imageClick);
                arrayElements.push(elem); 
                count++;                      
            }  
            if(count === maxGalleryLength){
                worksBtn.hide();
                console.log(maxGalleryLength.length);
            }

            $(`.works__gallery--all`).append(arrayElements);
            }

            function imageClick() { 
                $(`previewImage`).fadeOut(1000);   
                let clonedImage =  $(this).clone();       
                clonedImage.addClass(`previewImage`)
                .css({
                    'position': 'absolute',   
                    'top': '33.3%',
                    // 'bottom': '33%',
                    'left': '0',
                    'right': '0',
                    'margin': 'auto',
                    'width': '150%'
                }); 
                clonedImage.hide();   
                clonedImage.on(`click`, hideImage);
                $(`.works__gallery--all`).append(clonedImage);
                clonedImage.fadeIn(3000);
            }
            function hideImage() {
                $(this).fadeOut(1000);
            }
            
            function goLoader() {    
                let loader = $(`.holder`)     
                loader.fadeIn(5000, function() {   
                    loader.fadeOut();
                });    
            }
            
            function addImagesDelay() {
                goLoader();
                window.setTimeout(addImagesFromResource, 5000);
            }
            
            addImagesFromResource();    
            
            worksBtn.on(`click`, addImagesDelay);
    });

    $(function(){

    function addImagesfromFolder(itemSize, container, folderName, fileName) {        
        // let maxGalleryLength = 12;
        let count = 0;    
        let arrayElements = [];             
        for (let i=0; i<itemSize; i++){
            let elem = $(`<div class="col-3"><img src="./img/works/${folderName}/${fileName}${count+1}.jpg" alt="picture" class="works__img"></div>`);
            // elem.on(`click`, imageClick);
            arrayElements.push(elem); 
            count++;       
        }  
        // if(count === maxGalleryLength){
        //     worksBtn.hide();
        // }
        $(container).append(arrayElements);       
        
    }

    addImagesfromFolder( 12, `.works__gallery--graphic`, `graphic_design`, `gd`); 
    addImagesfromFolder( 8, `.works__gallery--web`, `web_design`, `wd`); 
    addImagesfromFolder( 12, `.works__gallery--landing`, `landing_pages`, `lp`); 
    addImagesfromFolder( 10, `.works__gallery--wordpress`, `wordpress`, `wordpress`);  
    
})


let testimonials = $('.testimonials__slider-list');
    if (testimonials.length) {
        // console.log(testimonials.length)
        testimonials.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonials__slider-nav-list'
      });
  
  
      $('.testimonials__slider-nav-list').slick({
        centerMode: true,
        centerPadding: `80px`,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonials__slider-list',        
        swipeToSlide: true,
        focusOnSelect: true,
        prevArrow: $('.testimonials__slider-btn--prev'),
        nextArrow: $('.testimonials__slider-btn--next')        
      });
    }



})
