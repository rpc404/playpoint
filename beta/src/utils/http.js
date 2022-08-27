const host = process.env.NODE_ENV === "production" ? "" : "http://127.0.0.1:8000";

const userToken = localStorage.getItem("token") || null;

async function post(path, body) {
  
  return await fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { 
      "content-type": "application/json;charset=UTF-8", 
      "sec-fetch-mode": "cors",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${userToken}`
    },
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
  
}

async function get(path) {
  return await fetch(`${host}${path}`,{
    credentials: "omit",
    headers: { 
      "content-type": "application/json;charset=UTF-8", 
      "sec-fetch-mode": "cors",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${userToken}`
    }})
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

const http = {
  post,
  get,
  host,
};

export default http;