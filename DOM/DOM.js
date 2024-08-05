// DOM stands for document object model
// DOM is a programming interface for HTML and XML documents
// It defines the logical structure of documents and the way a document is accessed and manipulated
// DOM is a W3C (World Wide Web Consortium) standard
// DOM is used to access and manipulate HTML and XML documents in a programmatic way
// DOM is used to create, modify, and delete elements, attributes, and text nodes in a
// document

// getElementById
document.getElementById('title')
document.getElementById('title').id
document.getElementById('title').class
document.getElementById('title').className
document.getElementById('title').getAttribute('id')


title.style.backgroundColor = 'green'
title.style.padding = '15px'

// title
title.innerText
title.textContent
title.innerHTML

// getElementsByClassName
document.getElementsByClassName('heading')

// querySelector
// Selects only the first attribute
document.querySelector('h1')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')
document.querySelector('p:first-child')
document.querySelector('ul')

// Also you can do styling like this if you have good knowledge of CSS Selector
const myul = document.querySelector('ul')
myul.querySelector('li')
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor = 'green'

// querySelectorAll
document.querySelectorAll('h2')

// It looks likes array and some of qualities also match but its not an array
// map not available in prototype option so its not actually an array
// So it's a NodeList which acts differentally

const templist = document.querySelectorAll('h2')

// templist.style.color = 'green' // gives error on this
templist[0].style.color = 'green' // works fine when we change the first element color

// By the below method we can chaneg color of all the H2 in the templist
templist.forEach(function (h2) {
    h2.style.backgroundColor = 'green'
})

// getElementsByClassName
document.getElementsByClassName('list-item')

// HTML Collection []
// And gives the error whe we use the forEach Loop
const tempClassList = document.getElementsByClassName('list-item')
tempClassList.forEach(function (li) {
    console.log(li)
})

// get error forEach is not a function
// To overcome this error we have to convert HTML Collection
// to an array using Array.from() method

// Now the below code works completely fine
const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach(function (li) {
    li.style.color = 'orange'
})


// like we can change the multiple things
myH3.forEach(function (h) {
    h.style.color = 'red',
        h.style.backgroundColor = 'yellow',
        h.style.padding = '10px',
        h.innerText = 'Waqar'
})

