const {response} = require('express');
const {validationResult} = require('express-validator');
const validateFields = (req, res = response, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors: errores.mapped() //Mappped toma cada uno de los errores y los mostrara
        });
    }
    next();
}

module.exports = {
    validateFields
}