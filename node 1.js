const https = require('https');

function fetchData(url) {
	const promiseToken = new Promise((resolve, reject) => {
		https.get(url, (response) =>{
			let data = '';
			response.on('data', (rd) => data = data + rd);
			response.on('end', () => resolve(data));
		});
	});
	     return promiseToken;
}

console.log('program starts');

const promiseToken = fetchData('https://www.pinkcity.com/');
promiseToken.then((PromiseData) => {
	console.log(PromiseData.length);

});

console.log('program ends');