// creating basic data to be my search results in an object
const people = [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
]

// declaring and assigning variables to the HTML elements based on their ID value
const searchInput = document.getElementById('search')
const list = document.getElementById('list')
const clearButton = document.getElementById('clear')

// "people" but filtered based on search criteria
// pastes search result to page visibly
function setList(results){
    clearList()
    for (const person of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')
        // adding a class to each item of the results
        resultItem.classList.add('result-item')
        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(person.name)
        // appending the text to the result item
        resultItem.appendChild(text)
        // appending the result item to the list
        list.appendChild(resultItem)
    }

    if (results.length === 0 ){
        noResults()
    }
}

// removes list from page
function clearList(){
    // looping through each child of the search results list and remove each child
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}

// what happens if there are no results
function noResults(){
    const resultItem = document.createElement('li')
    resultItem.classList.add('result-item')
    const text = document.createTextNode('No results found. Sorry!')
    resultItem.appendChild(text)
    list.appendChild(resultItem)
}


// creating event listener that listens to an "input" event
// setting an anonymous callback function with a parameter "e" the event
searchInput.addEventListener("input", (e) => {
    // below for testing reasons
    console.log('input event fired')
    console.log(e.target.value)

    // declaring and assigning the value of the event's target AKA whatever is typed in the search bar
    let value = e.target.value

    // if value exists and is larger than 0
    if (value && value.trim().length > 0){
        // redefining value to exclude white space and change input to all lowerCase
         value = value.trim().toLowerCase()
        //returning only the results of setList if the value of the search is included in the person's name
        setList(people.filter(person => {
            return person.name.includes(value)
        }))
    } else {
        clearList()
    }
})

clearButton.addEventListener("click", () => {
    clearList()
})