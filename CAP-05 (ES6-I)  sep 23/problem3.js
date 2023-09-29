// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


function check(char) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lower = "abcdefghijklmnopqrstuvwxyz"
 let  ans = ""
  for (let i = 0; i < upper.length; i++) {
    if (char == upper[i]) {
      ans = lower[i]
    }
  }

  return ans
}
// checking the function for a single character 

console.log(check("Q"))

// checking the function with a word 

let word = "WETYLKS"
let ans = ""
for(let i=0;i<word.length;i++ ){
  ans+= check(word[i])
}
console.log(ans)


// Now converting the array element to lower case character 

// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let arr =  ["MA", "SA", "I", "SCH", "OOL"]
let array = []
for(let i=0;i<arr.length;i++){
  let element = ""
  for(let j=0;j<arr[i].length;j++){
    element+= check(arr[i][j])
  }
  array.push(element)
}
console.log(array)