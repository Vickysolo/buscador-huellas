const db = require('mongoose');


db.Promise = global.Promise;

exports.connect = async (url) => {
    await db.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => {
        console.log('[db connection] Database connected');
    })
    .catch(error => {
        console.error('[db connection] Conection failed', error.message)
    })

}


