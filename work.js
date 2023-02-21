// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let n=document.getElementById("siteNameInput");
let u=document.getElementById("siteUrlInput");
let n1=document.getElementById("siteNameErrMsg");
let u1=document.getElementById("siteUrlErrMsg");
let sub=document.getElementById("submitBtn");
let bl=document.getElementById("bookmarksList");
n.addEventListener("change",function(){
    if(n.value===""){
        n1.textContent="Required*";
    }
});
u.addEventListener("change",function(){
    if(u.value===""){
        u1.textContent="Required*";
    }
});
sub.addEventListener("submit",function(event){
    event.preventDefault();
});
let c=0;
function display(i,j){
    let l=document.createElement("li");
    l.id="li"+c;
    bl.appendChild(l);
    let l1=document.getElementById(l.id);
    let p=document.createElement("p");
    p.textContent=i;
    l1.appendChild(p);
    let a=document.createElement("a");
    a.href=j;
    a.textContent=j;
    a.target="_blank";
    l1.appendChild(a);
    c=c+1;
    
}
sub.addEventListener("click",function(event){
    event.preventDefault();
    if(n.value===""){
        n1.textContent="Required*";
    }
    if(u.value===""){
        u1.textContent="Required*";
    }
    if(n.value!=="" && u.value!==""){
        display(n.value,u.value);
    }
})
