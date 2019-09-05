const jwt = require('jsonwebtoken');

//===========================
//   Verificar Token
//===========================

let verificarToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no válido"
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });


};


//===========================
//   Verificar AdminRole
//===========================

let verificaAdmin_Role = (req, res, next) => {
    let admin = req.usuario.role;

    if (admin !== 'ADMIN_ROLE') {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'El usuario no es un administrador'
            }
        });
    }

    next();
}


//===========================
//   Verificar Token Imagen
//===========================

let verificarTokenImg = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no válido"
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });

}


module.exports = {
    verificarToken,
    verificaAdmin_Role,
    verificarTokenImg
}