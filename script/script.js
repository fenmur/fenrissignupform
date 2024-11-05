document.addEventListener('DOMContentLoaded', () => {
    

const nextStepButtons = document.querySelectorAll('.next-step');
const prevStepButtons = document.querySelectorAll('.prev-step');
const formSteps = document.querySelectorAll('.form-step');
const otherGoalCheckbox = document.getElementById('othergoalcheck');
const otherGoalInput = document.getElementById('othergoalinput');

let currentStep = 0;

showFormStep(currentStep);

nextStepButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            showFormStep(currentStep);

        }
    });
}); 

prevStepButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showFormStep(currentStep);
        }
    });
});

function showFormStep(step) {
    formSteps.forEach((formStep, index) => {
        formStep.classList.toggle('active', index === step);
    });
}

otherGoalCheckbox.addEventListener('change', () => {
    if (otherGoalCheckbox.checked) {
        otherGoalInput.classList.remove('hidden');
    } else {
        otherGoalInput.classList.add('hidden');
    }
});

});