let li = document.querySelectorAll(".personal form ul li");
let onsChecked = []

li.forEach((e)=>{
    e.onclick = ()=>{
        let input = document.querySelector(`#${e.id} input`);
        if (onsChecked.includes(input.value)){
        }else{
            onsChecked.push(input.value);
        }

}})

export {onsChecked };