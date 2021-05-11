var button2 = document.getElementById("button2")

function buttonClick2(){

    axios.get("https://swapi.dev/api/people/")
     .then(response =>{
         for(let i = 0;i < response.data.length; i++){
             console.log(response.data[i]._id)
             const h1 = document.createElement("h1")
             h1.textContent = response.data[i]._id
             document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))
}

button2.addEventListener("click",buttonClick2)