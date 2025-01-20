export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch('cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('cart/' )
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('cart/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    console.log("nani",update.id)
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function deleteItemFromCart(id) {
  return new Promise(async (resolve) => {
    console.log("nani123",id);
    const response = await fetch('cart/' + id, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    console.log("nani456",id);
    const data = await response.json();
    resolve({ data: { id: id } });
    console.log("nani789",data);
    // TODO: on server it will only return some info of user (not password)
  });
}

export function resetCart() {
  // get all items of user's cart - and then delete each
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({status:'success'})
  });
}