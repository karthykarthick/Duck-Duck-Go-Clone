
// let query = "appstore";
const API_KEY = "2d1f2533e247f0dc5b75f7ebbe0b5d63";
// let search_query = "Anuskha";
// const url =`http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${search_query}`;


let input = document.querySelector('#search')
input.addEventListener('click',()=>{
   let value = input.value
    console.log(value);
})
let query = value
const url =`http://api.serpstack.com/search?access_key=${API_KEY}&query=${query}`;
console.log(url);

// async function search(){
//     const url =`http://api.serpstack.com/search?access_key=${API_KEY}&query=${query}`;
    
        
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data);
//         if(data && data.organic_results){
//             for(let i  = 0;i<data.organic_results.length;i++){
//                console.log(data.organic_results[i].title);
//                console.log(data.organic_results[i].url);
//                console.log(data.organic_results[i].snippet);
//             }
//         }else{
//             console.log('NNot Found!');
//         }
// }

// setTimeout(()=>{
//     search()
// },10000)


// function search() {
//   const url =
//     `http://api.serpstack.com/search?access_key=${API_KEY}&query=${search_query}`;
//  console.log(url);
//   const results = fetch(url)
//     .then((res) => res.json())
    // Images results
    // .then((img)=>{
    //     for(let i=0;i<img.inline_images.length;i++){
    //         console.log(img.inline_images[i].image_url);
    //         console.log(img.inline_images[i].url);
    //         console.log(img.inline_images[i].title);
    //     }
    //     // vedios results
    // })
    // .then((videos)=>{
    //     for(let i=0;i<videos.inline_videos.length;i++){
    //         console.log(videos.inline_videos[i].title);
    //         console.log(videos.inline_videos[i].length);
    //         console.log(videos.inline_videos[i].source);
    //         console.log(videos.inline_videos[i].uploaded);
    //     }
    // })
    // search results
    // .then((data) => {
    //     for(let i = 0;i<data.organic_results.length;i++){
    //         console.log(data.organic_results[i].title);
    //         console.log(data.organic_results[i].url);
    //         console.log(data.organic_results[i].snippet);
    //     }
    // })
//     .catch((err) => {
//       console.log("err:", err);
//     });
//   return results;
// }

// search();

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
