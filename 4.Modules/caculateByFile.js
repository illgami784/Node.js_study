const fs=require('fs');
let calresult=0;
new Promise((resolve,reject)=>
{
    fs.readFile('./input.txt',(err,data)=>
    {
        if(err)
            throw err;
        const readfiledata= data.toString();
        splited=readfiledata.split(",");
        if(splited[1]=='*')
            calresult= Number(splited[0])*Number(splited[2]);
            console.log(calresult+"1");
            resolve(calresult);
    })

}).then((cal)=>{
fs.writeFile('./output.txt',cal,(err)=>{
    if(err)
        throw err;
})
}
)


