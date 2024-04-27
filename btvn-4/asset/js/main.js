async function fetchDataWithRetry(url, maxRetries) {
  let retries = 0;
  while (retries < maxRetries) {
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error('Request failed');
          }
          return await response.json();
      } catch (error) {
          console.error('Error fetching data:', error.message);
          retries++;
          console.log(`Retrying (${retries}/${maxRetries})...`);
      }
  }
  throw new Error('Max retries reached, unable to fetch data');
}


const url = 'https://example.com/api/data';
const maxRetries = 3;
fetchDataWithRetry(url, maxRetries)
  .then(data => {
      console.log('Data fetched successfully:', data);
     
  })
  .catch(error => {
      console.error('Failed to fetch data:', error.message);

  });
