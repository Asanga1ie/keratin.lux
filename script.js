document.addEventListener("DOMContentLoaded", function() {
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
                total += parseInt(service.dataset.price, 10);
            }
        });

        if (discountCheckbox.checked) {
            total -= total * 0.1;
        }

        totalPrice.textContent = total;
    }
function  toggleText() {

 const textBlock =
    document.getElementById('text');
    textBlock.classList.toggle('open');
}
    // Открытие модального окна
    const detailButtons = document.querySelectorAll(".details-btn");
    detailButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const serviceKey = this.getAttribute("data-service");

            if (servicesInfo[serviceKey]) {
                modalTitle.textContent = servicesInfo[serviceKey].title;
                modalDescription.textContent = servicesInfo[serviceKey].description;
                modal.style.display = "block";
            }
        });
    });

    // Закрытие модального окна
    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
 // Получаем данные из формы
 const name = document.getElementById('name').value.trim();
 const rating = document.getElementById('rating').value.trim();
 const comment = document.getElementById('comment').value.trim();

 // Проверка на пустые поля
 if (!name || !rating || !comment) {
     alert("Пожалуйста, заполните все поля.");
     return;
 }

 // Создаем новый элемент отзыва
 const reviewItem = document.createElement('li');
 reviewItem.classList.add('review-item');

 // Добавляем контент
 reviewItem.innerHTML = `
     <h3>${name}</h3>
     <p class="rating">Оценка: ${rating}</p>
     <p>${comment}</p>
 `;

 // Добавляем отзыв в список
 document.getElementById('reviews-container').appendChild(reviewItem);

 // Очищаем форму
 document.getElementById('review-form').reset();
}
);
document.getElementById("beforeUpload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById("beforeImage").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById("afterUpload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById("afterImage").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById("saveComparison").addEventListener("click", function() {
    const beforeSrc = document.getElementById("beforeImage").src;
    const afterSrc = document.getElementById("afterImage").src;

    if (beforeSrc && afterSrc) {
        const gallery = document.getElementById("comparisonGallery");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="comparison-item">
                <img src="${beforeSrc}" width="100">
                <span>➡️</span>
                <img src="${afterSrc}" width="100">
            </div>
        `;
        gallery.appendChild(listItem);
    } else {
        alert("Загрузите оба изображения!");
    }
})
    document.body.classList.toggle("dark-mode");
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
    
        if (!name || !email || !message) {
            alert("Заполните все поля!");
            return;
        }
    
        alert("✅ Сообщение отправлено!");
        this.reset();
    });