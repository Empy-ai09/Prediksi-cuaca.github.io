document.getElementById('predict-btn').addEventListener('click', function() {
    const locationInput = document.getElementById('location').value;
    const resultDiv = document.getElementById('result');

    if (locationInput) {
        resultDiv.textContent = "Hmm... cuaca di " + locationInput + " ya? " +
            "You can just check it yourself there.";
    } else {
        resultDiv.textContent = "Tolong masukkan lokasi!";
    }
});