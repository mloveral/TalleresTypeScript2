import { series } from "./data.js";

let sumaTemporadas: number = 0;
mostrarSeries();
mostrarSeasonsAverage();

function mostrarSeries() {
    var tableBody = document.getElementById("table-body");
    let nuevoContenido: string = ``;

    series.forEach(serie => {
        nuevoContenido = nuevoContenido.concat(`
            <tr>
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
    }
}

function mostrarSeasonsAverage() {
    let promedio: number = sumaTemporadas / series.length;
    var seasonsAverage = document.getElementById("season-average");
    if (seasonsAverage) {
        seasonsAverage.innerHTML += String(promedio);
    }
}