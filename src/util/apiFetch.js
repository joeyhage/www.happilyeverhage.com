const buildApiUrlFor = resource => process.env.REACT_APP_HOST + '/api/happilyeverhage' + resource;

const getApiFor = (resource) => {
  const url = buildApiUrlFor(resource);

  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET' })
      .then(response => response.ok ? response.json() : '')
      .then(json => resolve(json))
      .catch(error => reject(error));
  });
};

const postApiWith = (resource, body) => {
  const url = buildApiUrlFor(resource);
  const headers = { 'Content-Type': 'application/json' };

  return new Promise((resolve, reject) => {
    fetch(url, { method: 'POST', headers, body })
      .then(response => response.ok ? response.json() : reject())
      .then(json => resolve(json))
      .catch(error => reject(error));
  });
};

module.exports = {
  buildApiUrlFor,
  getApiFor,
  postApiWith
};