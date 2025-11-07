function aggiungiAlCarrello() {
    localStorage.setItem('carrello', JSON.stringify([{ nome: 'Ravioli Ricotta & Spinaci', prezzo: 12 }]));
    alert('Prodotto aggiunto al carrello!');
}

function procediAlPagamento() {
    window.location.href = 'checkout.html';
}

function simulaPagamento(event) {
    event.preventDefault();
    localStorage.removeItem('carrello');
    window.location.href = 'successo.html';
}
