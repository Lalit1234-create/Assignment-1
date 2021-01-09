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

   async function read() {
   	    const PromiseData = await fetchData('https://www.pinkcity.com/');
        console.log(PromiseData.length);
   };

 console.log('program start');

 ready();

 console.log('program end'); 