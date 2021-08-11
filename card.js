const Tiles=[
  {photo:"./images/07.jpg"},
  {photo:"./images/08.jpg"},
  {photo:"./images/09.jpg"},
  {photo:"./images/10.jpg"},
  {photo:"./images/11.jpg"},
  {photo:"./images/12.jpg"},
  {photo:"./images/13.jpg"},
  {photo:"./images/14.jpg"},
  {photo:"./images/15.jpg"},
]


function tiles(tile){
  return `
  <div class="card">
    <img class="card-img" src="${tile.photo}">
  </div>
  </div>
  `
}


document.getElementById("cards").innerHTML = `    
  ${Tiles.map(tiles).join(" ")}
`