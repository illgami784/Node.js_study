let address="";

const country=(addr)=>{
    addr+="대한민국 ";
    const province=(addr)=>{
        addr+="경기도 ";
        const city=(addr)=>{
            addr+="용인시 ";
            console.log("original : "+addr);
        }
        return city(addr);
    }
    return province(addr);
}

const promiseCountry=(addr)=>{
    return new Promise((resolve,reject)=>{
        // 이곳에 코드를 입력하세요.
        resolve(addr+"대한민국 ");
    });
}
const promiseProvince=(addr)=>{
    return new Promise((resolve,reject)=>{
        // 이곳에 코드를 입력하세요.
        resolve(addr+"경기도 ");
    });
}
const promiseCity=(addr)=>{
    return new Promise((resolve,reject)=>{
        // 이곳에 코드를 입력하세요.
        resolve(addr+"용인시 ");
    });
}



const asyncAddress= async(addr)=>
{
    //이곳에 코드를 입력하세요
    try
    {
        let first=await promiseCountry(addr);
        let second=await promiseProvince(first);
        let third=await promiseCity(second);
        console.log("async/await : ",third);
    }
    catch(err)
    {
        console.error(err);
    }
}


country(address);
address="";
promiseCountry(address)
    .then(promiseProvince)
    .then(promiseCity)
    .then((result)=>
    {
        console.log("promise : ",result);
    })
address="";
asyncAddress(address);