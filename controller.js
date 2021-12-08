window.addEventListener('load', bindEvents);
function bindEvents(){
    let buttons = document.querySelectorAll('.btn-secondary');
    buttons.forEach(button=>button.addEventListener('click',writeOnTextBox));
    let equalButton = document.querySelector('.btn-primary');
    equalButton.addEventListener('click',()=>{
        // let result =compute(document.querySelector('#t1').value);
        // document.querySelector('#t1').value = result;
        document.querySelector('#t1').value = compute(document.querySelector('#t1').value);
    });
}

function writeOnTextBox(){
    let txtBoxValue = document.querySelector('#t1').value ;
    if(txtBoxValue === "0"){
        document.querySelector('#t1').value = this.innerText;
    }
    else{
        document.querySelector('#t1').value = txtBoxValue + this.innerText;
    }

}