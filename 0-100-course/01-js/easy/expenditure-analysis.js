/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length == 0) return [];
  const obj = {};
  for(const trans of transactions){
    const category = trans.category;
    const price = trans.price;
    if(obj[category]){
      obj[category] += price;
    }
    else{
      obj[category] = price;
    }
  }
  console.log(obj);
  // const res = [];
  // for(const[key, value] of Object.entries(obj)){
  //   res.push({category: key, totalSpent: value});
  // }
  const res = Object.keys(obj).map(category => ({
    category, totalSpent: obj[category]
  }));
  return res;
}

module.exports = calculateTotalSpentByCategory;
