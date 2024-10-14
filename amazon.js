const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelectorAll('.control_prev');
const next_btn= document.querySelectorAll('.control_next');

let n=0;

function changeSlide(){
    for(let i=0; i< imgs.length;i++){
        imgs[i].Style.display='none';
    
    }
    imgs[n].Style.display='block';
}
changeSlide();

const scrollContainer =  document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
    }




