let prev=document.querySelector("#icon");
prev.addEventListener("click",()=>{
    const url="http://127.0.01.1:5500/Index.html";
    window.open(url);

})


function validateForm() {
    var Name = document.getElementById('Name:').value;
    var Email = document.getElementById('Email:').value;
    var Phone= document.getElementById('Phone:').value;

    if (Name === '' || Email === '' || Phone === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        // You can add code here to submit the form data to a server or perform other actions.
    }
}
