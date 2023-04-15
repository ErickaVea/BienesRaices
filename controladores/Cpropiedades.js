const propiedades = require("../modelos/propiedades");
const arrendatarios = require("../modelos/arrendatarios");
const propietarios = require("../modelos/propietarios");

const CreatePropiedad = async function (req, res) {
    let nuevo = { clave_catastral: req.query.clave, descripcion: req.query.desc, propietarios: [], arrendatarios: [] };
    await propiedades.default.push(nuevo);
    await res.json("Nueva Propiedad Agregada");
}

const AllPropiedades = async function (req, res) {
    let datas = await propiedades.default;
    await res.json(datas);
}

const DeletePropiedad = async function (req, res) {
    propiedades.default = await propiedades.default.filter((prop) => prop.clave_catastral !== req.params.clave)

    await res.json(propiedades.default);

}

const AddPropietario = async function (req, res) {
    let propiedad = await propiedades.default.find(prop => prop.clave_catastral === req.query.clave);
    if (propiedad == null) {
        await res.json("No se encontro la propiedad");
    } else {
        let propietario = await propietarios.default.find(prop => prop.RFC === req.query.RFC);

        if (propietario == null) {
            await res.json("No se encontro el propietario");
        }
        else {
            
            await propiedad.propietarios.push(propietario);
            await res.json("Propietario seleccionado");
        }
    }

}

const DeletePropietario = async function (req, res) {
    let propiedad = await propiedades.default.find(prop => prop.clave_catastral === req.query.clave);
    if (propiedad == null) {
        await res.json("No se encontro la propiedad");
    } else {
        let propietario = await propietarios.default.find(prop => prop.RFC === req.query.RFC);
        if (propietario == null) {
            await res.json("No existe el propietario");
        }
        else {

            if (propiedad.propietarios.find(prop => prop.RFC === propietario.RFC)) {

                propiedad.propietarios = await propiedad.propietarios.filter((prop) => prop.RFC !== propietario.RFC)
                await res.json("Eliminado");
            } else {

                await res.json("No se encontro el propietario");
            }

        }
    }

}


const AddArrendatario = async function (req, res) {
    let propiedad = await propiedades.default.find(arre => arre.clave_catastral === req.query.clave);
    if (propiedad == null) {
        await res.json("No se encontro la propiedad");
    } else {
        let arrendatario = await arrendatarios.default.find(arre => arre.RFC === req.query.RFC);

        if (arrendatario == null) {
            await res.json("No se encontro el arrendatario");
        }
        else {
            if(propiedad.arrendatario.length < 1){
                await propiedad.arrendatario.push(arrendatario);
                await res.json("Nuevo arrendatario agregado");
            }else{
                await res.json("Solo puede haber un solo arrendatario");  
            }
           
            
        }
    }

}

const DeleteArrendatario = async function (req, res) {
    let propiedad = await propiedades.default.find(arre => arre.clave_catastral === req.query.clave);
    if (propiedad == null) {
        await res.json("No se encontro la propiedad");
    } else {
        let arrendatario = await arrendatarios.default.find(arre => arre.RFC === req.query.RFC);
        if (arrendatario == null) {
            await res.json("No se encontro el arrendatario");
        }
        else {

            if (propiedad.arrendatario.find(arre => arre.RFC === arrendatario.RFC)) {

                propiedad.arrendatario = await propiedad.arrendatario.filter((arre) => arre.RFC !== arrendatario.RFC)
                await res.json("Eliminado");
            } else {

                await res.json("No se encontro el registro del arrendatario");
            }

        }
    }

}


module.exports.CreatePropiedad = CreatePropiedad;
module.exports.AllPropiedades = AllPropiedades;
module.exports.DeletePropiedad = DeletePropiedad;
module.exports.AddPropietario = AddPropietario;
module.exports.DeletePropietario = DeletePropietario;
module.exports.AddArrendatario = AddArrendatario;
module.exports.DeleteArrendatario = DeleteArrendatario;