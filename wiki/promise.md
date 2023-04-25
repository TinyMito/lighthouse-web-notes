# Promise
Example of Async Callback Hell.
```javascript
asyncFunc1(function(result1) {
  asyncFunc2(result1, function(result2) {
    asyncFunc3(result2, function(result3) {
      asyncFunc4(result3, function(result4) {
        // Do something with result4
      });
    });
  });
});
```

Example after using Promise() in place.
```javascript
asyncFunc1()
  .then(function(result1) {
    return asyncFunc2(result1);
  })
  .then(function(result2) {
    return asyncFunc3(result2);
  })
  .then(function(result3) {
    return asyncFunc4(result3);
  })
  .then(function(result4) {
    // Do something with result4
  })
  .catch(function(error) {
    // Handle errors
  });
```

The `.then` will run if the there are no error in the Promise() scope and if there is an error the `.catch` will be triggered.

### Using "Promise()"
```javascript
const myFunction = function(num) {
  return new Promise((resolve, reject) => {
    if(num === 1) {
      resolve('Return something');
    } else {
      reject('With error message')
    };
  });
};

myFunction(150)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });
```

## Alternative
### Using "request-promise-native"
This is a third party library promise function to make it simple to use with API handling.
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

Output:
```sh
<isp_name> <city> <country>
{ //return of fetchISSFlyOverTimes JSON }
```

