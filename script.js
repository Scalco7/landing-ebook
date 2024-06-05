"use strict";

window.onload = function () {
    typeWriterControl();
}

function scrollToPayment() {
    document.getElementById("buy-all").scrollIntoView({ block: "nearest" })
}

function typeWriterControl() {
    const element = document.getElementById('box-titles').children;
    let textArray = [];

    for (const key in element) {
        if (element[key].innerHTML) {
            let list = element[key].innerHTML.split("");
            textArray.push(list);

            element[key].innerHTML = "";
        }
    }

    let time = 0;

    textArray.forEach((list, i) => {
        const interval = 95;
        setTimeout(() => {
            element[i].id = "type-writter"
            list.forEach((letter, j) => {
                setTimeout(() => { 
                    element[i].innerHTML += letter; 
                    if(j == list.length - 1)
                        element[i].id = "";
                }, (interval * j));
            });
        }, time);

        time += list.length * interval;
    });
}