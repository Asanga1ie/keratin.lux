document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");
    const discountCheckbox = document.getElementById("discount");
    const totalPrice = document.getElementById("total-price");
    const openBookingForm = document.getElementById("openBookingForm");
    const bookingModal = document.getElementById("bookingModal");
    const closeModal = document.querySelector(".close");
    const bookingForm = document.getElementById("bookingForm");

    function calculateTotal() {
        let total = 0;

        services.forEach(service => {
            if (service.checked) {
                total += parseInt(service.dataset.price);
            }
        });

        if (discountCheckbox.checked) {
            total = total - (total * 0.1);
        }

        totalPrice.textContent = total;
    }

    services.forEach(service => {
        service.addEventListener("change", calculateTotal);
    });

    discountCheckbox.addEventListener("change", calculateTotal);

    // Открытие модального окна
    openBookingForm.addEventListener("click", function (event) {
        event.preventDefault();
        bookingModal.style.display = "flex";
    });

    // Закрытие окна
    closeModal.addEventListener("click", function () {
        bookingModal.style.display = "none";
    });

    // Отправка заявки
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const datetime = document.getElementById("datetime").value;
        const total = totalPrice.textContent;

        if (name && phone && datetime) {
            alert(Заявка, отправлена!, nИмя, $, { name }, nТелефон, $, { phone }, nДата, $, { datetime }, nСумма, $, { total });
            bookingModal.style.display = "none";
            bookingForm.reset();
        } else {
            alert("⚠️ Заполните все поля!");
        }
    });
});
