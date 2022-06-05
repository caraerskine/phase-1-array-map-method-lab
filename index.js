const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  let newTutorials = tutorials.map (tutorial => {
   return tutorial.split(" ").map (word => {
    return word.charAt(0).toUpperCase() + word.slice(1) 
   }).join(" ")
  //  charAt(0).toUpperCase() + tutorial.split(1) + tutorial.slice(1)
  })
  return newTutorials
}

// tutorials.join (' ')
// text.split (' ')


//+ tutorial.slice(1) //