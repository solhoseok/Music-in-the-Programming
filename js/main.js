////////////////////////////////////////////API CON VUE///////////////////////////////////////////////



const { createApp } = Vue



createApp({
  data() {
    return {
      url: 'https://audius-discovery-9.cultur3stake.com/v1/tracks/trending?app_name=EXAMPLEAPP',
      canciones: []
    };
  },
  methods: {
    fetchData(url){
      fetch(url) 
          .then(response=>response.json())
          .then(data => {
              console.log(data)
              this.canciones = data.data
            }
          );

    }
  },
  created(){
    this.fetchData(this.url)
  }
    
}).mount('#app')



///////////////////////////////////////////////////MENU HAMBURGUESA///////////////////////////////////////////
const nav = document.querySelector("#nav");
const abrir =document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
} )

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/////////////////////////////////////////////////LOGIN///////////////////////////////////////////////

function abrirForm() {
  document.getElementById("myForm").style.display = "block";
}

function cerrarForm() {
  document.getElementById("myForm").style.display = "none";
}





///////////////////////////////////////////VENTANA EMERGENTE AL CLICKEAR REGISTRO/////////////////////////////////////////////////



const ventana = document.querySelector("#ventana");
const abrirRegistro =document.querySelector("#abrirRegistro");
const cerrarRegistro = document.querySelector("#cerrarRegistro");

abrir.addEventListener("click", ()=>{
    ventana.classList.add("modal-visible");
} )

cerrar.addEventListener("click", () => {
    ventana.classList.remove("modal-visible");
})
















/*datCard = [
    {   
        nomFront:"Gustavo Cerati",
        nombre: "Gustavo Cerati",
        descripcion: "Gustavo Adrián Cerati (Barracas, Buenos Aires, 11 de agosto de 1959-Núñez, Buenos Aires, 4 de septiembre de 2014), conocido como Gustavo Cerati, fue un músico, cantautor y productor discográfico argentino que obtuvo reconocimiento internacional por haber sido el líder, vocalista, compositor y guitarrista de la banda de rock Soda Stereo.",
        detalles: "Detalles"
    },
    {
        nomFront: "BTS",
        nombre: "BTS",
        descripcion: "BTS (en hangul, 방탄소년단; romanización revisada del coreano, Bangtan Sonyeondan; literalmente, «Bulletproof Boy Scouts»), también conocido como Bangtan Boys, es un grupo surcoreano formado en 2010. Está compuesto por siete integrantes: Jin, Suga, J-Hope, RM, Jimin, V y Jungkook. A pesar de haber sido creado con un estilo principalmente hip hop.",
        detalles: "Detalles"
    },
    {
        nomFront: "Beagle",
        nombre: "Beagle",
        descricion: "El beagle es una raza de perro de tamaño pequeño a mediano. Tiene un aspecto similar al foxhound, pero de menor tamaño, con patas más cortas y orejas más largas y caídas.",
        detalles: "Detalles"
    }
]

function infoCards(array){

    for (let i = 0; i < array.length; i++) {

        `<div class="card">
            <div class="face front">
                <img src="imagenes/bts 3.jpg" alt="">
                <h3>${[i.nomFront]}</h3>
            </div>
            <div class="face back">
                <h3>${[i.nombre]}</h3>
                <P>${[i.descricion]}</P>
                <div class="link">
                    <a href="#">Detalles</a>
                </div>
            </div>
        </div>`
        
        
    }





}

console.log(datCard);
*/
