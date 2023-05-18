const nombre = "Iara";
const edad = 24;
const dev = true;
const fecha_nacimiento = new Date("December 04 1998")
const libro_favorito = {
    Titulo: "Asesinato en Mesopotamia",
    Autor: "Agatha Christie",
    Fecha_De_Lanzamiento: "6 de Julio de 1936",
    Url: "https://articulo.mercadolibre.com.ar/MLA-1354128878-libro-asesinato-en-mesopotamia-agatha-christie-_JM#position=2&search_layout=stack&type=item&tracking_id=d05536e5-cd98-4894-882f-03c3488db153",
}

console.log(nombre);

console.log(edad);

if (dev) {
    console.log("Eres desarrollador")
} else (dev = false) 
    console.log("No eres desarrollador")

console.log(fecha_nacimiento);

console.log(libro_favorito.Autor);