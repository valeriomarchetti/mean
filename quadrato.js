var stringa = "Calcolo dell'area e del perimetro";
exports.titolo = stringa;

exports.area = function(lato) {
    return lato*lato;
}

exports.perimetro = function(lato) {
    return lato*4;
}