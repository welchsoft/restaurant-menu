let menuContent = document.getElementById('menu-content')
let selecter = ''

let menuButtonFull = document.getElementById('menu-button-full')
let menuButtonEntrees = document.getElementById('menu-button-entrees')
let menuButtonStarters = document.getElementById('menu-button-starters')
let menuButtonDesserts = document.getElementById('menu-button-desserts')

function full_menu(selecter) {
  menuContent.innerHTML = ''
  dishes.forEach(function(dish) {
      let menuItem = `<div class="card">
      <img class="card-img-top" src="${dish.imageURL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${dish.title}</h5>
        <p class="card-text">${dish.description}</p>
        <p class="card-text"><small class="text-muted">${dish.price}</small></p>
      </div>
    </div>`
  menuContent.innerHTML += menuItem
  })
}

function filter_menu(selecter) {
  menuContent.innerHTML = ''
  dishes.forEach(function(dish) {
    if (selecter != ''){
      if (dish.course == selecter){
      let menuItem = `<div class="card">
      <img class="card-img-top" src="${dish.imageURL}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${dish.title}</h5>
        <p class="card-text">${dish.description}</p>
        <p class="card-text"><small class="text-muted">${dish.price}</small></p>
      </div>
    </div>`
  menuContent.innerHTML += menuItem}}
  })
}

full_menu()

menuButtonFull.addEventListener('click',function(){
  full_menu()
})

menuButtonStarters.addEventListener('click',function(){
  filter_menu('Starters')
})
menuButtonEntrees.addEventListener('click',function(){
  filter_menu('Entrees')
})
menuButtonDesserts.addEventListener('click',function(){
  filter_menu('Desserts')
})
