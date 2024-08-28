document.getElementById('encryptBtn').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#28a745';
});

document.getElementById('encryptBtn').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#007bff';
});

document.getElementById('decryptBtn').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#dc3545';
});

document.getElementById('decryptBtn').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#007bff';
});

document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    
    if (validateText(inputText)) {
        let encryptedText = encrypt(inputText);
        document.getElementById('outputText').value = encryptedText;
        document.getElementById('inputText').value = ''; // Limpiar el campo de entrada
    } else {
        alert("Solo se permiten letras minúsculas sin acentos.");
    }
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    
    if (inputText === '') {
        alert("No hay texto para desencriptar.");
    } else {
        let decryptedText = decrypt(inputText);
        document.getElementById('outputText').value = decryptedText;
        document.getElementById('inputText').value = ''; // Limpiar el campo de entrada
    }
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    
    if (outputText.value === '') {
        alert("No hay texto para copiar.");
    } else {
        outputText.select();
        document.execCommand('copy');
        alert("Texto copiado al portapapeles.");
    }
});

function validateText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

function encrypt(text) {
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
    return decryptedText;
}
