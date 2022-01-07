const result = menuList.map(function(menuItem,index){
    return `<li>${menuItem}`
})
.join("")
menuElemen.innerHTML = result
const productElement = document.querySelector("#products");
if (productElement) {
  const result = productList
    .map(function (productItem, index) {
      return `<div>${productItem.name}</div>`;
    })
    .join("");
  productElement.innerHTML = result;
}
console.log(numberA);
console.log("sum", sum(3, 4));
