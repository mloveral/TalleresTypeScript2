"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const tableBody = document.getElementById("table-body");
let nuevoContenido = ``;
data_1.series.forEach(serie => {
    nuevoContenido = nuevoContenido.concat(`
        <tr>
            <th scope="row">${serie.getId()}</th>
            <td><a href="${serie.getLink()}">${serie.getName()}</a></td>
            <td>${serie.getChannel()}</td>
            <td>${serie.getSeasons()}</td>
        </tr>
    `);
});
if (tableBody) {
    tableBody.innerHTML = nuevoContenido;
}
