let nextdom = document.getElementById('next');
let prevdom =document.getElementById('prev');
let carouseldom = document.querySelector('.carousel');
let listitemdom = document.querySelector('.carousel .list');
let thumbnaildom = document.querySelector('.carousel .thumbnail');
let rightarrow = document.querySelector(".fa-arrow-right");
let leftarrow = document.querySelector(".fa-arrow-left");
let silder = document.querySelector('.slider');
let image = document.querySelectorAll('.equipimage');

let slidenumber =1 ;
const lenght = image.length;

const nextslide = () =>{
    silder.style.transform=`translateX(-${slidenumber*600}px)`;
        slidenumber++;
}
const getFirstslide=()=>{
    silder.style.transform=`translateX(0px)`;
        slidenumber=1;
}

rightarrow.addEventListener('click' , ()=>{
    if(slidenumber<lenght){
        nextslide();
    }else{
     getFirstslide();
    }
    
} )
const prevslide = ()=>{
    silder.style.transform=`translateX(-${(slidenumber-1)*600}px)`;
    slidenumber--;

}
const getLastslide=()=>{
    silder.style.transform=`translateX(-${(lenght-1)*600}px)`;
    slidenumber=lenght;

}
leftarrow.addEventListener('click' , ()=>{
    if(slidenumber>1){
       prevslide();
    }else{
     getLastslide();
    }
    
} )






























nextdom.onclick=function(){
    showslider('next');
}
prevdom.onclick= function()
{
   showslider('prev')
}

function showslider(type){
    let itemslider = document.querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listitemdom.appendChild(itemslider[0]);
        thumbnaildom.appendChild(itemthumbnail[0]);
        carouseldom.classList.add('next');
    }
    else{
        let positionlastitem = itemslider.length-1;
        listitemdom.prepend(itemslider[positionlastitem]);
        thumbnaildom.prepend(itemthumbnail[positionlastitem])
        
    }
}

















