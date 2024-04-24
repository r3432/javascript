async function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Request aborted due to timeout');
    } else {
      console.error('Error fetching data:', error.message);
    }
    throw error;
  }
}


const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';
const TIMEOUT_DURATION = 5000; // 5 giay

(async () => {
  try {
    const data = await fetchDataWithTimeout(API_URL, TIMEOUT_DURATION);
    console.log('Data received:', data);
  } catch (error) {
    console.error('Error:', error);
  }
})();
