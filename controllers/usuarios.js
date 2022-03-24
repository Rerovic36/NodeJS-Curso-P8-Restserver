const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'Sin nombre', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'got it - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut =  (req, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'got it put',
        id
    });
}
const usuariosPost = (req, res = response) => {

    const { nombre, number } = req.body;

    res.json({
        msg: 'got it post',
        nombre, 
        number
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'got it delete'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'got it patch'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}