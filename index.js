var notify = document.querySelector(".notify")
var albums = document.querySelectorAll(".album")
var itemsTotal = document.querySelector(".items-total")
var saveBtn = document.querySelector("button")

var albumsSelected = []

var i = 0;
while(i < albums.length){
    albums[i].onclick = function(e) {
        var albumTitle = this.querySelector(".title").textContent
        if(this.classList.contains("selected") !== true){
            this.classList.add("selected")
            albumsSelected.push(albumTitle)
        }else{
            this.classList.remove("selected")
            albumsSelected = albumsSelected.filter(function(item){
                return item !== albumTitle
            })
        }
        console.log(albumsSelected)
    }
    i++
}














// click album
// show user he selected album so we add a class to album div
// create an album and then add the album title we selected to that array
// find out the total of the albums selected
//save button is clicked then when it's clicked show notifications with saved items total