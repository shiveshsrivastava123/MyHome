let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});
function getData()
{
   var name=0,Lname=5,email=0,MOBILENUM=0;
    name=document.getElementById("FNAME").value;
   console.log(name);
    Lname=document.getElementById("LNAME").value;
   console.log(Lname);
    email=document.getElementById("EMAIL").value;
   console.log(email);
    MOBILENUM=document.getElementById("MOBILENUM").value;
   console.log(MOBILENUM);
}


{/* <input type="text" id="FNAME" name="fname" required maxlength="50" placeholder="enter your Name" class="box">
<input type="text" id="LNAME"name="lname" required maxlength="20" placeholder="enter your LastName" class="box">
<input type="email" id="EMAIL"name="semail" required maxlength="50" placeholder="enter your Email" class="box">
<input type="number" id="MOBILENUM"name="moB" required maxlength="20" placeholder="enter your PhoneNumber" class="box"> */}
