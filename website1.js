document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const selectCoach = document.getElementById('selectCoach');
    const age = document.getElementById('age');
    const level = document.getElementById('level');
    const lessonType = document.getElementById('lessonType');
    const lessonDate = document.getElementById('lessonDate');
    const lessonStartTime = document.getElementById('lessonStartTime');
    const lessonEndTime = document.getElementById('lessonEndTime');
    const lessonFee = document.getElementById('lessonFee');
    const totalFee = document.getElementById('totalFee');

    
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

   
    function validateFullName(name) {
        const nameRegex = /^[a-zA-Z ]{3,}$/;
        return nameRegex.test(name);
    }

   
    function validateDate() {
        const inputDate = new Date(lessonDate.value);
        const today = new Date();
        const dayOfWeek = inputDate.getUTCDay();

        
        if (inputDate <= today) {
            return false;
        }

        
        return dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5 || dayOfWeek === 6;
    }

    
    function updateLessonFee() {
        const ageGroup = age.value;
        const levelValue = level.value;
        const lessonTypeValue = lessonType.value;

        if (ageGroup && levelValue && lessonTypeValue) {
            const fee = lessonFees[ageGroup][levelValue][lessonTypeValue];
            lessonFee.value = fee;

            const totalFeeValue = fee + (fee * 0.13);
            totalFee.value = totalFeeValue.toFixed(2);
        }
    }

    
    const today = new Date().toISOString().split('T')[0];
    lessonDate.setAttribute('min', today);

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        if (
            validateFullName(fullName.value) &&
            validateEmail(email.value) &&
            phoneNumber.value &&
            selectCoach.value &&
            age.value &&
            level.value &&
            lessonType.value &&
            lessonDate.value &&
            validateDate() &&
            lessonStartTime.value &&
            lessonEndTime.value &&
            lessonFee.value &&
            totalFee.value
        ) {
            alert('Lesson successfully booked');
        } else {
            alert('Please fill out all required fields correctly.');
        }
    });

    
    age.addEventListener('change', updateLessonFee);
    level.addEventListener('change', updateLessonFee);
    lessonType.addEventListener('change', updateLessonFee);
});
