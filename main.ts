import { series } from "./data.js";

const tableBody = document.getElementById("table-body");
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
});

if (tableBody) {
    tableBody.innerHTML = nuevoContenido;
}