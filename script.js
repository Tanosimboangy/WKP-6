const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];


const foodType = document.querySelector('.food_type');
const vegetarianFood = document.querySelector('#vegetarian');
// const firstAddButton = document.querySelector('.button_first');
// const secondAddButton = document.querySelector('.button_second');
// const thirdAddButton = document.querySelector('.button_third');
// const fourthAddButton = document.querySelector('.button_fourth');
// const fithAddButton = document.querySelector('.button_fith');
// const orderList = document.querySelector('.oreder_list');
// const firstOrder = document.querySelector('.first_order');
// const secondOrder = document.querySelector('.second_order');
// const thirdOrder = document.querySelector('.third_order');
// const fourthOrder = document.querySelector('.fourth_order');
// const fithOrder = document.querySelector('.fith_order');
const outerModal = document.querySelector('.outer_modal');
const innerModal = document.querySelector('.inner_modal');

// Call the div container where we insert the html
const foodList = document.querySelector('.food_list');
// A function to insert the html
const hotfood = foods.map(food => {
    return  `
    <ul>
        <li>${food.title}</li>
        <li>${food.price}</li>
        <button class="add_button">Add</button>
    </ul>`;
}).join(" ");
foodList.innerHTML = hotfood;
// console.log(hotfood);


// Grab for the spicy checkbox one in order to add the html
const spicyCheckbox = document.querySelector("#spicy");
// A function that mapping through the object and filtering the spicy elements
const spicyTypeFood = e => {
    const spicyFood =  foods.filter(food => food.spicy === true);
    const foodSpicy = spicyFood.map(spc => {
      return myhtml = `
                <ul value="${spc.id}">
                    <li>${spc.title}</li>
                    <li>${spc.price}</li>
                    <button class="add_button" value="${spc.id}">Add</button>
                </ul>`;
    }).join('');
    foodList.innerHTML = foodSpicy;
    console.log(e);
}
spicyCheckbox.addEventListener("change", spicyTypeFood);
// console.log(spicyFood);


// Grab for the spicy checkbox one in order to add the html
const vgtCheckbox = document.querySelector("#vegetarian");
// A function that mapping through the object and filtering the spicy elements
const vgtTypeFood = e => {
    const vgtFood =  foods.filter(food => food.vegetarian === true);
    const foodVgt = vgtFood.map(vgt => {
      return myhtml = `
                <ul value="${vgt.id}">
                    <li>${vgt.title}</li>
                    <li>${vgt.price}</li>
                    <button class="add_button" value="${vgt.id}">Add</button>
                </ul>`;
    }).join('');
    foodList.innerHTML = foodVgt;
    console.log(e);
}
vgtCheckbox.addEventListener("change", vgtTypeFood);
// console.log(spicyFood);



//  const specialFood = e => {
//     console.log(foods);
// }
// vegetarianFood.addEventListener("click", specialFood);

// const addFirstTypeOfFood = e => {
//     // myHTML = `
//     // <ul>
//     //     <li>${}:</li>
//     //     <li>${}</li>
//     //     <li>${}r</li>
//     // </ul>
//     // `;
//     function getById(foods) {
//         return foods.filter(number => number.identity);
//     }
//     console.log(foods);
// }
// firstAddButton.addEventListener('click', addFirstTypeOfFood);
// const addsecondTypeOfFood = e => {
//     console.log('very good');
// }
// secondAddButton.addEventListener('click', addsecondTypeOfFood);
// const addthirdTypeOfFood = e => {
//     console.log('very good');
// }
// thirdAddButton.addEventListener('click', addthirdTypeOfFood);
// const addFourthTypeOfFood = e => {
//     console.log('very good');
// }
// fourthAddButton.addEventListener('click', addFourthTypeOfFood);
// const addFithTypeOfFood = e => {
//     console.log('very good');
// }
// fithAddButton.addEventListener('click', addFithTypeOfFood);