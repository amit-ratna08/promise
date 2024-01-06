// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is complketer")
//         resolve()
//     },1000)
// })
// promiseone.then(function(){
//     console.log("promise consumed")
// })


// const promisethree=new Promise(function(resolve,reject){
// setTimeout(function(){
//     resolve({username:"abc",email:"abc@gmail.com"})
// },1000)
// })
// promisethree.then(function(user){
//     console.log(user)
// })

// let promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"abc",email:"abc@gmail.com"})
//         }
//         else{
//             reject("something went wrong")
//         }
//     },1000)
// })

// promisefour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("promises nither resolve or reject")
// })


// let promisefive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"abc",email:"abc@gmail.com"})
//         }else{
//             reject("something went wrong")
//         }
//     },1000)
// })

// async function consumepromisefive(){
//   try{
//     const response= await promisefive
//     console.log(response)
//   } catch (err){
//     console.log(err)
//   }
// }

// consumepromisefive()



//fetch
// async function getalluser(){
//     try{
//         const response=await fetch("")
//         const data=await response.json()
//         console.log(data)
//     }  catch(err){
//         console.log(err)
//     }
// }

  