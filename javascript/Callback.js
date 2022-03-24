console.log('Before');
getUser(1,function(user,callback){
    console.log('User',user);

    //
    getRepositories('naveen',function(data){
        console.log(data);
    });
    
});
console.log('After');

function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        callback({id:id,gitHubUsername: 'mosh'})
    },2000);
}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log(`my name is ${username}`);
        callback(['repo1','repo2','repo3']);
    },2000);
}