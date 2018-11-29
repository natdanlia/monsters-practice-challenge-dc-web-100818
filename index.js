document.addEventListener("DOMContentLoaded", function() {
    fetcher(1)
    getForm().addEventListener('submit', addMonstr)
  });

function fetcher(pageNum) {
  fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`)
    .then( res => res.json())
    .then( data => data.forEach(appender))

}

function appender (el) {
  let container = document.getElementById('monster-container')
  let h3 = document.createElement('h3')
  let h5 = document.createElement('h5')
  let p = document.createElement('p')

  container.appendChild(h3)
  container.appendChild(h5)
  container.appendChild(p)

  h3.innerText = el.name
  h5.innerText = el.age
  p.innerText = el.description
}


  let nextButton = document.getElementById('forward')
  let count = 1

  nextButton.addEventListener('click', function(){
  let container = document.getElementById('monster-container')
  container.innerHTML = ''

    count++
    fetcher(count)
    console.log(count)
  })

  let previousButton = document.getElementById('back')

  previousButton.addEventListener('click', function(){
  let container = document.getElementById('monster-container')
  container.innerHTML = ''

    count--
    fetcher(count)
    console.log(count)
  })


  // function createForm() {
  //   formDiv = document.getElementById('create-monster')
  //   form = document.createElement('form')
  //   form.addEventListener('submit', addMonstr)
  //   form.id = 'the-form'
  //   nameInput = document.createElement('input')
  //   ageInput = document.createElement('input')
  //   descriptionInput = document.createElement('input')
  //   submit = document.createElement('button')
  //   submit.type = submit
  //   formDiv.appendChild(form)
  //   form.appendChild(nameInput)
  //   form.appendChild(ageInput)
  //   form.appendChild(descriptionInput)
  //   form.appendChild(submit)
  //   nameInput.placeholder = "Name"
  //   ageInput.placeholder = "Age"
  //   descriptionInput.placeholder = "description"
  //   submit.innerText = "Submit Monstr"
  // }

function getForm(){
  return document.querySelector('#form')
}


  function addMonstr(event) {
    event.preventDefault()
    let name = document.getElementById('nameInput').value
    let age = document.getElementById('ageInput').value
    let description = document.getElementById('descriptionInput').value
    postFetch(name,age,description)
    form.reset()
  }


  function postFetch(name, age, description){
    let data = {
      name: name,
      age: age,
      description: description
    }
    fetch('http://localhost:3000/monsters', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }


//   function postFetch(name, age, description){
//   let data = {
//     name: name,
//     age: age,
//     description: description
//   }
//   fetch('http://localhost:3000/monsters', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => {console.log(data)
//     })
// }
