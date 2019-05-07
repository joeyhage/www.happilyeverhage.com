const buildApiUrlFor = resource => process.env.REACT_APP_HOST + '/api/happilyeverhage' + resource;

const getApiFor = resource => {
  const url = buildApiUrlFor(resource);

  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET' })
      .then(response => response.ok ? response.json() : reject())
      .then(json => resolve(json))
      .catch(error => {
        console.error(error);
        reject();
      });
  });
};

const postApiWith = (resource, body) => {
  const url = buildApiUrlFor(resource);
  const headers = { 'Content-Type': 'application/json' };

  return new Promise((resolve, reject) => {
    fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })
      .then(response => response.ok ? resolve(response) : reject())
      .catch(error => {
        console.error(error);
        reject();
      });
  });
};

module.exports = {
  buildApiUrlFor,
  getApiFor,
  postApiWith
};