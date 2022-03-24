
//Async and await approch
console.log('Before');
async function displayCommits(){
    try{ 
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        console.log(repos);
    }
    catch(err){
      console.log(err);
    }
    
}

displayCommits();

console.log('After');


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


