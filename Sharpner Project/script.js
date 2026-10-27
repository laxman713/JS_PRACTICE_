

const ipAmount = document.getElementById("ip_amount");
const ipDesc = document.getElementById("ip_desc");
const ipCat = document.getElementById("ip_cat")
const addBtn = document.getElementById("btn");
const ul = document.querySelector("ul");
const result = document.getElementById("result");


const expenseArr = JSON.parse(localStorage.getItem("expences"))||[]

//for editbtn
let editLi = null;
for(let i=0;i<expenseArr.length;i++){
  const li = document.createElement("li");
const litxt = document.createTextNode(expenseArr[i]);
li.appendChild(litxt);
li.className = "li_class";
ul.appendChild(li);

const del = document.createElement("button");
del.textContent = "Delete";
del.id = "del_btn";

const edit = document.createElement("button");
edit.textContent = "Edit";
edit.id = "edit_btn";
li.appendChild(del)
li.appendChild(edit);
result.style.display = "inline";


}

addBtn.addEventListener("click",(event)=>{
    event.preventDefault();
// console.log(event.target.value)
ipValue = ipAmount.value.trim();
descValue = ipDesc.value.trim();
catValue = ipCat.value;
  const text = ipValue+" - "+descValue+" - "+catValue;
//   console.log(text)
result.style.display = "inline";

if(ipValue==""||descValue==""||catValue=="Select"){
     window.alert("Empty fields are not allowed");
     result.style.display = "none";
     return;
}

if(editLi!==null){
      const oldText = editLi.firstChild.textContent;
    const index = expenseArr.indexOf(oldText);
  editLi.firstChild.textContent = text;
      if (index !== -1) {
        expenseArr[index] = text;
        localStorage.setItem("expences", JSON.stringify(expenseArr));
    }
  editLi = null;
  ipAmount.value = "";
ipDesc.value = "";
ipCat.value = "Select";
}
else{
const li = document.createElement("li");
const litxt = document.createTextNode(text);
li.appendChild(litxt);
li.className = "li_class";
ul.appendChild(li);

const del = document.createElement("button");
del.textContent = "Delete";
del.id = "del_btn";

const edit = document.createElement("button");
edit.textContent = "Edit";
edit.id = "edit_btn";
li.appendChild(del)
li.appendChild(edit);

expenseArr.push(text);
localStorage.setItem("expences",JSON.stringify(expenseArr));
ipAmount.value = "";
ipDesc.value ="";
ipCat.value = "Select";
console.log(li);
}
})
ipAmount.value = "";
ipDesc.value = "";
ipCat.value = "Select";

//Delete

ul.addEventListener("click",(event)=>{
if(event.target.id=="del_btn"){
    console.log(event.target);


  
    const liEle = event.target.parentElement;
    const li = liEle.firstChild.textContent;
     const index = expenseArr.indexOf(li)
     console.log(index);
     if(index!=-1){
       expenseArr.splice(index,1);
     }
       if(expenseArr.length == 0){
result.style.display = "none";
  }  

     localStorage.setItem("expences",JSON.stringify(expenseArr))
   liEle.remove();
}
})

//edit

ul.addEventListener("click",(event)=>{
  if(event.target.id=="edit_btn"){

     editLi = event.target.parentElement;
    const text = editLi.firstChild.textContent;
     const newTxt = text.split(" - ");
     console.log(newTxt);
     ipAmount.value=newTxt[0];
     ipDesc.value = newTxt[1];
     ipCat.value = newTxt[2]; 
  }
})
