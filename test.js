 window.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("index.html")) {
      setTimeout(() => {
        alert("Welcome to Urban Brew ☕ – Let’s brew your day!");
      }, 1000);
    }
    const orderForm = document.querySelector("form");
    if (orderForm && window.location.pathname.includes("order.html")) {
      orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const drink = document.getElementById("drink")?.value;
        const quantity = document.getElementById("quantity")?.value;
        const sizeInput = document.querySelector("input[name='size']:checked");
        const size = sizeInput ? sizeInput.value : null;

        if (!name || !drink || !size || !quantity) {
          alert("Please fill out all fields to place your order.");
          return;
        }

        alert(`Thanks ${name}!\nYou've ordered ${quantity} ${size} ${drink}(s).\nIt’ll be ready shortly! ☕`);
        this.reset();
      });
    }
    if (window.location.pathname.includes("menu.html")) {
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
          const title = card.querySelector('.card-title');
          if (title) {
            alert(`You clicked on ${title.textContent}! Want to order? Head to the Order page.`);
          }
        });
      });
    }
});

