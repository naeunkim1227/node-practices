module.exports = {
    join: function(req,res){
        res.render('user/join');
    },

    _join: function(req,res){
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
        res.redirect('user/joinsuccess')
    },
    
    joinsuccess: function(req,res){
        res.redirect('user/joinsuccess')
    }
}