const prelims = document.querySelector('#prelimGrade');
const midterms = document.querySelector('#midtermGrade');
const preFinals = document.querySelector('#pre-finalGrade');
const finals = document.querySelector('#finalGrade');
const calculateButton = document.querySelector('#submitBtn');
const result = document.querySelector('#result');
const remarks = document.querySelector('#remarks');
const resultContainer = document.querySelector('#resultCard');
const GWA = document.querySelector('#GWA');
const resetBtn = document.querySelector('#reset');
const popUp = document.querySelector('#popUp');
const badge = document.querySelector('.badge');
    const backgroundCard = document.querySelector('.card');
calculateButton.addEventListener('click', function () {
    const prelimValue = prelims.value.trim();
    const midtermValue = midterms.value.trim();
    const preFinalValue = preFinals.value.trim();
    const finalValue = finals.value.trim();
    /*if (!prelimGrade || !midtermGrade || !preFinalGrade || !finalGrade) {
        const warningHeader = document.querySelector('#warningHeader');
        const warningText = document.querySelector('.warningTexts'); 
        warningHeader.textContent = 'No Empty Fields';
        warningText.textContent = 'Please enter all grades before calculating your GWA.';
        popUp.classList.add('d-block');
        document.querySelector('.overlay').style.display = 'block';
        return; // Exit the function if validation fails
    }*/
    if (prelimValue === '' || midtermValue === '' || preFinalValue === '' || finalValue === '') {
        const warningHeader = document.querySelector('#warningHeader');
        const warningText = document.querySelector('.warningTexts');
        warningHeader.textContent = 'No Empty Fields';
        warningText.textContent = 'Please enter all grades before calculating your GWA.';
        popUp.classList.add('d-block');
        document.querySelector('.overlay').style.display = 'block';
        return; // Exit the function if validation fails

    }
    const prelimGrade = parseFloat(prelims.value);
    const midtermGrade = parseFloat(midterms.value);
    const preFinalGrade = parseFloat(preFinals.value);
    const finalGrade = parseFloat(finals.value);
    const numericRegex = /^[0-9]+(\.[0-9]*)?$/;
    if (prelimGrade < 0 || midtermGrade < 0 || preFinalGrade < 0 || finalGrade < 0) {
        const warningHeader = document.querySelector('#warningHeader');
        const warningText = document.querySelector('.warningTexts');
        warningHeader.textContent = 'Invalid Grade';
        warningText.textContent = 'Grades cannot be negative. Please enter valid grades.';
        popUp.classList.add('d-block');
        document.querySelector('.overlay').style.display = 'block';
        return;
    }
    if (prelimGrade > 100 || midtermGrade > 100 || preFinalGrade > 100 || finalGrade > 100) {
        const warningHeader = document.querySelector('#warningHeader');
        const warningText = document.querySelector('.warningTexts');
        warningHeader.textContent = 'Invalid Grade';
        warningText.textContent = 'Grades cannot exceed 100. Please enter valid grades.';
        popUp.classList.add('d-block');
        document.querySelector('.overlay').style.display = 'block';
        return;
    }
    if (!numericRegex.test(prelims.value) || !numericRegex.test(midterms.value) || !numericRegex.test(preFinals.value) || !numericRegex.test(finals.value)) {
        const warningHeader = document.querySelector('#warningHeader');
        const warningText = document.querySelector('.warningTexts');
        warningHeader.textContent = 'Invalid Input';
        warningText.textContent = 'Please enter valid numeric grades.';
        popUp.classList.add('d-block');
        document.querySelector('.overlay').style.display = 'block';
        return; // Exit the function if validation fails
    }
    const average = (prelimGrade * 0.2) + (midtermGrade * 0.2) + (preFinalGrade * 0.2) + (finalGrade * 0.4);
    result.textContent = average.toFixed(2)
    badge.classList.remove("badge-success", "badge-primary", "badge-secondary", "badge-warning", "badge-danger");
    if (average >= 97.5 && average <= 100) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '1.00';
        badge.textContent = 'Excellent';
        badge.classList.add("badge-success");
    }
    else if (average >= 94.5 && average <= 97.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '1.25';
        badge.textContent = 'Very Good';
        badge.classList.add("badge-primary");
    }
    else if (average >= 91.5 && average <= 94.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '1.50';
        badge.textContent = 'Very Good';
        badge.classList.add("badge-primary");
    }
    else if (average >= 88.5 && average <= 91.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '1.75';
        badge.textContent = 'Very Good';
        badge.classList.add("badge-primary");
    }
    else if (average >= 85.5 && average <= 88.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '2.00';
        badge.textContent = 'Satisfactory';
        badge.classList.add("badge-secondary");
    }
    else if (average >= 81.5 && average <= 85.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '2.25';
        badge.textContent = 'Satisfactory';
        badge.classList.add("badge-secondary");
    }
    else if (average >= 77.5 && average <= 81.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '2.5';
        badge.textContent = 'Satisfactory';
        badge.classList.add("badge-secondary");
    }
    else if (average >= 73.5 && average <=77.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '2.75';
        badge.textContent = 'Fair';
        badge.classList.add("badge-warning");
    }
    else if (average >= 69.5 && average <= 73.49) {
        resultContainer.classList.add("d-block");
        GWA.textContent = '3.00';
        badge.textContent = 'Fair';
        badge.classList.add("badge-warning");
    }
    else if (average <= 69.49) {
        resultContainer.classList.add("d-block");

        GWA.textContent = '5.00';
        badge.textContent = 'Failed';
        badge.classList.add("badge-danger");
    }
});
resetBtn.addEventListener('click', function () {
    prelims.value = '';
    midterms.value = '';
    preFinals.value = '';
    finals.value = '';
    result.textContent = '';
    remarks.textContent = '';
    GWA.textContent = '';
    resultContainer.classList.remove("d-block");
    badge.textContent = '';
    badge.classList.remove("badge-success", "badge-primary");
});
const closeButton = document.querySelector('#closePopUp');

closeButton.addEventListener('click', function () {
    popUp.classList.remove('d-block');
    document.querySelector('.overlay').style.display = 'none';
});

