const { getAllBromas , createChiste , deleteChiste ,
      getChiste , actualizarChiste} = require('../controllers/jokes.controller');


module.exports = app => {
    app.get('/api/bromas', getAllBromas);
    app.get('/api/bromas/:id', getChiste);
    app.post('/api/bromas/creachiste', createChiste);
    app.put('api/bromas/update/:id',actualizarChiste);
    app.delete('api/bromas/delete/:id',deleteChiste);
}