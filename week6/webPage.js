const getData = async () => {
    let response;
    let response1;
    try{
        response = await axios.get("http://swapi.dev/api/people/1")
        response1 = await axios.get("http://swapi.dev/api/people/2")
        response2 = await axios.get("http://swapi.dev/api/people/3")

        console.log(response)

        let name = response.data.name
        let height = response.data.height
        let gender = response.data.gender

        let name1 = response1.data.name
        let height1 = response1.data.height
        let gender1 = response1.data.gender

        let name2 = response2.data.name
        let height2 = response2.data.height
        let gender2 = response2.data.gende

        // console.log(name)
        // console.log(height)
        // console.log(gender)

        // console.log(name1)
        // console.log(height1)
        // console.log(gender1)

        // console.log(name2)
        // console.log(height2)
        // console.log(gender2)

        let h1 = document.createElement("h1")
        h1.textContent = name
        document.body.appendChild(h1)
        h1.style.color = "red"
        h1.style.fontSize = "50px"
        h1.style.paddingLeft = "25%"

        let h11 = document.createElement("h1")
        h11.textContent = name1
        document.body.appendChild(h11)
        h11.style.color = "blue"
        h11.style.fontSize = "50px"
        h11.style.paddingLeft = "25%"

        let h111 = document.createElement("h1")
        h111.textContent = name2
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