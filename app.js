const navList = document.querySelector(".primaryNavList")
const openButton = document.querySelector(".hamburgerButton")
const closeButton = document.querySelector(".closeButton")

openButton.addEventListener("click", () => {
    if(navList.ariaExpanded === "false"){
        navList.classList.toggle("navClosed")
        navList.setAttribute("aria-expanded", "true")
    } 
})

closeButton.addEventListener("click", () => {
    if(navList.ariaExpanded === "true"){
        navList.classList.toggle("navClosed")
        navList.setAttribute("aria-expanded", "false")
    }
}) 


const firstFeatureButton = document.querySelector(".bookmarkingFeature")
const secondFeatureButton = document.querySelector(".searchingFeature")
const thirdFeatureButton = document.querySelector(".sharingFeature")
const firstFeature = document.querySelector(".featureFirst")
const secondFeature = document.querySelector(".featureSecond")
const thirdFeature = document.querySelector(".featureThird")
let featuresImage = document.querySelector(".featuresImage")




firstFeatureButton.addEventListener("click", () => {
    firstFeatureButton.classList.add("chosenFeature")
    secondFeatureButton.classList.remove("chosenFeature")
    thirdFeatureButton.classList.remove("chosenFeature")
    featuresImage.src="images/illustration-features-tab-1.svg"
    firstFeature.classList.remove("featureHidden")
    secondFeature.classList.add("featureHidden")
    thirdFeature.classList.add("featureHidden")
   
}) 

secondFeatureButton.addEventListener("click", () => {
    firstFeatureButton.classList.remove("chosenFeature")
    secondFeatureButton.classList.add("chosenFeature")
    thirdFeatureButton.classList.remove("chosenFeature")
    featuresImage.src="images/illustration-features-tab-2.svg"
    firstFeature.classList.add("featureHidden")
    secondFeature.classList.remove("featureHidden")
    thirdFeature.classList.add("featureHidden")
    
}) 

thirdFeatureButton.addEventListener("click", () => {
    firstFeatureButton.classList.remove("chosenFeature")
    secondFeatureButton.classList.remove("chosenFeature")
    thirdFeatureButton.classList.add("chosenFeature")
    featuresImage.src="images/illustration-features-tab-3.svg"
    firstFeature.classList.add("featureHidden")
    secondFeature.classList.add("featureHidden")
    thirdFeature.classList.remove("featureHidden")

}) 



const arrowFirst = document.querySelector(".arrowFirst")
const arrowSecond = document.querySelector(".arrowSecond")
const arrowThird = document.querySelector(".arrowThird")
const arrowFourth = document.querySelector(".arrowFourth")

const answerFirst = document.querySelector(".answerFirst")
const answerSecond = document.querySelector(".answerSecond")
const answerThird = document.querySelector(".answerThird")
const answerFourth = document.querySelector(".answerFourth")

arrowFirst.addEventListener("click", () => {
    if(answerFirst.ariaExpanded === "false"){
        answerFirst.classList.remove("hiddenAnswer")
        answerFirst.setAttribute("aria-expanded", "true")
    } else if(answerFirst.ariaExpanded === "true"){
        answerFirst.classList.add("hiddenAnswer")
        answerFirst.setAttribute("aria-expanded", "false")
    }
    
})

arrowSecond.addEventListener("click", () => {
    if(answerSecond.ariaExpanded === "false"){
        answerSecond.classList.remove("hiddenAnswer")
        answerSecond.setAttribute("aria-expanded", "true")
    } else if(answerSecond.ariaExpanded === "true"){
        answerSecond.classList.add("hiddenAnswer")
        answerSecond.setAttribute("aria-expanded", "false")
    }
    
})

arrowThird.addEventListener("click", () => {
    if(answerThird.ariaExpanded === "false"){
        answerThird.classList.remove("hiddenAnswer")
        answerThird.setAttribute("aria-expanded", "true")
    } else if(answerThird.ariaExpanded === "true"){
        answerThird.classList.add("hiddenAnswer")
        answerThird.setAttribute("aria-expanded", "false")
    }
    
})

arrowFourth.addEventListener("click", () => {
    if(answerFourth.ariaExpanded === "false"){
        answerFourth.classList.remove("hiddenAnswer")
        answerFourth.setAttribute("aria-expanded", "true")
    } else if(answerFourth.ariaExpanded === "true"){
        answerFourth.classList.add("hiddenAnswer")
        answerFourth.setAttribute("aria-expanded", "false")
    }
    
})