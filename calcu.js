//scroll efect
window.addEventListener('scroll', function(){
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const scrollPosition = window.scrollY;

    if(scrollPosition > window.innerHeight / 2.5){
        page2.style.opacity = 1;
    }else {
        page2.style.opacity = 0;
    }
    if(scrollPosition > window.innerHeight / 0.7){
        page3.style.opacity = 1;
    }else{
        page3.style.opacity = 0;
    }
});
function calculateCalories() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const activity = document.getElementById('activity').value;

    let bmr;

    if (sex === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier;

    switch (activity) {
        case 'none':
            activityMultiplier = 1.2;
            break;
        case 'light':
            activityMultiplier = 1.375;
            break;
        case 'moderate':
            activityMultiplier = 1.55;
            break;
        case 'heavy':
            activityMultiplier = 1.725;
            break;
        default:
            activityMultiplier = 1.2;
    }

    const dailyCalories = bmr * activityMultiplier;
    const loseFatCalories = dailyCalories - 500;
    const gainMuscleCalories = dailyCalories + 500;
    document.getElementById('dailyCalories').textContent = Math.round(dailyCalories);
    document.getElementById('loseFatCalories').textContent = Math.round(loseFatCalories);
    document.getElementById('gainMuscleCalories').textContent = Math.round(gainMuscleCalories);
}

  


