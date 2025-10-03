export function ejemploFor() {

    const frutas = [
        "🍎 Manzana",
        "🍌 Plátano",
        "🍍 Piña",
        "🍓 Fresa",
        "🍇 Uvas",
        "🥭 Mango",
        "🍊 Naranja",
        "🍉 Sandía",
        "🥝 Kiwi",
        "🍑 Melocoton"
    ];

    for (let index = 0; index < frutas.length; index++) {

        if (index == 2) {
            console.log(frutas[index]);
        }
    }

}