const formId = document.getElementById("formId");

formId.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(e.target.productName.value);/
const data = e.target.productName.value;
const obj = {
   productName : data
}

axios.post("http://localhost:1000"+"/api/products/post",obj)
  .then((res)=>{
console.log(res.data);
  })
  .catch(err=>{
    console.log(err)
  })


})


