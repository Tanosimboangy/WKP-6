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
console.log(hotfood);

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





// const outerModal = document.querySelector('.outer_modal');
// const innerModal = document.querySelector('.inner_modal');
// const confirmOrder = document.querySelector(".order");
// const confirmationOrder = event => {
// 	console.log(event);
// 	const myHTML = `
// 	<div class="wrapper">
// 		<h2>
// 			Thank you!
// 		</h2>
// 		<p>
// 			Your order is confirmed. We will prepare your food, and deliver it when it is ready.
// 		</p>
// 		<p>
// 			The total amount is .
// 		</p>
// 	</div>
// 	`;
// 	innerModal.innerHTML = myHTML;
//     outerModal.classList.add('open');
// }
// confirmOrder.addEventListener("click", confirmationOrder);
// const openModal = () => {
// 	outerModal.classList.add('open');
// }
// // Create a new function to remove the open class
// const closeModal = event => {
// 	const outside = !event.target.closest('.inner-modal');
// 	if (outside) {
// 		outerModal.classList.remove('open');
// 	} 
// };

