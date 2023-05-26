// let query = "appstore";
// const API_KEY = "2d1f2533e247f0dc5b75f7ebbe0b5d63";
let search_query = "Anuskha";
// const url =`http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${search_query}`;

function search() {
  const url =
    `http://api.serpstack.com/search?access_key=2d1f2533e247f0dc5b75f7ebbe0b5d63&query=${search_query}`;
 console.log(url);
  const results = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.organic_results);
    })
    .catch((err) => {
      console.log("err:", err);
    });
  return results;
}

search();

// function fetchData() {
//     const url = 'http://api.serpstack.com/search?access_key=2d1f2533e247f0dc5b75f7ebbe0b5d63&query=mcdonalds';

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         // Process the received data
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors
//         console.error('Error:', error);
//       });
//   }

//   fetchData()
