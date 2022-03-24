const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve(1);
        reject(new Error('failed'));
    },2000);
})

p.then(result=>console.log(result))
 .catch(error=>console.log(`Error`,error));