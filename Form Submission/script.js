const form = document.getElementById('myForm');
const scriptURL = 'https://script.google.com/macros/s/AKfycbzUR2-rzpv0IjySHtguBSSBnBVEjTIZ2NntMkavO1IqvUqlbGDFGdQK9c3Ye50e3Tk/exec';

let name = document.getElementById('name');
let message = document.getElementById('message');
let email = document.getElementById('email');
label_name = document.getElementById('label_name');
label_message = document.getElementById('label_message');
label_email = document.getElementById('label_email');


form.addEventListener('submit', e =>{
    e.preventDefault()

    validateData();
})

function validateData(){
    let isValid = true;

    if(name.value === ''){
        label_name.innerText = 'Please enter your name correctly';
        label_name.style.color = 'red';
        name.style.borderColor = 'red';
        isValid = 'false';
    }
    else{
        label_name.innerText = 'Name';
        label_name.style.color = 'black';
        name.style.borderColor = 'lightgrey';

    }

    if(email.value === ''){
        label_email.innerText = 'Plese enter Email';
        label_email.style.color = 'red';
        email.style.borderColor = 'red';
        isValid = false;
    }
    else{
        label_email.innerText = 'Email';
        label_email.style.color = 'black';
        email.style.borderColor = 'lightgrey';

    }

    if(message.value ===''){
        label_message.innerText = 'Please fill in the box';
        label_message.style.color = 'red';
        message.style.borderColor = 'red';
        isValid = false;
    }
    else{
        label_message.innerText = "Message";
        label_message.style.color = 'black';
        message.style.borderColor = 'lightgrey';
    }
    if(isValid === true){
        fetch(scriptURL, { method: 'POST', body: JSON.stringify(Object.fromEntries(new FormData(form))) })
        .then(response => {
            console.log('Success!', response);
            window.open('newPage.html',"_self");       
        })
        .catch(error => console.error('Error!', error.message));
    }


}