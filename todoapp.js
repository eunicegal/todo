function myfunction(){
    var element = document.body;
    element.classList.toggle("light-mode");

}
const add=()=>{
    const main = document.querySelector(".box");
    const box = document.querySelector(".box");
    box.style.display = "block";
    const check = document.createElement("input")
    check.setAttribute("type","radio")
    const you = document.querySelector(".order").value
    if(!you){
        return alert("Enter something")
    }
    const golf = document.createTextNode(you)
    const ulElement=document.createElement("ul");
    const liElement=document.createElement("li");
    const hrElement = document.createElement("hr")
    liElement.appendChild(check);
    liElement.appendChild(golf);
    liElement.style.color="orange";
    liElement.style.fontSize="15px";
    ulElement.appendChild(liElement);
    ulElement.appendChild(hrElement);
    document.querySelector(".order").value = ''
    main.appendChild(ulElement);

   
}
   