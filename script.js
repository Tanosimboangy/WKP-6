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
const spicyFood = document.querySelector("input[name=checkbox]");
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

const foodList = document.querySelector('.food_list');
const hotfood = foods.map(food => {
    return  `
    <ul>
        <li>${food.title}</li>
        <li>${food.price}</li>
        <button class="add_button">Add</button>
    </ul>`;
}).join(" ");

foodList.innerHTML = hotfood;
console.log(hotfood);




// const hotFood = e => {
//     if (checkbox.checked === true) {
//         const spicyfood = foods.filter(hotfood => hotFood.spicy);
//         return myHTML = `
//         <div>
//             <ul>
//                 <li>${spicyfood.title}</li>
//                 <li>${spicyfood.price}</li>
//                 <button class="add_button">Add</button>
//             </ul>
//         </div>
//         `;
//     } else {

//     }
//     console.log(spicyfood);
// }
















// const specialFood = e => {
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