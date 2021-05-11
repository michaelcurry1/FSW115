var button2 = document.getElementById("button2")


function buttonClick2(){
   
    axios.get("https://swapi.dev/api/people/")
     .then(response =>{
        console.log(response)
         for(let i = 0;i < response.data.results.length; i++){
             console.log(response.data.results[i].name)
             const h1 = document.createElement("h1")
             h1.textContent = response.data.results[i].name
             document.body.appendChild(h1)
            //  document.body.style.backgroundColor = "blue"
        }
    })
    .catch(error => console.log(error))
}

button2.addEventListener("click",buttonClick2)