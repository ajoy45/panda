document.getElementById('catagory-headline').addEventListener('click',function(){
    const heading = document.getElementById('catagory-headline');
    heading.style.color='red';
    heading.style.textAlign='center';
});

document.getElementById('shoe-heading').addEventListener('mouseover',function(){
    const headingOfShoe = document.getElementById('shoe-heading');
    headingOfShoe.style.fontSize='80px';
    headingOfShoe.style.textAlign='center';
    headingOfShoe.style.color='Magenta	';
});

document.getElementById('backpac-heading').addEventListener('mouseover',function(){
    const headingOfbackpack = document.getElementById('backpac-heading');
    headingOfbackpack.style.fontSize='80px';
    headingOfbackpack.style.textAlign='center';
    headingOfbackpack.style.color='Purple';
});
// input section bg
document.getElementById('bg').addEventListener('mouseover',function(){
    const container23 =document.getElementById('bg');
    container23.style.backgroundColor='	Aquamarine';
});
// input section bg
document.getElementById('bg').addEventListener('mouseout',function(){
    const container23 =document.getElementById('bg');
    container23.style.backgroundColor='Pink';
});
// input field ee javascript
            let input = document.getElementById('input-id');
            let button = document.getElementById('btn-input');
            button.disabled = true; //setting button state to disabled
 document.getElementById('input-id').addEventListener('change',function(){
        
        if (document.getElementById('input-id').value === " ") {
            button.disabled = true; //button remains disabled
        } else if(document.getElementById('input-id').value =="gmail"){
            button.disabled =false; //button is enabled
        }

 });
