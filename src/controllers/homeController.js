home = (req, res) => {
    let nombre = "Satoru Gojo";
    const paises =[
        {
            nombre:"Chile",
            nic:"cl"
        },
        {
            nombre: "Perú",
            nic: "pe"
        },
        {
            nombre: "Bolivia",
            nic: "bo"
        },
        {
            nombre: "Argentina",
            nic: "ar"
        },
        {
            nombre: "Venezuela",
            nic: "ve"
        }
    ];
    return res.render("home/home", { tituloPagina: "Inicio", nombre, paises });
    
}

module.exports = {
    home
}