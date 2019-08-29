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

        console.log('verificacion de token');

        next();
    });


};


//===========================
//   Verificar AdminRole
//===========================

let verificaAdmin_Role = (req, res, next) => {
    let admin = req.usuario.role;
    console.log(admin);

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

module.exports = {
    verificarToken,
    verificaAdmin_Role
}