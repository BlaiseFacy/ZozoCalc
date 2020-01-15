
// ZozoCalc
let names = [];
let values = [];

// names = ["longueur"];
// values = [52,36];

let specials = [];

function remarquable(value, id) {
    let val = String(value);
    if (
        val.startsWith("0.000003141")
        || val.startsWith("0.00003141")
        || val.startsWith("0.0003141")
        || val.startsWith("0.003141")
        || val.startsWith("0.03141")
        || val.startsWith("0.3141")
        || val.startsWith("3.141")
        || val.startsWith("31.41")
        || val.startsWith("314.1")
        || val.startsWith("3141")
    ) {
        specials[id] = "π";
        return true;
    }
    if (
        val.startsWith("0.000001618")
        || val.startsWith("0.00001618")
        || val.startsWith("0.0001618")
        || val.startsWith("0.001618")
        || val.startsWith("0.01618")
        || val.startsWith("0.1618")
        || val.startsWith("1.618")
        || val.startsWith("16.18")
        || val.startsWith("161.8")
        || val.startsWith("1618")
    ) {
        specials[id] = "φ";
        return true;
    }
    if (
        val.startsWith("0.000002718")
        || val.startsWith("0.00002718")
        || val.startsWith("0.0002718")
        || val.startsWith("0.002718")
        || val.startsWith("0.02718")
        || val.startsWith("0.2718")
        || val.startsWith("2.718")
        || val.startsWith("27.18")
        || val.startsWith("271.8")
        || val.startsWith("2718")
    ) {
        specials[id] = "e";
        return true;
    }
    if (
        val.startsWith("0.000002997")
        || val.startsWith("0.00002997")
        || val.startsWith("0.0002997")
        || val.startsWith("0.002997")
        || val.startsWith("0.02997")
        || val.startsWith("0.2997")
        || val.startsWith("2.997")
        || val.startsWith("29.97")
        || val.startsWith("299.7")
        || val.startsWith("2997")
    ) {
        specials[id] = "c";
        return true;
    }
}

function test() {
    const nbItems = names.length;
    let nbResult = 0;
    let sortie = document.getElementById("sortie");
    sortie.style.visibility = "visible"
    sortie.innerHTML = "";
    for (let i = 0; i < nbItems; i++) {
        value1 = values[i];
        if (remarquable(value1, i)) {
            nbResult++;
            name1 = names[i];
            special1 = specials[i];
            sortie.innerHTML += (`${special1} : ${value1} = ${name1}<br>`);
        }
    }
    if (nbResult == 0) {
        sortie.innerHTML = ("Aucun résultat :-(<br>Pour avoir plus de succès, il faut ajouter des propriétés !");
    }
}

function combi() {
    const nbItems = names.length
    for (let i = 0; i < nbItems; i++) {
        let value1 = values[i];
        let name1 = names[i];
        names.push(`racine(${name1})`); values.push(Math.sqrt(value1));
        names.push(`1/(${name1})`);
        values.push(1 / value1);
        names.push(`2*(${name1})`);
        values.push(2 * value1);
        names.push(`3*(${name1})`);
        values.push(3 * value1);
        names.push(`5*(${name1})`);
        values.push(5 * value1);
        names.push(`7*(${name1})`);
        values.push(7 * value1);
        names.push(`(${name1})/2`);
        values.push(value1 / 2);
        names.push(`(${name1})/3`);
        values.push(value1 / 3);
        names.push(`(${name1})/5`);
        values.push(value1 / 5);
        names.push(`(${name1})/7`);
        values.push(value1 / 7);

        for (let j = i; j < nbItems; j++) {
            let value2 = values[j];
            let name2 = names[j];
            names.push(`(${name1})*(${name2})`);
            values.push(value1 * value2);
            names.push(`(${name1})+(${name2})`);
            values.push(Number(value1) + Number(value2));
        }
        for (let k = 0; k < nbItems; k++) {
            if (k !== i) {
                let value2 = values[k];
                let name2 = names[k];
                if (value2 !== 0) {
                    names.push(`(${name1})/(${name2})`);
                    values.push(value1 / value2);
                }
                if (value1 > value2) {
                    names.push(`(${name1})-(${name2})`);
                    values.push(value1 - value2);
                }
            }
        }
    }
}

// console.log("\ndébut des tests...\n")
// combi();
// combi();
// test();
// console.log("fin des tests !")
