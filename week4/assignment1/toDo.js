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

  