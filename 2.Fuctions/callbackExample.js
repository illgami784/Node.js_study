const list=[1,2,3,4,5,6,7,8,9,10];


const callbackExample=(arr,callback)=>{
    setTimeout(() => {
        let sum=0;
        sum=arr.reduce((a,b)=>(a+b));
        callback(sum);
    }, 0);
}
callbackExample(list,function(result){

        console.log(result);

    }); 

    console.log('first');