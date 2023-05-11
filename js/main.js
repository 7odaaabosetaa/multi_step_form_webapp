
/* let plan = document.querySelectorAll(".container .personal ul.plan li");
   let selectedPlan = "";

 plan.forEach((e)=>{
 ;
      e.onclick=()=>{
         plan.forEach((es)=>{
            es.classList.remove("active")
         })
         e.classList.toggle("active");
         selectedPlan = e.id;
   }})*/
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');


let nextbtn = document.querySelector(".next.index");

nextbtn.onclick = (e) => {
   if (name.value !== "" && email.value !== "" && phone.value !== "") {
 null

   } else {
      e.preventDefault();
      
      document.querySelector(".alert").style.display = "block";
      document.querySelector(".overlay").style.display = "block";
      document.body.onclick = (f) => {
         if (f.target.className !== "next index") {
            document.querySelector(".alert").style.display = "none";
            document.querySelector(".overlay").style.display = "none";
         }
      }
   }

}