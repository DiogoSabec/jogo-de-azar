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
        alert("Saldo insuficiente.");
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
        alert("Digite uma quantidade valida para acidionar a sua carteira.");
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
        alert("Insufficient funds. Please add more money to your wallet.");
        return;
    }

    var cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink'];
    var corSorteada = cores[Math.floor(Math.random() * cores.length)];

    if (selectedColor === corSorteada) {
        var multiplier = parseFloat(document.getElementById(selectedColor).textContent);
        var ganho = valorAposta * multiplier;
        walletBalance += ganho;
        updateWalletBalance();
        document.getElementById('resultado').innerText = "Congratulations! You won! You bet on the color " + selectedColor + " and the drawn color was " + corSorteada + ". You earned $" + ganho.toFixed(2) + ".";
    } else {
        var multiplier = parseFloat(document.getElementById(selectedColor).textContent);
        var aaa = valorAposta / multiplier;
        var perda = valorAposta - aaa;
        walletBalance -= perda;


        document.getElementById('resultado').innerText = "Sorry, you lost. You bet on the color " + selectedColor + ", but the drawn color was " + corSorteada + ". You lost $" + perda.toFixed(2) + ".";
        updateWalletBalance();
        
    }

        // Salve o novo saldo da carteira no Local Storage
        localStorage.setItem("walletBalance", walletBalance);
}


document.getElementById("withdrawForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var withdrawAmountInput = document.getElementById("withdrawAmount");
    var withdrawAmount = parseFloat(withdrawAmountInput.value);
    withdrawFromWallet(withdrawAmount);
    withdrawAmountInput.value = "";
});

function generateRandomMultipliers() {
    const multipliers = {
        red: (Math.random() * 0.5) + 1,
        orange: (Math.random() * 0.5) + 1,
        yellow: (Math.random() * 0.5) + 1,
        green: (Math.random() * 0.5) + 1,
        blue: (Math.random() * 0.5) + 1,
        indigo: (Math.random() * 0.5) + 1,
        violet: (Math.random() * 0.5) + 1,
        pink: (Math.random() * 0.5) + 1,
    };
    return multipliers;
}

function initializeMultiplicadores() {
    var multipliers = generateRandomMultipliers();
    for (var color in multipliers) {
        if (multipliers.hasOwnProperty(color)) {
            var multiplierElement = document.getElementById(color);
            multiplierElement.textContent = multipliers[color].toFixed(2);
        }
    }
}


loadWalletBalance();
