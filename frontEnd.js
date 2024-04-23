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

   $.get("http://localhost:5555/form_submit",{"name":name,"lname":Lname,"email":email,"mobno":MOBILENUM},(res) => {
      console.log(res);
  })

//    var express = require('express');
// var cors=require('cors');
// var mongoDB = require("./mongodb.js");

// var app = express();

// app.use(cors({origin:true,credentials: true}));



// app.get("/form_submit", async function(req,res) {
//     console.log(req.query);
//     var insertRes = await mongoDB.insertData({name:req.query.name});
//     res.send(insertRes);
// })

// var server = app.listen(5000, function () {
//    console.log("Express App running at http://127.0.0.1:5000/");
// })
}

