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
        item.scrollLeft += evt.delta;
    });
    }


    document.getElementById('payment-form').addEventListener('submit', function (event) {
        event.preventDefault();
    
        // Simulate payment processing
        const cardName = document.getElementById('card-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
    
        if (cardName && cardNumber && expiryDate && cvv) {
            // Simulate success message
            document.getElementById('payment-message').innerText = 'Payment successful! Thank you for your purchase.';
        } else {
            document.getElementById('payment-message').innerText = 'Please fill in all the required fields.';
        }


    });


