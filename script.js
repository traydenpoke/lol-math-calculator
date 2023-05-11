let data;

function displayItems() {
    // create a prompt div, add label & input, then add prompt to prompt-list
    for (let i = 0; i < labels.length; i++) {
        const div = document.getElementById("prompt-list");

        const input = document.createElement("input");
        input.type = "text";
        input.className = "input-text";

        const label = document.createElement("label");
        label.textContent = labels[i];

        const newdiv = document.createElement("div");
        newdiv.className = "prompt";

        newdiv.appendChild(label);
        newdiv.appendChild(input);
        div.append(newdiv);
    }
}

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
    const cost = data[data.length - 1].value;

    let value = 0;
    for (let i = 0; i < data.length - 1; i++) {
        value += data[i].value / calculations[i][0] * calculations[i][1];
    }

    const goldValue = (value / cost * 100).toFixed(2);
    return cost === "" ? "Insert the gold cost." : "The gold efficiency of this item is: " + goldValue + "%.";
}