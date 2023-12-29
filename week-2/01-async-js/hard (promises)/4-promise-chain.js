/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

    return p = new Promise (resolve=>{
        setTimeout(resolve,t*1000);
    })

}

function wait2(t) {

    return p = new Promise (resolve=>{
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {

    return p = new Promise (resolve=>{
        setTimeout(resolve,t*1000);
    })
}

function calculateTime(t1, t2, t3) {

    const time1 = Date.now();
    
    const p1 = wait1(t1);
    const p2 = wait1(t2);
    const p3 = wait1(t3);
    
    

    return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
        const time2 = Date.now();
        const time3 = time2 - time1;
        return time3;
    });
     

   
     
  
}
module.exports = calculateTime;
