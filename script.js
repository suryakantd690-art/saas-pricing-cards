
const billingSwitch = document.getElementById("billingSwitch");

const prices = document.querySelectorAll(".amount");

const notes = document.querySelectorAll(".billing-note");

let isYearly = false;

billingSwitch.addEventListener("click", function () {

    isYearly = !isYearly;

    // Toggle animation
    billingSwitch.classList.toggle("active", isYearly);

    billingSwitch.setAttribute("aria-checked", isYearly);

    // Update prices
    prices.forEach(function (price) {

        if (isYearly) {
            price.textContent = price.dataset.year;
        } else {
            price.textContent = price.dataset.month;
        }

    });

    // Update billing information
    notes.forEach(function (note, index) {

        if (index === 0) return;

        note.textContent = isYearly
            ? "Billed annually"
            : "Billed monthly";

    });

});
