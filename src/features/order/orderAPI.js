export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('/orders/'+order.id, {
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllOrders(sort,pagination) {
  let queryString="";
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  console.log(queryString);

  return new Promise(async(resolve) =>{
    const response = await fetch('/orders?'+queryString)
    const data = await response.json()
    console.log("nani123",data);
    const totalOrders = response.headers.get('X-Total-Count');
    resolve({data:{orders:data,totalOrders:+totalOrders}});
  }
  );
}