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

function statusProduct(arr) {
  const res_false = listProduct.filter(listProduct => listProduct.purchased === false);
  res_false.sort((a, b) => a.prName > b.prName ? 1 : -1);
  const res_true = listProduct.filter(listProduct => listProduct.purchased === true);
  res_true.sort((a, b) => a.prName > b.prName ? 1 : -1);
  return res_false.concat(res_true);
}

console.log(statusProduct(listProduct));

function dontShop(arr) {
  const res_false = listProduct.filter(listProduct => listProduct.purchased === false);
  return res_false;
}

console.log(dontShop(listProduct));

function totalPriceShop(arr) {  
  return arr.reduce((s, ar) => s + ar.priceTotal(), 0);
}

console.log(totalPriceShop(listProduct));

function totalTrueShop(arr) {
  let s = 0;
  arr.reduce( function(sum, el) {
    if (el.purchased === true) {
      return sum + el.priceTotal();
    } else {return sum}
  })
}
 
console.log(totalTrueShop(listProduct));
