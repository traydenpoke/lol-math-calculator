let data;

function saveData() {
    data = document.getElementsByClassName("input-text");
    for (let i = 0; i < data.length; i++) {
        let value = data[i].value;
        if (value === "") {
            data[i] = 0;
        }
    }

    let text = document.getElementById("text");
    text.textContent = calculate();

}

function calculate() {
    const cost = data[19].value;

    let value = 0;

    value += data[0].value / 10 * 350;          // Attack Damage
    value += data[1].value / 12 * 300;          // Attack Speed
    value += data[2].value / 10 * 291.5235;     // Lethality
    value += data[3].value / 18 * 750;          // % Armor Pen
    value += data[4].value / 7 * 375;           // Lifesteal
    value += data[5].value / 5 * 198.33;           // Omnivamp
    value += data[6].value / 15 * 600;          // Crit Chance
    value += data[7].value / 20 * 435;          // Ability Power
    value += data[8].value / 18 * 560;          // Flat Magic Pen
    value += data[9].value / 13 * 706.25;       // % Magic Pen
    value += data[10].value / 10 * 266.67;       // Ability Haste
    value += data[11].value / 250 * 350;        // Mana
    value += data[12].value / 50 * 250;         // Mana Regen
    value += data[13].value / 8 * 550;          // Heal & Shield Power
    value += data[14].value / 150 * 400;        // Health
    value += data[15].value / 100 * 300;        // Health Regen
    value += data[16].value / 15 * 300;         // Armor
    value += data[17].value / 25 * 450;         // Magic Resistance
    value += data[18].value / 25 * 300;         // Movement Speed


    const goldValue = (value / cost * 100).toFixed(2);
    return cost === "" ? "Insert the gold cost." : "The gold efficiency of this item is: " + goldValue + "%.";
}