const express = require('express');
const {Content} = require('../models');
const router = express.Router();

router.get('/', async (req,res,next)=>{
    try{
        await Content.findAndCountAll({})
        .then((post)=>{
            res.render('index',{ //post로 담아온 객체를 전송
                post, //값을 넣지 않은 프로퍼티는 post:post로 처리
                postcount:post.count,
            })
        })
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/posts', async(req,res,next)=>{
       try {
            await Content.create({ //동기적 처리를 위해 async/await
            content:req.body.posts,
        });
        res.redirect('/');
    } catch(error) {
        console.error(error);
        next(error);
    }
});

module.exports=router;