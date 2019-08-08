const exprexss=require('express');
const app=exprexss();
const fs=require('fs');
let counter=0;

app.listen(3000,()=>{
    console.log("server is connected");
})

app.get('/',(req,res)=>{
    fs.readFile('./counterMain.html',(err,data)=>
    {
        if(err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});

        res.end(data);
    });
});

app.post('/increase',(req,res)=>{
    counter+=1;
    res.redirect('/');
    console.log(counter);

})

app.post('/decrease',(req,res)=>{
    counter-=1;
    res.redirect('/');
    console.log(counter);

})

app.get('/show',(req,res)=>{
    res.send(String(counter));

    console.log(counter);
})