# Promise
### Example

```javascript
const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

fetchMyIP()
  .then(fetchCoordsByIP)
  .then((body) => {
    const response = JSON.parse(body);
    const { isp } = response.connection;
    const { city, country } = response;
    console.log(isp, city, country);
    //console.log(JSON.parse(body));
    return body;
  })
  .then(fetchISSFlyOverTimes)
  .then((body) => console.log(body))
  .catch(error => console.log(error));

```