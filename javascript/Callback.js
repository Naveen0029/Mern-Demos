getUser(1)
  .then(user=>getRepositories(user.gitHubUsername))
  .then(repos=>console.log(repos))
  .catch(error=>console.log('Error',error.message));

//Replacing callback with promises
console.log('Before');
function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading a user from a database');
            resolve({id:id,gitHubUsername:'mosh'});
        },2000)
    })
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Github API...');
            resolve(['repo1','repo2','repo3']);
        },2000)
    })
    
}

