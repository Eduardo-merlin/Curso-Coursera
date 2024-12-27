const breakfastMenu = ["pancakes", "eggs benedict", "octameal", "fritata"];
const mainCourseMenu = ["steak", "pasta", "burger", "salmon"];
const dessertMenu = ["cake", "ice cream", "pudding", "fruit salad"];

/*const createHTML =  (item, index)=> {
    return `<p>item ${index + 1}: ${item}</p>`;
};*/

/*function createHTML (item, index) {
    return `<p>item ${index + 1}: ${item}</p>`;
};*/

const breakfastMenuItemsHtml = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHtml;

let mainCourseItem = "";

function mainCourseMenu(item, index) {
  document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;
  return (mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`);
}

mainCourseMenu();
