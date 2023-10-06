/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Inefable KOUMBA",
    photo: "images/inefable.jpg",
    favoriteFoods: [
        "Rice",
        "Chicken",
        "Fish",
        "Beans",
        "Potatoes",
    ],
    hobbies: [
        "Reading",
        "Coding",
        "Gaming",
        "Watching Movies",
        "Listening to Music",

    ],
    placesLived: [],
}


/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        place: "Brazzaville", length: "6 Year",
    })
myProfile.placesLived.push(
    {
        place: "Pointe-Noire", length: "6 Year",
    })
myProfile.placesLived.push(
    {
        place: "Dolisie", length: "16 Year",
    })



/* DOM Manipulation - Output */


/* Name */

document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute('src', myProfile.photo);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */


myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    dt.textContent = placeLived.place;
    let dd = document.createElement("dd");
    dd.textContent = placeLived.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});