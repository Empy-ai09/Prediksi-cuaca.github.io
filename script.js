document.addEventListener("DOMContentLoaded", () => {
    const predictBtn = document.getElementById('predict-btn');
    const locationInput = document.getElementById('location');
    const resultDiv = document.getElementById('result');
    const modal = document.getElementById('loading-modal');
    const loadingText = document.getElementById('loading-text');

    predictBtn.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (!location) {
            resultDiv.textContent = "Tolong masukkan lokasi!";
            return;
        }
        resultDiv.textContent = "";
        modal.classList.remove('hidden');

        const steps = [
            "Mencari...",
            "Menganalisis...",
            "Membaca awan...",
            "Mengumpulkan data...",
            "Memproses hasil...",
            "Hampir selesai..."
        ];
        let idx = 0;
        loadingText.textContent = steps[idx];

        const interval = setInterval(() => {
            idx++;
            if (idx < steps.length) {
                loadingText.textContent = steps[idx];
            } else {
                clearInterval(interval);
                modal.classList.add('hidden');
                resultDiv.textContent = `Hmm... cuaca di ${location} ya? You can just check it yourself there.`;
            }
        }, 1200);
    });
});
