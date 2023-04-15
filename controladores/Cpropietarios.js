const propietarios = require ("../modelos/propietarios");

const newPropietario = async function (req, res) {
    let nuevo = { RFC: req.query.RFC, Nombre: req.query.Nombre };
    await propietarios.default.push(nuevo);
    await res.json("Nuevo propietario agregado");
}

const readPropietarios = async function (req, res) {
    let datas = await propietarios.default;
    await res.json(datas);
}

const readPropietario = async function (req, res) {
    let datas = await propietarios.default.find(prop => prop.RFC === req.params.RFC);
    await res.json(datas);
}

const modifiPripietario = async function (req, res) {
    let datas = await propietarios.default.find(prop => prop.RFC === req.params.RFC);
    datas.Nombre = req.query.Nombre;
    await res.json(datas);
}

const deletePropietarios = async function (req, res) {
    propietarios.default = await propietarios.default.filter((prop) => prop.RFC !== req.params.RFC);
    await res.json(propietarios.default);
}


module.exports.newPropietario = newPropietario;
module.exports.readPropietarios = readPropietarios;
module.exports.readPropietario = readPropietario;
module.exports.modifiPripietario = modifiPripietario;
module.exports.deletePropietarios = deletePropietarios;