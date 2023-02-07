const example = [{
	"id": 3,
	"title": "Samsung Universe 9",
	"description": "Samsung's new variant which goes beyond Galaxy to the Universe",
	"price": 1249,
	"discountPercentage": 15.46,
	"rating": 4.09,
	"stock": 36,
	"brand": "Samsung",
	"category": "smartphones",
	"thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
	"images": ["https://i.dummyjson.com/data/products/3/1.jpg"]
}, {
	"id": 2,
	"title": "iPhone X",
	"description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
	"price": 899,
	"discountPercentage": 17.94,
	"rating": 4.44,
	"stock": 34,
	"brand": "Apple",
	"category": "smartphones",
	"thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
	"images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"]
}, {
	"id": 5,
	"title": "Huawei P30",
	"description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
	"price": 499,
	"discountPercentage": 10.58,
	"rating": 4.09,
	"stock": 32,
	"brand": "Huawei",
	"category": "smartphones",
	"thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
	"images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"]
}, {
	"id": 4,
	"title": "OPPOF19",
	"description": "OPPO F19 is officially announced on April 2021.",
	"price": 280,
	"discountPercentage": 17.91,
	"rating": 4.3,
	"stock": 123,
	"brand": "OPPO",
	"category": "smartphones",
	"thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
	"images": ["https://i.dummyjson.com/data/products/4/1.jpg", "https://i.dummyjson.com/data/products/4/2.jpg", "https://i.dummyjson.com/data/products/4/3.jpg", "https://i.dummyjson.com/data/products/4/4.jpg", "https://i.dummyjson.com/data/products/4/thumbnail.jpg"]
}, {
	"id": 8,
	"title": "Microsoft Surface Laptop 4",
	"description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
	"price": 1499,
	"discountPercentage": 10.23,
	"rating": 4.43,
	"stock": 68,
	"brand": "Microsoft Surface",
	"category": "laptops",
	"thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
	"images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"]
}, {
	"id": 2,
	"title": "iPhone X",
	"description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
	"price": 899,
	"discountPercentage": 17.94,
	"rating": 4.44,
	"stock": 34,
	"brand": "Apple",
	"category": "smartphones",
	"thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
	"images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"]
}, {
	"id": 3,
	"title": "Samsung Universe 9",
	"description": "Samsung's new variant which goes beyond Galaxy to the Universe",
	"price": 1249,
	"discountPercentage": 15.46,
	"rating": 4.09,
	"stock": 36,
	"brand": "Samsung",
	"category": "smartphones",
	"thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
	"images": ["https://i.dummyjson.com/data/products/3/1.jpg"]
}]

export default function groupsameCartItems(cart){
  const result = []

  for (const item of cart) {
    const found = result.findIndex( x => x.id === item.id )

    if (found ===-1){
      result.push(Object.assign(item, {ammount: 1}))
    } else {
      result[found].ammount++
    }
  }

  return result
}

console.log(groupsameCartItems(example))