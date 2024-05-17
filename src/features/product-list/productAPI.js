

export function fetchProductsById(id) {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products/'+id)
    const data = await response.json()
    resolve({data});
  }
  );
}

export function createProduct(product) {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products/',{
      method:'POST',
      body: JSON.stringify(product),
      headers : { 'content-type':'application/json'},
    });
    const data = await response.json()
    resolve({data});
  }
  );
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort,pagination) { 
  //filter ={category: ['electronics', 'jewelery'], price: [100, 200]}
  //sort={_sort: 'price', _order: 'asc'}
  //paination={_page: 1, _limit: 10}
  let queryString = '';
  for (let key in filter) {
    for (let i = 0; i < filter[key].length; i++) {
      queryString += `${key}=${filter[key][i]}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  console.log(queryString);

  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    const totalItems = response.headers.get('X-Total-Count');
    resolve({data:{products:data,totalItems:+totalItems}});
  }
  );
}

export function fetchCategories() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/categorys')
    const data = await response.json()
    resolve({data});
  }
  );
}
export function fetchBrands() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/brands')
    const data = await response.json()
    resolve({data});
  }
  );
}
