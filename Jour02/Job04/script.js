"use strict"

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        if (event.code !== `Key${event.key.toUpperCase()}`) return;
        document.getElementById("keylogger").value += event.key
    });
})