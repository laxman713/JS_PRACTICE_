
const ipMovie = document.getElementById("ip_movie");
const ipDir = document.getElementById("ip_dir");
const ipGen = document.getElementById("ip_gener");
const btn = document.getElementById("btn_movie");
const ul = document.getElementById("ul_movie");

const movie_array = JSON.parse(localStorage.getItem("movies")) || [];

    let editLi = null;
    let editId = null;

document.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/7310bccf9eb8415a9984de3260c1b284/movies")
     .then((res)=>{
        console.log(typeof(res.data));
        for(let i=0;i<res.data.length;i++){
                const li = document.createElement("li");
    const liText = document.createTextNode(res.data[i].title);
    li.id = res.data[i]._id;
    const del_btn = document.createElement("button");
    const delTxt = document.createTextNode("Delete");
        del_btn.className = "del_class";

    del_btn.appendChild(delTxt);
    const edit_btn = document.createElement("button");
    const editTxt = document.createTextNode("Edit");
    edit_btn.appendChild(editTxt);
        edit_btn.className = "edit_class";


    li.style.listStyleType = "none";
    li.appendChild(liText);
    li.appendChild(del_btn);
    li.appendChild(edit_btn);
    ul.appendChild(li);
        }
     })
     .catch((err)=>{
        console.log(err);
     })
})
btn.addEventListener("click", (event) => {
    event.preventDefault();
    const ip_movie = ipMovie.value.trim();

    const ip_dir = ipDir.value.trim();

    const ip_gen = ipGen.value.trim();

    if (ip_movie.trim() == "" || ip_dir.trim() == "" || ip_gen.trim() == "") {
        window.alert("Fields cannot be empty");
        return;
    }
      const setup_text = ip_movie + " | " + ip_dir + " | " + ip_gen;
    movie_array.push(setup_text);
    if(editLi!=null){
        axios.put(`https://crudcrud.com/api/7310bccf9eb8415a9984de3260c1b284/movies/${editId}`,{
            title:setup_text
        })
        .then(()=>{
            editLi.firstChild.textContent = setup_text;
            editId = null;
            editLi = null;
            ipMovie.value=" ";
            ipDir.value = " ";
            ipGen.value = " ";
           

        })
        .catch((err)=>{
            console.log(err);
        })
        return;
    }

  

    ipMovie.value = "";
     ipDir.value = "";
     ipGen.value = "";

    // creating li tag to show the details

    const li = document.createElement("li");
    const liText = document.createTextNode(setup_text);
    const del_btn = document.createElement("button");
    const delTxt = document.createTextNode("Delete");
    del_btn.appendChild(delTxt);
    del_btn.className = "del_class";
    const edit_btn = document.createElement("button");
    const editTxt = document.createTextNode("Edit");
    edit_btn.className = "edit_class";
    edit_btn.appendChild(editTxt);

    li.style.listStyleType = "none";
    li.className = "li_movie"
    li.appendChild(liText);
    li.appendChild(del_btn);
    li.appendChild(edit_btn);
    ul.appendChild(li);
    localStorage.setItem("movies", JSON.stringify(movie_array));

    axios.post("https://crudcrud.com/api/7310bccf9eb8415a9984de3260c1b284/movies",{
        title: setup_text
    })
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })

})

// Delete button implementation

ul.addEventListener("click",(event)=>{
    
if(event.target.className==="del_class"){
    const movieId = ul.firstChild.id;
    axios.delete(`https://crudcrud.com/api/7310bccf9eb8415a9984de3260c1b284/movies/${movieId}`)
    .then(()=>{
        const li = ul.firstChild;
        li.remove();
    })
    .catch((err)=>{
        console.log(err);
    })
}
})

ul.addEventListener("click",(event)=>{
    if(event.target.className==="edit_class"){
        // console.log("edit");
        const li = event.target.parentElement;
        const li1 = li.firstChild.textContent;
        const movieTxt = li1.split(" | ");
        console.log(movieTxt);
        ipMovie.value = movieTxt[0];
        ipDir.value = movieTxt[1];
        ipGen.value = movieTxt[2];
        
   editId = li.id;
   editLi = li;

    }
})

