console.log("Hello World")
message = document.querySelector("#message")
const addMovie = evt => {
    evt.preventDefault()
    let inputField = document.querySelector("input")
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.addEventListener("click",crossOffMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click",deleteMovie)
    movie.appendChild(deleteBtn)
    deleteBtn.textContent = "X"
    let ul = document.querySelector("ul")
    ul.appendChild(movie)
    inputField.value = ""

}
const deleteMovie = event =>{
    event.target.parentNode.remove()
    message.textContent = "Movie deleted"
} 
const crossOffMovie = evt => {
    evt.target.classList.toggle("checked")
    if (evt.target.classList.contains("checked")){
        return message.textContent = "movie watched"
    }
    else{
        return message.textContent  ="movie added back"
    }

} 

const form = document.querySelector("form")

form.addEventListener("submit",addMovie)


