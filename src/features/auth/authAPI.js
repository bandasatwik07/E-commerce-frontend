export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('/auth/signup', {
      // const response = await fetch('auth/signup', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Request failed with status ${response.status}: ${errorData.message}`);
      }

      const data = await response.text();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('auth/login', {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
      // console.log("jai balayya")
    } catch (error) {
      console.log("jai balayya")
      reject( error );
    }

  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('auth/check');
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}


export function signOut(userId) {
  return new Promise(async (resolve, reject) => {
    resolve({ data: 'success' });
  });

}

