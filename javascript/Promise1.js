const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation 1....')
        resolve(1);
    },2000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation 2....')
        resolve(2);
    },2000);
})

Promise.all([p1,p2])//when all completed then it will run
.then((result)=>console.log(result))
.catch(err=>console.log('Error',err.message));

//sometimes we need to get result as soon as possible

Promise.race([p1,p2])
.then((result)=>console.log(result))
.catch(err=>console.log('Error',err.message));