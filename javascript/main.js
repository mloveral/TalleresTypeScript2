import { series } from "./data.js";
let sumaTemporadas = 0;
mostrarSeries();
mostrarSeasonsAverage();
function mostrarSeries() {
    var tableBody = document.getElementById("table-body");
    let nuevoContenido = ``;
    series.sort((a, b) => a.id - b.id);
    series.forEach(serie => {
        nuevoContenido = nuevoContenido.concat(`
            <tr id="${serie.id}">
                <th scope="row">${serie.id}</th>
                <td><a href="${serie.link}">${serie.name}</a></td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            </tr>
        `);
        sumaTemporadas += serie.seasons;
    });
    if (tableBody) {
        tableBody.innerHTML = nuevoContenido;
        series.forEach(serie => {
            let row = document.getElementById(`${serie.id}`);
            if (row) {
                row.addEventListener("click", listenerFun);
            }
            console.log(serie.id);
            console.log(row);
        });
    }
    else {
        console.error("No se ha encontrado el elemento con el id: table-body");
    }
}
function mostrarSeasonsAverage() {
    let promedio = sumaTemporadas / series.length;
    var seasonsAverage = document.getElementById("season-average");
    if (seasonsAverage) {
        seasonsAverage.innerHTML += String(promedio);
    }
}
function listenerFun(ev) {
    ev.preventDefault();
    mostrarCardSerie(Number(this.id));
}
function mostrarCardSerie(id) {
    let contenidoCard = document.getElementById("card-serie");
    let serie = series.find(serie => serie.id === id);
    if (contenidoCard && serie) {
        contenidoCard.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${serie.img}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">${serie.genre}</p>
                <a href="${serie.link}" class="btn btn-primary">Ver en ${serie.channel}</a>
            </div>
        </div>
        `;
    }
    else {
        console.error("No se ha encontrado la serie con el id: " + id);
    }
}
