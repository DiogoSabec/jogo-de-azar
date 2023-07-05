var walletBalance = 0;

function updateWalletBalance() {
    var walletBalanceElement = document.getElementById("walletBalance");
    walletBalanceElement.textContent = walletBalance.toFixed(2);
}

function loadWalletBalance() {
    var storedBalance = localStorage.getItem("walletBalance");
    if (storedBalance) {
        walletBalance = parseFloat(storedBalance);
        updateWalletBalance();
    }
}

function withdrawFromWallet(withdrawAmount) {
    if (withdrawAmount > walletBalance) {
        alert("Insufficient funds. Cannot withdraw more than the current balance.");
        return;
    }

    walletBalance -= withdrawAmount;
    updateWalletBalance();

    // Salve o novo saldo da carteira no Local Storage
    localStorage.setItem("walletBalance", walletBalance);
}

function addToWallet() {
    var amountInput = document.getElementById("amountInput");
    var amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount to add to your wallet.");
        return;
    }

    walletBalance += amount;
    updateWalletBalance();
    amountInput.value = "";

    // Salve o novo saldo da carteira no Local Storage
    localStorage.setItem("walletBalance", walletBalance);
}

function apostar() {
    var colorSelect = document.getElementById("colorSelect");
    var selectedColor = colorSelect.value;
    var valorApostaInput = document.getElementById("valorAposta");
    var valorAposta = parseFloat(valorApostaInput.value);

    if (isNaN(valorAposta) || valorAposta <= 0) {
        alert("Please enter a valid amount to bet.");
        return;
    }

    if (valorAposta > walletBalance) {
        alert("Insufficient funds. Cannot bet more than the current balance.");
        return;
    }

    // Deduzir o valor da aposta do saldo da carteira
    walletBalance -= valorAposta;
    updateWalletBalance();

    var cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink'];
    var corSorteada = cores[Math.floor(Math.random() * cores.length)];

    if (selectedColor === corSorteada) {
        var multiplier = parseFloat(document.getElementById(selectedColor).textContent);
        var ganho = valorAposta * multiplier;
        walletBalance += ganho;
        updateWalletBalance();
        document.getElementById('resultado').innerText = "Congratulations! You won! You bet on the color " + selectedColor + " and the drawn color was " + corSorteada + ". You earned $" + ganho.toFixed(2) + ".";
    } else {
        document.getElementById('resultado').innerText = "Sorry, you lost. You bet on the color " + selectedColor + ", but the drawn color was " + corSorteada + ".";
    }

    // Salve o novo saldo da carteira no Local Storage
    localStorage.setItem("walletBalance", walletBalance);

    valorApostaInput.value = "";
}

document.getElementById("withdrawForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var withdrawAmountInput = document.getElementById("withdrawAmount");
    var withdrawAmount = parseFloat(withdrawAmountInput.value);
    withdrawFromWallet(withdrawAmount);
    withdrawAmountInput.value = "";
});

loadWalletBalance();
