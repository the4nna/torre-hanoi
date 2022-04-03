const torrehanoi = document.getElementById("torre-hanoi")
const torres = document.querySelectorAll(".torre")
let discodeorigem = null
let torredestino = null

const disco1 = document.querySelector(".disco1")
const disco2 = document.querySelector(".disco2")
const disco3 = document.querySelector(".disco3")
const vitoria = document.querySelector("#vitoria")



for(let i = 0; i < torres.length; i++) {
    torres[i].addEventListener("click", function(event) {
        if (discodeorigem === null) {
            discodeorigem = event.currentTarget.lastElementChild
         } else if (discodeorigem !== null && torredestino === null){
            if (event.currentTarget.childElementCount === 0) {
            event.currentTarget.appendChild(discodeorigem)
            
            } else {
                if (discodeorigem.clientWidth < event.currentTarget.lastElementChild.clientWidth) {
                    event.currentTarget.appendChild(discodeorigem)
                }
                
            }
            discodeorigem = null
         } 
        if (torres[2].childElementCount === 3) {
            setTimeout(() => alert("Parabéns, você ganhou!"), 500)
        }
    })
}
