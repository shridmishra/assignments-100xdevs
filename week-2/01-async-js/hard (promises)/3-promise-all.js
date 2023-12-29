/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
    
    

    return Promise.all([p1,p2,p3])
    .then(() => {
        const time2 = Date.now();
        const time3 = time2-time1;

        return time3; 
      })
    

}

module.exports = calculateTime;
