function checkPasswordStrength() {
    var password = document.getElementById('password').value;
    var strength = document.getElementById('strength');
    var score = 0;

    // Reset strength text and class
    strength.classList.remove('weak', 'moderate', 'strong');

    // Password strength scoring
    if (password.length > 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Set strength based on score
    if (score < 2) {
        strength.innerHTML = "Weak password";
        strength.classList.add('weak');
    } else if (score < 4) {
        strength.innerHTML = "Moderate password";
        strength.classList.add('moderate');
    } else {
        strength.innerHTML = "Strong password";
        strength.classList.add('strong');
    }
}
