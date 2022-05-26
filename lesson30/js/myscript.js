const listProduct = [
  {prName: 'Milk',
  count: 5,
  purchased: false,
  priceItem: 45,
  priceTotal: function() {
    return this.count * this.priceItem;
  }
},
{prName: 'Bread',
  count: 1,
  purchased: false,
  priceItem: 25,
  priceTotal: function() {
    return this.count * this.priceItem;
  }
},
{prName: 'Groats',
count: 2,
purchased: true,
priceItem: 55,
priceTotal: function() {
  return this.count * this.priceItem;
}
},

{prName: 'Coffe',
count: 2,
purchased: true,
priceItem: 55,
priceTotal: function() {
  return this.count * this.priceItem;
}
}
]


// level MIN

function statusProduct(arr) {
  const resFalse = listProduct.filter(listProduct => listProduct.purchased === false);
  resFalse.sort((a, b) => a.prName > b.prName ? 1 : -1);
  const resTrue = listProduct.filter(listProduct => listProduct.purchased === true);
  resTrue.sort((a, b) => a.prName > b.prName ? 1 : -1);
  return resFalse.concat(resTrue);
}

console.log(statusProduct(listProduct));

function dontShop(arr) {
  const resFalse = listProduct.filter(listProduct => listProduct.purchased === false);
  return resFalse;
}

console.log(dontShop(listProduct));


// level NORMA

function newListProduct(arr, prodName) {
  return arr.filter(function(el) {
    return el.prName !== prodName;
  });
}

console.log(newListProduct(listProduct, 'Milk'));

function addNewProduct(arr, prodName) {
  if (arr.prName === prodName) {
    return {...arr, 
    count: arr.count = arr.count + 1 ,
    }
  } else {return {...arr,
    prName: arr.prName = prodName,
  }
}
}
console.log(addNewProduct(listProduct, 'Apple'));




//level MAX

function totalPriceShop(arr) {  
  return arr.reduce((s, ar) => s + ar.priceTotal(), 0);
}

console.log( 'Total amount = ' +  totalPriceShop(listProduct));

function totalTrueShop(arr) {
  return arr.reduce( (sum, ar) => {    
    if (ar.purchased === true) {
      return sum + ar.priceTotal();
    } else {return sum}
  }, 0)
}

console.log( 'Amount of purchased products = ' + totalTrueShop(listProduct));

function totalFalseShop(arr) {
  return arr.reduce( (sum, ar) => {    
    if (ar.purchased === false) {
      return sum + ar.priceTotal();
    } else {return sum}
  }, 0)
}

console.log( 'Amount of unpurchased products = ' + totalFalseShop(listProduct));