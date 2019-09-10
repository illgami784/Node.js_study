const fs=require('fs')
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const session=require('express-session');
app.use(bodyParser.urlencoded({extended:true}));
let users=new Array();

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}));



app.get('/',(req,res)=>{
    res.redirect('/html/signup.html');
})



app.get('/html/signup.html',(req,res)=>{
    
    fs.readFile('./html/signup.html',(err,data)=>{
        if(err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});

        res.end(data);
    });
})



app.post('/signup',(req,res)=>{
    const userid=req.body.userId;
    const password=req.body.password;
    const studentid=req.body.studentId;
    const name=req.body.name;
    
    let userex=users.filter((item)=>{
        return item.userid==userid;
    })
    if(userex==''){
        users.push({'userid':userid,'password':password,'studentid':studentid,'name':name});
        res.redirect('/html/login.html');
    }
    else{
        res.send('User already exists');
    }
})


app.get('/html/login.html',(req,res)=>{
    
    fs.readFile('./html/login.html',(err,data)=>{
        if(err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});

        res.end(data);
    });
})

app.post('/login',(req,res)=>{
    const checkid=req.body.userId;
    const checkpw=req.body.password;


    let check1=users.filter((item)=>{
        return item.userid==checkid;
    })
    let check2=check1.filter((item)=>{
        return item.password=checkpw;
    })

    if(check2!='')
    {
        req.session.userid=req.body.userId;
        res.redirect('/profile');
    }
})

app.get('/profile',(req,res)=>{
    const profile=users.filter((item)=>{
        return item.userid==req.session.userid;
    })
    res.json(profile);
})



app.listen(3000,()=>{
    console.log("server run");
})