var data;

function saveData() {
    data = document.getElementsByClassName("input-text");
    for (let i = 0; i < data.length; i++) {
        let value = data[i].value;
        if (value === "") {
            data[i] = 0;
        }
    }

    var text = document.getElementById("text");
    text.textContent = calculate();

}

function calculate() {
    const cost = data[15].value;

    var value = 0;

    value += data[0].value / 10 * 350;
    value += data[1].value / 12 * 300;
    value += data[2].value / 10 * 291.5235;
    value += data[3].value / 18 * 750;
    value += data[4].value / 7 * 375;
    value += data[5].value / 15 * 600;
    value += data[6].value / 20 * 435;
    value += data[7].value / 18 * 560;
    value += data[8].value / 13 * 706.25;
    value += data[9].value / 10 * 266.67;
    value += data[10].value / 250 * 350;
    value += data[11].value / 150 * 400;
    value += data[12].value / 15 * 300;
    value += data[13].value / 25 * 450;
    value += data[14].value / 25 * 300;


    const goldValue = (value / cost * 100).toFixed(2);
    return cost === "" ? "Insert the gold cost." : "The gold efficiency of this item is: " + goldValue + "%.";
}