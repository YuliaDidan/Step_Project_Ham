
// import $ from "jquery";

// import "jquery-ui";

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

let worksBtn = $(`.works__btn`);

 function goLoader () {    
    let loader = $(`.holder`)
    // console.log(loader.length);
    loader.show(4000, function() {        
        // loader.css(`display`, `none`);
        loader.hide();
    });
}

// function addImages(itemSize=12) {
//     let arrayElements = [];
//     for (let i=0; i<itemSize; i++){
//         // let elem = $(`<img src="./img/works/graphic_design/gd${i+1}.jpg" alt="picture" class="works__img">`);
//         let elem = $(`<img>`);
//         elem.attr('src', `./img/works/graphic_design/gd${i+1}.jpg`);
//         elem.attr(`alt`, `images${i +1}`);
//         arrayElements.push(elem);        
//     }
//     $(`.works__img-container`).appendChild(arrayElements);
// }

let itemSize=12;
let maxGalleryLength = 36;
let count = 0;

// function addImages() {   
//     let arrayElements = [];
//     for (let i=0; i<itemSize; i++){
//         // let elem = $(`<img src="./img/works/graphic_design/gd${count%itemSize}.jpg" alt="picture" class="works__img">`);
//         let elem = $(`<img>`);
//         elem.attr('src', `https://picsum.photos/200/300/?image=${count*3}`)
//         .attr(`alt`, `images${count + 1}`)
//         .addClass(`works__img`)
//         .wrap(`<div class="col-3"></div>`)
//         .parent()
//         // .addClass(`col-3`)
//         .on(`click`, imageClick);
//         arrayElements.push(elem); 
//         count++;       
//     }  
//     if(count === maxGalleryLength){
//         worksBtn.hide();
//     }
//     $(`.works__img-container`).append(arrayElements);
// }

function addImages() {   
    let arrayElements = [];
    for (let i=0; i<itemSize; i++){
        let elem = $(`<div class="col-3"><img src="https://picsum.photos/200/200/?image=${count*3}" alt="picture" class="works__img"></div>`);
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
    }
    $(`.works__img-container`).append(arrayElements);
}

function imageClick() {    
    $(this).attr(`alt`);
    // console.log($(this).attr(`alt`));
    // $(`previewImage`).fadeOut(1000);   
    let clonedImage =  $(this).clone(); 
    console.log(clonedImage.length);   
    clonedImage.addClass(`previewImage`)
    .css(`position`, `absolute`)
    .css(`top`, `30%`)
    .css(`left`, `40%`)
    // .css(`margin`, `auto`)
    .css(`width`, `100px`);
    // .css(`height`, `100px`);
    clonedImage.hide();
    clonedImage.on(`click`, hideImage);
    $(`.works__img-container`).append(clonedImage);
    clonedImage.fadeIn(3000);
}

function hideImage() {
    $(this).fadeOut(1000);
}

addImages();


// let worksBtn = $(`.works__btn`);

// console.log( worksBtn.length);

worksBtn.on(`click`, addImages);





