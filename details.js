let id =new URLSearchParams(window.location.search).get("id")
const card =document.querySelector('.basliq222')
fetch(`  http://localhost:3000/cart/${id}`)
.then(response=>response.json())
.then