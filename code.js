let text = document.getElementById("text");
let outcome = document.getElementById("outcome");
let select = document.getElementById("select");

text.addEventListener("input", ()=>{
    theResult();
});
select.addEventListener("change", ()=>{
    theResult();  
})
function theResult(){
    if(select.value=="encoding"){
      outcome.value = window.btoa(text.value);
    }else{
        outcome.value = window.atob(text.value);
    }
}