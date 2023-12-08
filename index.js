const surveyCard = document.getElementById('survey-card');
const thanksMsg = document.getElementById('thanks-msg');
const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('btn-submit');
const pill = document.getElementById('pill')
let rating = '';

ratingBtns.forEach(function(ratingBtns) {
    ratingBtns.addEventListener('click', function() {
        rating = ratingBtns.textContent;
        console.log(rating);
    })
});

submitBtn.addEventListener('click', function() {
    pill.textContent = `You selected ${rating} out of 5`
    if (rating == '') {
        alert('Please select a rating.');
    } else {
        surveyCard.classList.add('hidden');
        thanksMsg.classList.remove('hidden');
    }
    
});
