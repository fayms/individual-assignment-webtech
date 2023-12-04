document.addEventListener('DOMContentLoaded', function () {
    var inputFields = document.querySelectorAll('input');

    inputFields.forEach(function (input) {
        input.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'pink';
        });

        input.addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
        });
    });

    var donationFormLink = document.getElementById('donationForm');

    donationFormLink.addEventListener('mouseover', function () {
        this.style.color = 'red';
        this.style.backgroundColor = 'yellow';
    });

    donationFormLink.addEventListener('mouseout', function () {
        this.style.color = 'purple';
        this.style.backgroundColor = 'whitesmoke';
    });
});

function validateForm() {
    // Basic validation example
    var form = document.getElementById('salaryDeductionForm');
    var agreementCheckbox = document.getElementById('agree');

    if (!agreementCheckbox.checked) {
        alert('Please agree to the terms and conditions.');
        return false;
    }

    // You can add more specific validation logic as needed

    // If all validations pass, the form will be submitted
    alert('Form submitted!');
    return true;
}
