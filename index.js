import Item from "./components/Item.js"

const cont = document.querySelector('.container')

const baseURL = "http://localhost:8080"


const btn = document.querySelector('button');

const photoInput = document.querySelector('.photo');
const textInput = document.querySelector('.text');


  


btn.onclick = () => {
      
    const photo = photoInput.value;
    const text = textInput.value;
    

    const post = {
        "albumId": Math.random() * 1000,
        "id": Math.random() * 1000,
        "title": text,
        "url": photo,
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }


    fetch(baseURL  + "/posts", {
        method: "post",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => console.log(res))
};
fetch(baseURL + "/posts")
    .then(res => res.json())
    .then(res => {
        reload(res, cont)
    })





function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        const div = Item(item)
        cont.append(div)
    }
}