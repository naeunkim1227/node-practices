const models = require('../models');

module.exports = {
    join: function(req,res){
        res.render('user/join');
    },

    _join: async function(req,res,next){
        //_ post 방식이라는 뜻
        console.log(req.body);
        //데이터 값을 모두 가져온다. 
        /*
            {
            name: '에디',
            email: 'eddy@maim.com',
            password: 'sdf',
            gender: 'female'
            }
        */
        try{
            await models.User.create({
                name : req.body.name,
                email : req.body.email,
                password: req.body.password,
                gender : req.body.gender
            })
        }catch(e){
            next(e);
        }


        res.redirect('user/joinsuccess');
    },
    
    joinsuccess: function(req,res){
        res.redirect('user/joinsuccess');
    },
    login: function(req,res){
        res.render('user/login')
    },
    _login: async function(req,res,next){
        //_ post 방식이라는 뜻
        console.log(req.body);
        //데이터 값을 모두 가져온다. 
        /*
            {
            name: '에디',
            email: 'eddy@maim.com',
            password: 'sdf',
            gender: 'female'
            }
        */
        try{
            const user = await models.User.findOne({
                attributes : ['no', 'name', 'role'],
                where : {
                    email: req.body.email,
                    password: req.body.password
                }
            });
        
            if(user == null){
                //정보가 없으면 login창으로 넘기되, 실패 정보 데이터를 같이 전달한다.
                res.render('user/login', Object.assign(req.body , {result: 'fail'}));
                return;
            }

        console.log("세션처리!!");
        req.session.authUser = user;


        res.redirect('/');

        }catch(e){
            next(e);
        }


    },

    logout: async function(req,res,next){
        try{
        await req.session.destory(); 
        res.redirect('/');
        }catch(e){
            next(e);
        }
    },
    update: async function(req,res, next){
        try{
            const user = await models.User.findOne({
                attributes: ['no','email','name', 'gender'],
                where: {
                    no: req.session.authUser.no
                }
            });

            res.render('user/update', {user});
        }catch(e){
                next(e);
            }
    },
    _update: async function(req,res, next){
        try{
          
        }catch(e){
                next(e);
         }
    }
}