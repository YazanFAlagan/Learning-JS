document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector(".pass-field input");
    const eyeIcon = document.querySelector(".pass-field i");
    const strength = document.getElementById("strength");
    const requirmentList = document.querySelectorAll("#requirment-list li");

    const requirments = [
        {regex: /.{8,}/, index: 0},
        {regex: /[0-9]/, index: 1},
        {regex: /[a-z]/, index: 2},
        {regex: /[!@#$%^&*(),.?":{}|<>]/, index: 3},
        {regex: /[A-Z]/, index: 4},
    ];

    passwordInput.addEventListener("keyup", (e) => {
        let validCount = 0;

        requirments.forEach(item => {
            const isValid = item.regex.test(e.target.value);
            const requirmentItem = requirmentList[item.index];

            if (requirmentItem && requirmentItem.firstElementChild) {
                requirmentItem.firstElementChild.className = isValid ? "fa-solid fa-check" : "fa-solid fa-circle";
                if (isValid) validCount++;
            }
        });

        if (validCount <= 2) {
            strength.textContent = "Low";
            strength.style.color = "red";
            passwordInput.className = "outline-none px-4 py-2 rounded-2xl bg-transparent border-2 text-white weak w-full";
        } else if (validCount <= 4) {
            strength.textContent = "Medium";
            strength.style.color = "orange";
            passwordInput.className = "outline-none px-4 py-2 rounded-2xl bg-transparent border-2 text-white medium w-full";
        } else if (validCount === 5) {
            strength.textContent = "High";
            strength.style.color = "green";
            passwordInput.className = "outline-none px-4 py-2 rounded-2xl bg-transparent border-2 text-white strong w-full";
        }
    });

    eyeIcon.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        eyeIcon.classList.toggle("fa-eye-slash");
        eyeIcon.classList.toggle("fa-eye");
    });
});
