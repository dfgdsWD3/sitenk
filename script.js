document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const productLink = document.getElementById('product-link').value;

    if (name && phone && productLink) {
        alert('Ваш заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
        document.getElementById('orderForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});