"use strict";
const inputPasswordRandom = document.getElementById("passwordRandom");
const btnCreate = document.getElementById("btnCreate");
const divCreate = document.getElementById("divCreate");
const spanGeneratedPassword = document.getElementById("generated-password");
const characterSets = {
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
    const password = Array.from({ length: passwordLength }, () => charPool[Math.floor(Math.random() * charPool.length)]).join("");
    inputPasswordRandom.value = password;
});
