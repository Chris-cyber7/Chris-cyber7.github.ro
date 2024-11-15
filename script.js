document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Colectăm datele din formular
    const consumEnergie = parseFloat(document.getElementById("energie-consum").value);
    const distantaAutostrada = parseFloat(document.getElementById("distanta-autostrada").value);

    // Calculul amprentei de carbon
    const amprentaCarbon = (consumEnergie * 0.4) + (distantaAutostrada * 0.2); // Exemplu de calcule (poți ajusta coeficienții)

    // Afișarea rezultatelor
    document.getElementById('rezultate').style.display = 'block';
    document.getElementById('rezultat').textContent = amprentaCarbon.toFixed(2);
});
