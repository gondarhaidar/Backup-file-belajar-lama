// // fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// // .then(response => response.json())
// // .then(response => console.log(response));
let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji ditepati');
//     }else {
//         reject('ingkar janji..!!');
//     }
// });
// janji1.then(response => console.log(`oke ${response}`))
// .catch(response => console.log(`NOT OK ${response}`));

const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(() => {
            resolve('ditepati setelah beberapa saat');
        }, 2000);
    }else{
        setTimeout(()=>{
            reject('tidak ditepati setelah beberapa saat');            
        }, 2000);
    }
});
console.log('mulai');
console.log(janji2.then(() => console.log(janji2)));
console.log('selesai');