var button1 = document.getElementById("button1")


function buttonClick1(){
    axios.get("http://api.bryanuniversity.edu/mike_curry/list/")
    .then(response =>{
        for(let i = 0;i < response.data.length; i++){
            console.log(response.data[i]._id)
            const h1 = document.createElement("h1")
            h1.textContent = response.data[i]._id
            document.body.appendChild(h1)
         //   document.body.style.backgroundColor = "red"
        }
    }) 
    .catch(error => console.log(error))
}

button1.addEventListener('click',buttonClick1)