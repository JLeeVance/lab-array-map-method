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

const titleCased = (array) => { 
  let splitWordArray = [];
  array.map((index) => splitWordArray.push(index.split(' ')))
  //up to here I have split the contents of each string within my array
  let mergedWordArrays = splitWordArray.map((array) => array.map((word) => word[0].toUpperCase().concat(word.slice(1))).join(" "))
  //introduced new array mergedWordArrays, assigned it to the expression
  //expression Breakdown:
  //i mapped through the split word array I created above, which each map of the array would give me an array
  //i know this to be true because I just seperated the individual strings into their own arrays
  //so I named the var array
  //     THEN I mapped through that array (.map() returns an array itself! KEEP THIS IN MIND AS OF LINE 18 in the code
  //     I have an array within an array.)
  //        while mapping through the array, each index contains a word, hence the variable name!
  //    I then took that word, isolated the first 'index' via bracket notation, and changed it to upperCase
  //    THEN I chained on a .concat() which takes in an argument to be concatted with the word I just changed the first index to
  //    I accessed the var 'word' before, giving me the scope to use it here. 
        //NOW I wanted to keep the rest of the word, so I used the non-destructive '.slice(), provided an index of where to begin
        //which is [1]. 
        // REMEMBER you have two arrays now, so we needed to call '.join()' on it in order to get rid of the array that was created 
        //via mapping the second array
        // I put in the space as my argument for '.join()' BECAUSE '.join()' will automatically join the elements in the array
        //so I needed to tell it to have the space between each one, which would make them individual elements within the '.map()'
        //called on the splitWordArray I created. RETURNIG ONE array of the joined strings of text

  return mergedWordArrays;
}
console.log(titleCased(tutorials))

