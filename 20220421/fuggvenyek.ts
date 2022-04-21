//Visszatérés érték és paraméter nélküli eljárás
function IloveTypeScript(): void {
    document.write("Szeretem a Typescriptet");
}

//Visszatérési érték nélkli és paramétres eljárás
function NegyzetKeruleteTerulete(a: number): void {
    let kerulet: number = 4 * a;
    let terulet: number = a * a;
    document.write('<br>Az  ${a}oldalú négyzet kerülete:${kerulet}');
    document.write('<br>Az  ${a}oldalú négyzet területe:${terulet}');
}

//Visszatérési értékes és paraméter nélküli függvény
function RandomGenerali100Fuggveny(): number {
    return Math.round(Math.random() * 100);
}


//Visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}