const Broma = require('../models/jokes.models')


// metodo para obtener todos los chistes
module.exports.getAllBromas = async (req,res) => {
    try {
        const bromas = await Broma.find();
        return res.json({ bromas })
    } catch(err){
        return res.json({message: 'No hemos podido traer los chistes', error: err})
    }
}

// metodo para crear un chiste
module.exports.createChiste = (req, res) => {
    Broma.create(req.body)
        .then(newChiste => res.json({ newChiste }))
        .catch(err => res.status(500).json(err));
}

// metodo para borrar un chiste
module.exports.deleteChiste = (req, res) => {
    Broma.deleteOne({_id: req.params.id})
        .then((result) => res.json({result}))
        .catch(err => res.status(500).json({ err }))
}

// metodo para obtener un chiste en especifico
module.exports.getChiste = (req, res) => {
    Broma.findById(req.params.id)
        .then(unaBroma => res.json({ unaBroma }))
        .catch(err => res.status(500).json({ err }));
}

// metodo para actualizar un chiste
module.exports.actualizarChiste = (req, res) => {
    Broma.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ err }));
};
