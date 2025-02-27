const inputPasswordRandom = document.getElementById("passwordRandom") as HTMLInputElement;
const btnCreate = document.getElementById("btnCreate") as HTMLButtonElement;
const divCreate = document.getElementById("divCreate") as HTMLDivElement;
const spanGeneratedPassword = document.getElementById("generated-password") as HTMLSpanElement;

interface CharacterGroups {
    upperCase: string;
    lowerCase: string;
    numbers: string;
    symbol: string;
}

const characterSets: CharacterGroups = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbol: "!@#$%^&*()_+=-"
};

btnCreate.addEventListener("click", function () {
    let charPool = "";

    charPool += characterSets.upperCase;
    charPool += characterSets.lowerCase;
    charPool += characterSets.numbers;
    charPool += characterSets.symbol;

    const passwordLength = 8;
    const password = Array.from({ length: passwordLength }, () =>
        charPool[Math.floor(Math.random() * charPool.length)]
    ).join("");


    inputPasswordRandom.value = password;
});
