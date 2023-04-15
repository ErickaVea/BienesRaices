const arrendatarios = require ("../modelos/arrendatarios");

const newArrendatario = async function (req, res) {
    let nuevo = { RFC: req.query.RFC, Nombre: req.query.Nombre };
    await arrendatarios.default.push(nuevo);
    await res.json("Nuevo arrendatario agregado");
}

const readArrendatarios = async function (req, res) {
    let datas = await arrendatarios.default;
    await res.json(datas);
}

const readArrendatario = async function (req, res) {
    let datas = await arrendatarios.default.find(arre => arre.RFC === req.params.RFC);
    await res.json(datas);
}

const modifiArrendatario = async function (req, res) {
    let datas = await arrendatarios.default.find(arre => arre.RFC === req.params.RFC);
    datas.Nombre = req.query.Nombre;
    await res.json(datas);
}

const deleteArrendatarios = async function (req, res) {
    arrendatarios.default = await arrendatarios.default.filter((arre) => arre.RFC !== req.params.RFC);
    await res.json(arrendatarios.default);
}


module.exports.newArrendatario = newArrendatario;
module.exports.readArrendatarios = readArrendatarios;
module.exports.readArrendatario = readArrendatario;
module.exports.modifiArrendatario = modifiArrendatario;
module.exports.deleteArrendatarios = deleteArrendatarios;