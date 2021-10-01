const jokeText = document.getElementById('joke');
const jokebtn = document.getElementById('random');

jokebtn.addEventListener('click', generatejokes)

// generatejokes()

async function generatejokes(){
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Any"
    )
    const data = await res.json();
    console.log(data)
    let joke = ""
    // if(data.joke == undefined){
    //     joke = `${data.setup} <br/> ${data.delivery}`
    // }
    // else{
        joke = data.joke
    // }
    jokeText.innerHTML = joke
}