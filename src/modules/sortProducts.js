function sortByCategory(productA, productB){
  return productA.id - productB.id 
}

function sortByPrice(productA, productB){
  return productA.price - productB.price
}

function sortByRating(productA, productB){
  return productA.rating - productB.rating
}

export default function sortBy(sortType) {
  const dictionary={
    "category" : sortByCategory,
    "price" : sortByPrice,
    "rating" : sortByRating
  }
  
  return dictionary[sortType]
}