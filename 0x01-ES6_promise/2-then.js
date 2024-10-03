export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
       return { status: 200, body: 'Success' };
     })
    .catch(() => {
       return new Error();
     }) 
    .finally(() => {
       return console.log("Got a response from the API");
     });
}
