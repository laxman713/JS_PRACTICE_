
const input = document.getElementById("fruit_input");
const btn = document.getElementById("fruit_btn");
const ul = document.getElementById("fruit_ulList");

let editLi = null;
let fruits_array =JSON.parse(localStorage.getItem("fruits")) || [];
for (let i = 0; i < fruits_array.length; i++) {
    console.log("Index:", i, "Fruit:", fruits_array[i]);
}

for (let i = 0; i < fruits_array.length; i++) {
    console.log("Restoring fruit:", fruits_array[i]);
        const li = document.createElement("li");
    const litext = document.createTextNode(fruits_array[i]);

    const dle = document.createElement("button");
    dle.className = "delete_btn";
    dle.textContent = "Delete";
    dle.style.marginLeft = "20px";
   


    const edit = document.createElement("button");
    edit.textContent = "edit";
    edit.style.marginLeft = "20px";
    edit.className = "edit_btn";


  
    li.appendChild(litext);
    ul.appendChild(li);
    li.appendChild(dle);
    li.appendChild(edit);
    li.className = "fruit_listItem";
    li.style.listStyleType = "none";
    input.value = "";
    


   
li.style.border = "1px solid black";
li.style.padding = "10px";
li.style.marginBottom = "5px";
}
btn.addEventListener("click",function(event){
    // console.log(input.value);
    let ipValue = input.value.trim();
      if (ipValue === "" || /[0-9]/.test(ipValue)) {
    window.alert("Cannot enter empty input or numbers");
    input.value = "";
    return;
}
 if(editLi!=null){
        editLi.firstChild.textContent = ipValue;
        editLi = null;
        btn.textContent = "Add Fruit";
        input.value="";
    }
  else{
    const li = document.createElement("li");
    const litext = document.createTextNode(ipValue);
    fruits_array.push(ipValue);
    localStorage.setItem("fruits",JSON.stringify(fruits_array));
    const dle = document.createElement("button");
    dle.className = "delete_btn";
    dle.textContent = "Delete";
    dle.style.marginLeft = "20px";
   


    const edit = document.createElement("button");
    edit.textContent = "edit";
    edit.style.marginLeft = "20px";
    edit.className = "edit_btn";


  
    li.appendChild(litext);
    ul.appendChild(li);
    li.appendChild(dle);
    li.appendChild(edit);
    li.className = "fruit_listItem";
    li.style.listStyleType = "none";
    input.value = "";
    


   
li.style.border = "1px solid black";
li.style.padding = "10px";
li.style.marginBottom = "5px";
    }
})



ul.addEventListener("click",function(event){
    console.log(event.target);
    if(event.target.className=="delete_btn"){
        event.target.parentElement.remove();
    }
})



ul.addEventListener("click",function(event){
    console.log(event.target);
    if(event.target.className=="edit_btn"){
       editLi = event.target.parentElement;

        input.value = editLi.firstChild.textContent;
        btn.textContent = "Update Fruit";
        input.focus();

      
    }
})
