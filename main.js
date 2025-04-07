"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const tableBody = document.getElementById("table-body");
let nuevoContenido = ``;
data_js_1.series.forEach(serie => {
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
