
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data});
  }
  );
}

export function fetchProductsByFilters(filter) { 
  //filter is an object

  //filter = {
  //  "category": "electronics",
  //  "brand": "apple",
  //  "price": "100-200",
  //  "sort": "price-asc"
  //}

  let queryString = '';
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
    console.log(`${key}=${filter[key]}&`);
  }
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    resolve({data});
  }
  );
}
