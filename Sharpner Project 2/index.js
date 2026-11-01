const ip_name = document.getElementById("ip_web");
 const ip_url = document.getElementById("ip_url");
 const btn = document.getElementById("web_btn");
 const ul = document.getElementById("li_parent");
const url = "https://crudcrud.com/api/a15ad012aaad41dd9e33f636e28e7cb4";
const webArray = JSON.parse(localStorage.getItem("web"))||[];
let editLi = null;
let editId = null;


document.addEventListener("DOMContentLoaded",(event)=>{
   event.preventDefault();
axios.get(`${url}/web`)
   .then((res)=>{
   // console.log(res.data[0].title);
   for(let i=0;i<res.data.length;i++){
      const tempText = res.data[i].title.split(" > ");
    const li = document.createElement("li");
const liTxt = document.createTextNode(tempText[0] + " > ");
li.id = res.data[i]._id;
const del = document.createElement("button");
del.textContent="Delete";
del.className = "del_btn";
const edit = document.createElement("button");
edit.textContent = "Edit";
edit.className="edit_btn";
const a = document.createElement("a");
a.target = 'blank';

a.href = tempText[1];
a.textContent = tempText[1];

li.className="li";
li.appendChild(liTxt);
li.appendChild(a);
li.appendChild(del);
li.appendChild(edit);
ul.appendChild(li);
   }
   })
   .catch((err)=>{
      console.log(err);
   })
})

 btn.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(event.target);
 const ipName = ip_name.value.trim();
 const ipUrl = ip_url.value.trim();
 const setup_text = ipName+" > ";
 const newText = setup_text + ipUrl;
 if(ipName==""||ipUrl==""){
    window.alert("Empty fields are not allowed");
    return;
 }

 if(editLi!==null){
   axios.put(`${url}/web/${editId}`,{
      title: newText
   })
   .then(()=>{
      
      editLi.firstChild.textContent = setup_text;
      editLi.childNodes[1].textContent = ipUrl;
      editLi.childNodes[1].href = ipUrl;
      editId = null;
      editLi = null;
ip_name.value= "";
ip_url.value="";

   })
   .catch((err)=>{
      console.log(err);
   })
   return;
 }

const li = document.createElement("li");
const liTxt = document.createTextNode(setup_text);
const del = document.createElement("button");
del.textContent="Delete";
del.className = "del_btn";
const edit = document.createElement("button");
edit.textContent = "Edit";
edit.className="edit_btn";
const a = document.createElement("a");
a.href = ipUrl;
a.textContent = ipUrl;
a.target = "blank";

li.appendChild(liTxt);
li.appendChild(a);
li.appendChild(del);
li.appendChild(edit);
ul.appendChild(li);

webArray.push(newText);
localStorage.setItem("web",JSON.stringify(webArray));
axios.post(`${url}/web`,{
   title: newText
})
.then((res)=>{
   li.id=res.data._id;
})
.catch((err)=>{
   console.log(err);
})

li.className="li";
ip_name.value= "";
ip_url.value="";

 })


 //Delete btn

 ul.addEventListener("click",(event)=>{
  if(event.target.className ==="del_btn"){
   console.log("clcked")
   const li = event.target.parentElement;
   const id = li.id;
   const liChild = li.firstChild.textContent;
   axios.delete(`${url}/web/${id}`)
     .then(()=>{
      li.remove();
     })
   .catch((err)=>{
      console.log(err);
   })
  }
 })


 //Edit button
 ul.addEventListener("click",(event)=>{
  if(event.target.className ==="edit_btn"){
   console.log("clicked");

   const li = event.target.parentElement;
   const liText = li.firstChild.textContent;
   const newText = liText.split(" > ");
   console.log(li);
   ip_name.value= newText[0];
ip_url.value=li.childNodes[1].textContent;
console.log(ip_url.value);
editLi = li;
editId = li.id;

 } });

