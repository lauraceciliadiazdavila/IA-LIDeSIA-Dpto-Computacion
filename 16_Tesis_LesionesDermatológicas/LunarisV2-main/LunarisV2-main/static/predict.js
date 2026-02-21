document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("predict-form");
    const fileInput = document.getElementById("image-input");
    const dropZone = document.getElementById("drop-zone");
    const previewImg = document.getElementById("imagePreview");

    const classText = document.getElementById("predicted-class");
    const probsContainer = document.getElementById("probabilities");
    const resultBox = document.getElementById("result-box");
    const predictContainer = document.getElementById("predict-container");

    /* =====================
       Drag & Drop
    ===================== */

    dropZone.addEventListener("click", () => fileInput.click());

    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("dragover");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("dragover");
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("dragover");

        if (e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            showPreview(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            showPreview(fileInput.files[0]);
        }
    });

    function showPreview(file) {
        previewImg.src = URL.createObjectURL(file);
        previewImg.style.display = "block";
    }

    /* =====================
       Submit
    ===================== */

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (fileInput.files.length === 0) {
            alert("Seleccioná una imagen");
            return;
        }

        // Estado inicial
        classText.innerText = "Analizando...";
        probsContainer.innerHTML = "";
        resultBox.style.display = "block";
        predictContainer.classList.add("show-result");

        const formData = new FormData();
        formData.append("file", fileInput.files[0]);

        try {
            const response = await fetch(
                "https://4g0s-lunarisprueba2.hf.space/predict",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            /* =====================
               ViT
            ===================== */

            const vitClass = data.vit.prediction;
            const vitProbs = data.vit.probabilities;

            classText.innerText = `Clase predicha: ${vitClass}`;

            const vitTitle = document.createElement("h4");
            vitTitle.innerText = "Probabilidades ViT";
            probsContainer.appendChild(vitTitle);

            Object.entries(vitProbs).forEach(([label, p]) => {
                const line = document.createElement("p");
                line.innerText = `${label}: ${p}%`;
                probsContainer.appendChild(line);
            });

            /* =====================
               ABCD
            ===================== */

            const abcd = data.abcd;
            const flags = abcd.flags;

            const abcdTitle = document.createElement("h4");
            abcdTitle.innerText = "Criterios Dermatoscopicos";
            probsContainer.appendChild(abcdTitle);

            Object.entries(flags).forEach(([key, value]) => {
                const line = document.createElement("p");
                line.innerText = `${key}: ${value}`;
                probsContainer.appendChild(line);
            });

            const resumen = document.createElement("p");
            resumen.innerText =
                `Criterios positivos: ${abcd.positives} / 3`;
            probsContainer.appendChild(resumen);

        } catch (err) {
            classText.innerText = "Error al conectar con el predictor.";
        }
    });

});
