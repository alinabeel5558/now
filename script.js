/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const form = document.querySelector('#quiz-form')
const answer =Array.from(document.querySelectorAll('.answer'))
const questionitems =Array.from(document.querySelectorAll('.question-item'))
const alert =document.querySelector('#alert')
// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
form.addEventListener("submit", e => {
  e.preventDefault()
  //  BONUS1: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
   questionitems.forEach(questionitem => {
    questionitem.classList.add("incorrect")
    questionitem.classList.remove("correct")
   })
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
const checkedAnswers =answer.filter(answer => answer.checked)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
checkedAnswers.forEach(answer => {
  const isCorrect = answer.value === "true"
  const questionitem = answer.closest.add(".question-item")
})
 //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
if (isCorrect) {
questionitem.classList.add("correct")
questionitem.classList.remove("incorrect")

//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`. 
}else{
  questionitem.classList.add("incorrect")
  questionitem.classList.remove("correct")
}
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
const alltrue = checkedAnswers.every(answer => answer.value === "true")
const allchecked = checkedAnswers.length === questionitems.length
if (alltrue && allchecked ) {
  alert.classList.add("active")
  setTimeout(() => {
  alert.classList.remove("active")
}, 2000)
}

})