//Visszatérés érték és paraméter nélküli eljárás
function IloveTypeScript() {
    document.write("Szeretem a Typescriptet");
}
//Visszatérési érték nélkli és paramétres eljárás
function NegyzetKeruleteTerulete(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write('<br>Az  ${a}oldalú négyzet kerülete:${kerulet}');
    document.write('<br>Az  ${a}oldalú négyzet területe:${terulet}');
}
//Visszatérési értékes és paraméter nélküli függvény
function RandomGenerali100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
