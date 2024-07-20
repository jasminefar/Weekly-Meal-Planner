document.addEventListener('DOMContentLoaded', () => {
    const mealInput = document.getElementById('meal-input');
    const addMealButton = document.getElementById('add-meal-button');
    const days = document.querySelectorAll('.day');

    addMealButton.addEventListener('click', () => {
        const mealName = mealInput.value.trim();
        if (mealName === '') {
            alert('Enter a meal name!');
            return;
        }

        let selectedDay = null;
        while (!selectedDay) {
            const dayName = prompt('Which day do you want to add this meal to? (Monday, Tuesday, etc.)');
            if (dayName) {
                selectedDay = Array.from(days).find(day => day.getAttribute('data-day').toLowerCase() === dayName.toLowerCase());
                if (!selectedDay) {
                    alert('Invalid day. Please try again.');
                }
            }
        }

        const mealList = selectedDay.querySelector('.meal-list');
        const listItem = document.createElement('li');
        listItem.textContent = mealName;
        mealList.appendChild(listItem);
        mealInput.value = '';
    });
});
