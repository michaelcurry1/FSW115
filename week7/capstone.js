const getData = async () => {
    let response;
    let response1;
    try{
        response = await axios.get("http://swapi.dev/api/people/1")
        response1 = await axios.get("http://swapi.dev/api/people/2")
        response2 = await axios.get("http://swapi.dev/api/people/3")
        response3 = await axios.get('http://api.bryanuniversity.edu/mike_curry/list/')

        //console.log(response3.data.length)

                for(let i = 0; i < response3.data.length; i++){
                    console.log(i)
                    var h1bu  = document.createElement("h1")
                    h1bu.textContent = response3.data[i]._id
                    document.body.appendChild(h1bu)

                    var button = document.createElement('button')
                    button.textContent = "delete"
                    document.body.appendChild(button)
                    button.addEventListener('click',async function(){
                        var id = response3.data[i]._id
                        await axios.delete('http://api.bryanuniversity.edu/mike_curry/list/'+ id)

                    })

                    // const updates ={
                    //     name:"THIS HAS BEEN UPDATED"
                    // }
                    
                    // axios.put('http://api.bryanuniversity.edu/mike_curry/list/', updates)
                    //     .then(res => console.log(res))
                    //     .catch(err => (console.log(err))

                    // const newTodo = {
                    //     name: "test4",
                    //     description:"test description 44444",
                    //     price: 44,
                    //     isComplete: false
                    // } 
                    
                    // const todoForm = document.todoForm
                    
                    // todoForm.addEventListener("submit", e =>{
                    //     e.preventDefault()
                    
                    //     const newTodo = {
                    //         name: todoForm.name.value,
                    //         description: todoForm.description.value,
                    //         price: todoForm.description.value,
                            
                    //     }
                        
                    //     axios.post("http://api.bryanuniversity.edu/mike_curry/list/",newTodo)
                    //     .then(res => console.log(res))
                    //     .catch(err => console.log(err))
                    
                    // });

                   
                }
        

   
        let h1 = document.createElement("h1")
        h1.textContent = response.data.name
        document.body.appendChild(h1)
        h1.style.color = "red"
        h1.style.fontSize = "50px"
        h1.style.paddingLeft = "25%"

        let h11 = document.createElement("h1")
        h11.textContent = response1.data.name
        document.body.appendChild(h11)
        h11.style.color = "blue"
        h11.style.fontSize = "50px"
        h11.style.paddingLeft = "25%"

        let h111 = document.createElement("h1")
        h111.textContent = response2.data.name
        document.body.appendChild(h111)
        h111.style.color = "green"
        h111.style.fontSize = "50px"
        h111.style.paddingLeft = "25%"
    }
    catch(error){
        console.log(error)
    }
}
getData()     