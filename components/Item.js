const baseURL = "https://jsonplaceholder.typicode.com"

function Item({id, title, url}) {
    const mainDiv = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    img.src = url
    img.alt = 
    span.innerHTML = title

    mainDiv.classList.add('item')

    mainDiv.append(img, span)

    mainDiv.onclick = () => {
        fetch(baseURL + "/comments?postId=" + id)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    return mainDiv
}


export default Item