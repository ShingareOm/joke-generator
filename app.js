const jokeText = document.getElementById('joke');
const jokebtn = document.getElementById('random');
const jokebtn1 = document.getElementById('programming');
const jokebtn2 = document.getElementById('misc');
const jokebtn3 = document.getElementById('dark');
const jokebtn4 = document.getElementById('pun');
const jokebtn5 = document.getElementById('christmas');

jokebtn.addEventListener('click', generatejokes)
jokebtn1.addEventListener('click', generatejokes1)
jokebtn2.addEventListener('click', generatejokes2)
jokebtn3.addEventListener('click', generatejokes3)
jokebtn4.addEventListener('click', generatejokes4)
jokebtn5.addEventListener('click', generatejokes5)


// generatejokes()

async function generatejokes(){
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    const data = await res.json();
    console.log(data)
    let joke = ""
    if(data.joke == undefined){
        joke = `${data.setup} <br/> ${data.delivery}`
    }
    else{
        joke = data.joke
    }
    jokeText.innerHTML = joke
}

async function generatejokes1(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
    const data = await res.json();
    console.log(data)
    let joke =''
    if(data.joke ==undefined){
        joke =`${data.setup} <br/> ${data.delivery}`
    }
    else{
        joke = data.joke
    }
    jokeText.innerHTML = joke
}

async function generatejokes2(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
    const data = await res.json();
    console.log(data)
    let joke =''
    if(data.joke ==undefined){
        joke =`${data.setup} <br/> ${data.delivery}`
    }
    else{
        joke = data.joke
    }
    jokeText.innerHTML = joke
}

async function generatejokes3(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
    const data = await res.json();
    console.log(data)
    let joke =''
    if(data.joke ==undefined){
        joke =`${data.setup} <br/> ${data.delivery}`
    }
    else{
        joke = data.joke
    }
    jokeText.innerHTML = joke
}

async function generatejokes4(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
    const data = await res.json();
    console.log(data)
    let joke =''
    joke = data.joke
    if(data.joke == undefined){
        joke = `${data.setup} <br/> ${data.delivery}`
    }
    else{
        joke = data.joke
    }
    jokeText.innerHTML = joke

}

async function generatejokes5(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
    const data = await res.json();
    console.log(data)
    let joke =''
    if(data.joke ==undefined){
        joke =`${data.setup} <br/> ${data.delivery}`
    }
    else{
        joke = data.joke
    }
    jokeText.innerHTML = joke
}