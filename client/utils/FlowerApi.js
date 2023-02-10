export const getFlower = () => {
    return fetch ('/api/flower/', {
        method: 'GET',
        headers: {
            'Content-Type':  'application/json',
        },
    });
};

export const createFlower = (flowerData) => {
    return fetch('/api/flower', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flowerData),
    });
  };
  
  export const getOneFlower = (flowerName) => {
    return fetch(`/api/flower/${flowerName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  

  