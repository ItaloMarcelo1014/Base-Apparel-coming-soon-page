function validation() {
    let form  = document.getElementById("form");
    let email  = document.getElementById("email").value;
    let text  = document.getElementById("text");
    let box = document.getElementById("boxcolor");
   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   if ( email.match(pattern)){
       form.classList.add("valid");
       form.classList.remove("invalid");
       text.innerHTML = 'Your Email Address is Valid.';
       text.style.color = "#00ff00";
       box.style.border = "solid 2px #00ff00";
   }else{
       form.classList.remove("valid");
       form.classList.add("invalid");
       text.innerHTML = 'please Enter Valid Email Address';
       text.style.color = "#ff0000";
       box.style.border = "solid 2px #ff0000";
   }
   if( email == ""){
       form.classList.remove("valid");
       form.classList.remove("invalid");
       text.innerHTML = '';
       text.style.color = "#00ff00";
       box.style.border = "solid 2px  #facecf";
   }
}

