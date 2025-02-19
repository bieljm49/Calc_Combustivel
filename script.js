// script.js

function calcularMelhorOpcao() {
    const precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    const precoEtanol = parseFloat(document.getElementById('precoEtanol').value);
    let consumoGasolina = 12; // valor padrão para o HB20
    let consumoEtanol = 8.5; // valor padrão para o HB20

    // Verifica se o usuário escolheu outro veículo
    if (document.getElementById('consumo').value === "") {
        consumoGasolina = parseFloat(document.getElementById('consumoGasolina').value);
        consumoEtanol = parseFloat(document.getElementById('consumoEtanol').value);
    }

    // Calcula o custo por km
    const custoGasolina = precoGasolina / consumoGasolina;
    const custoEtanol = precoEtanol / consumoEtanol;

    // Exibe o resultado
    let resultado = "Escolha:";
    let detalhes = `
        <p><strong>Custo por Km:</strong></p>
        <p>Gasolina: R$ ${custoGasolina.toFixed(2)} por km</p>
        <p>Etanol: R$ ${custoEtanol.toFixed(2)} por km</p>
	<br>
        <p><strong>Custo para 100 km:</strong></p>
        <p>Gasolina: R$ ${(custoGasolina * 100).toFixed(2)}</p>
        <p>Etanol: R$ ${(custoEtanol * 100).toFixed(2)}</p>
    `;

    // Verifica qual combustível é mais vantajoso
    if (custoEtanol < custoGasolina) {
        resultado = "O Etanol é mais vantajoso!";
    } else {
        resultado = "A Gasolina é mais vantajosa!";
    }

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('detalhes').innerHTML = detalhes;
}

// Exibe os campos para o consumo personalizado
document.getElementById('consumo').addEventListener('change', function() {
    if (this.value === "") {
        document.getElementById('customConsumo').classList.remove('hidden');
    } else {
        document.getElementById('customConsumo').classList.add('hidden');
    }


});

function limparCampos() {
    document.getElementById("precoGasolina").value = "";
    document.getElementById("precoEtanol").value = "";
    document.getElementById("consumo").selectedIndex = 0;
    document.getElementById("customConsumo").classList.add("hidden");
    document.getElementById("consumoEtanol").value = "";
    document.getElementById("consumoGasolina").value = "";
    document.getElementById("resultado").textContent = "";
}
