output = document.getElementById("result")

const myDescription = {
    Name: "Arinze",
    Age: '24',
    Height:'5ft',
    Complexion: 'Dark',
    Nationality:'Nigerian',
    Hobbies: "coding",

};
/*
for(const key in myDescription){
   
        output.innerHTML += `${key}: ${myDescription[key]}<br>`;
}


for(let [key, value] of Object.entries(myDescription)) {
    output.innerHTML += `${key}: ${value}<br>`;
} */
const keys = Object.keys(myDescription)
for(let i = 0; i < keys.length; i++){
    console.log(keys[i])
}

