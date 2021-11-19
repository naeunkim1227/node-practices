const {DataTypes} = require('sequelize');


module.exports = function(sequelize){
    return sequelize.define('User', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(200),
            allowNull: false
    
        },
        password : {
            field: 'password',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        gender : {
            field: 'gender',
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false
        },
        role : {
            field: 'role',
            type: DataTypes.ENUM('USER', 'ADMIN'),
            allowNull: false,
            defaultValue: 'USER'
        }
    
    },{
        //초기화 될떄, 테이블을 만들것인지, 정보를 변경할 때 DB에 있는 테이블의 데이터도 변경할 것인지에 대한 설정도 작성한다.
        timestamps: false,
        freezeTableName: true,  //테이블 이름 고정?
        underscored: true, 
        createdAt: false, //초기화 할때 테이블 생성하냐
        updateAt: false, //업데이트 할때 안에 있던 데이터도 맞게 변경할 것이냐.
        tableNAme: 'user' //테이블 이름
    });
    
}

//객체를 정의 해줘야한다. 객체 정보를 알아야, 쿼리 작성 가능
//user라는 객체는 다음과 같이 정의 되어 있다.
/*
no: {
        field: 'no',
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
no는 받아오는 데이터 이름, field는 컬럼이름 , type 유형, autoincrement등 지정가능
*/ 
