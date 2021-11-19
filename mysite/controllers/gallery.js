const fs = require('fs');
const path = require('path');
const models = require('../models');


module.exports = {
    index: async function(req,res,next){
        const results = await models.Gallery.findAll({
            atttributes: ['no','url', 'comment']
            ,order: [ ['no', 'desc'] ]
        })
        res.render('gallery/index', {results})
    },
    upload: async function(req,res,next){
        try{
        const file  = req.file;
        console.log(file);
            if(file){
                
                const contents = fs.readFileSync(file.path);
                console.log("req.main.filename" + require.main.filename);
                const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.UPLOADIMAGE_STORE_LOCATION);
                const storePath = (path.join(storeDirectory, file.filename)) + path.extname(file.originalname);
                const url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename) +  path.extname(file.originalname);

                console.log(storeDirectory, storePath , url);

                fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
                fs.writeFileSync(storePath, content, {flag: 'w+'});
                fs.unlinkSync(file.path);


                await models.Gallery.create({
                    //웬도우에서 하는법...?
                    url: url.replace(/\\/gi, '/'),
                    comment: req.body.comment || ''
                })

            }


        res.redirect('/gallery');


        }catch(e){
            next(e);
        }
    }

}