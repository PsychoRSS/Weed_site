export const getDab = () => {
    return fetch (`/api/dab/`, {
        method: 'GET',
        headers: {
            'Content-Type':  'application/json',
        },
    });
};

export const createDab = (dabData) => {
    return fetch(`/api/dab/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dabData),
    });
  };
  
export const getOneDab= (dabName) => {
    return fetch(`/api/dab/${dabName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

export const deleteDab = (dabName) => {
  return fetch(`/api/dab/${dabname}`, {
    method: 'DELETE',
    headers:  {
      'Content-Type': 'application/json',
    },
  });
};
  

  