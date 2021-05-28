// axios



axios.get("http://api.bryanuniversity.edu/mike_curry/list/")
.then(response => { console.log(response.data)
    for(var i = 0; i < response.data.length; i++){
        var h1 = document.createElement('h1')
        h1.textContent = response.data[i].name
       console.log(response.data.length)
     document.body.append(h1)
     console.log(response.data[i].isComplete)
     if(response.data[i].isComplete === true){
      h1.style.textDecoration = "line-through"
      h1.style.backgroundColor = "red"
     }
     else if(response.data[i].isComplete === false){
         console.log("hello")
     }
    }
    })
    .catch(err=> console.log(err))

    
// axios.get("http://api.bryanuniversity.edu/mikecurry/list/")
// .then(response => { console.log(response.data)
//     for(var i = 0; i < response.data.length; i++){
//         var h1 = document.createElement('h1')
//         h1.textContent = response.data[i].name
//        console.log(response.data.length)
//      document.body.append(h1)
//      console.log(response.data[i].isComplete)
//      if(response.data[i].isComplete === true){
//       h1.style.textDecoration = "line-through"
//       h1.style.backgroundColor = "red"
//      }
//      else if(response.data[i].isComplete === false){
//          console.log("hello")
//      }
//     }
//     })
//     .catch(err=> console.log(err))


//POST REQUEST......

const newTodo = {
    name: "test4",
    description:"test description 44444",
    price: 44,
    isComplete: false
} 

const todoForm = document.toDoForm

todoForm.addEventListener("submit", e =>{
    e.preventDefault()

    const newTodo = {
        name: todoForm.name.value,
        description: todoForm.description.value,
        price: todoForm.description.value,
        
    }
    
    axios.post("http://api.bryanuniversity.edu/mike_curry/list/",newTodo)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    // axios.post("http://swapi.dev/api/people/",newTodo)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

   

});

// PUT REQUEST

const updates ={
    name:"THIS HAS BEEN UPDATED"
}

axios.put("http://api.bryanuniversity.edu/mike_curry/list/5500401b-13f0-4322-adfc-af3684b0a5e0", updates)
    .then(res => console.log(res))
    .catch(err => console.log(err))



 // DELETE REQUEST
 
 axios.delete("http://api.bryanuniversity.edu/mike_curry/list/5500401b-13f0-4322-adfc-af3684b0a5e0")
    .then(res => console.log(res))
    .catch(err => console.log(err))