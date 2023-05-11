let plan = document.querySelectorAll(".container .personal ul.plan li");
   let selectedPlan = "";

plan.forEach((e)=>{
      // ;
      e.onclick=()=>{
         plan.forEach((es)=>{
            es.classList.remove("active")
         })
         e.classList.toggle("active");
         selectedPlan = e.id;
   }})
   