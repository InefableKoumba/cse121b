/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Inefable KOUMBA"
let currentYear = new Date().getFullYear();
const profilePicture = "images/inefable.jpg";




/* Step 3 - Element Variables */

const nameElement = document.getElementById("name")
const foodElement = document.getElementById("food")
const yearElement = document.querySelector("#year")
const imageElement = document.getElementsByTagName("img")[0]




/* Step 4 - Adding Content */

nameElement.innerHTML = ` <strong>${fullName}</strong>` 
yearElement.textContent = currentYear
imageElement.setAttribute("src", profilePicture)
imageElement.setAttribute("alt", `Profile picture of ${fullName}`)



/* Step 5 - Array */
const myFavoriteFoods = [
    "Rice",
    "Chicken",
    "Fish",
    "Beans",
    "Potatoes",
    "Yam",
    "Plantain",
    "Beef",
    "Pork",
    "Turkey"

]

foodElement.innerHTML = `${myFavoriteFoods.join(", ")}`

const foodItem ="Pizza"

myFavoriteFoods.push(foodItem)

foodElement.innerHTML +=  `<br>${myFavoriteFoods.join(", ") }`

myFavoriteFoods.shift()

foodElement.innerHTML +=  `<br>${myFavoriteFoods.join(", ") }`

myFavoriteFoods.pop()
foodElement.innerHTML +=  `<br>${myFavoriteFoods.join(", ") }`



