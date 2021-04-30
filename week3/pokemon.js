const xhr = new XMLHttpRequest()

xhr.open("GET","https://pokeapi.co/api/v2/", true)
xhr.send()

xhr.onreadystate = function(){
    if(xhr.readyState === 4 && xhr.status ===200){
        console.log(xhr.responseText)
        let data = JSON.parse(xhr.responseText)
        console.log(data)
    }else if(xhr.readyState === 4 && xhr.status !== 200){
      console.log(xhr.responseText)  
    }
}

function showData(data){
    for(let i = 0; i , data.length; i++){
        const character = document.createElement('h1')
        character.textContent = data[i].name
        document.body.appendChild(character)
    }
}