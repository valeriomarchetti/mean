module.exports = (function() {
    
    var sayHelloInEnglish = function(name) {
        return 'Hello ' + name;
    }
    var sayHelloInSpanish = function(name) {
        return 'Hola ' + name;
    }

    return {
        name: "Modulo Say Hello",
        version: "1.0.0",
        author: "Paolo, Michele",
        sayHelloInEnglish: sayHelloInEnglish,
        sayHelloInSpanish: sayHelloInSpanish,
    }

})();