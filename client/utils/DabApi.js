export const getDab = () => {
    return fetch ('/api/dab/', {
        method: 'GET',
        headers: {
            'Content-Type':  'application/json',
        },
    });
};

export const createDab = (dabData) => {
    return fetch('/api/flower', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dabData),
    });
  };
  
export const getOneDab= (dabName) => {
    return fetch(`/api/flower/${dabName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

export const deleteDab = (dabName) => {
  return fetch('/api/flower', {
    method: 'DELETE'
  })
}
  

  