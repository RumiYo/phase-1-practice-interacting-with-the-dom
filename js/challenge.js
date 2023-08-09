
//Timer 
let timerValue = 0;
let interval;
let isPaused = false;

const timerDisplayed = document.querySelector('#counter')

function runTimer(){
    timerValue++;
    timerDisplayed.textContent =timerValue;
}

interval = setInterval(runTimer, 1000);

//minus
const minusButton = document.querySelector("#minus")

function decrementTimer(){
    timerValue--;
    timerDisplayed.textContent =timerValue;
}

minusButton.addEventListener('click',decrementTimer);

//plus
const plusButton = document.querySelector("#plus")

function incrementTimer(){
    timerValue++;
    timerDisplayed.textContent =timerValue;
}

plusButton.addEventListener('click', incrementTimer);

//like
const likeButton = document.querySelector('#heart');
let likeCounts = {};

function likeClick (){
     if(!likeCounts[timerValue]){
        likeCounts[timerValue]=0;
     }
     likeCounts[timerValue]++;
    
    console.log(timerValue ,likeCounts)
    updateComment();
}

function updateComment(){
    if(likeCounts[timerValue]==1){
    let likeList = document.createElement('li')
    likeList.className = `TimerValue${timerValue}`
    likeList.innerHTML = `${timerValue} has been liked ${likeCounts[timerValue]} time`
    document.querySelector('.likes').appendChild(likeList);
}   
    const lastComment = document.querySelector('.likes').lastElementChild;
    lastComment.remove();
    let likeList = document.createElement('li')
    likeList.className = `TimerValue${timerValue}`
    likeList.innerHTML = `${timerValue} has been liked ${likeCounts[timerValue]} times`
    document.querySelector('.likes').appendChild(likeList);
}

likeButton.addEventListener('click', likeClick);

//Pause
const pauseButton = document.querySelector('#pause');

function pauseTimer(){
    clearInterval(interval);
}

pauseButton.addEventListener('click',() => {
    if(!isPaused){
        pauseTimer();
        isPaused = true;
        minusButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;
        document.querySelector('#pause').textContent = 'resume';
        return;
    }
    interval = setInterval(runTimer, 1000);
    isPaused = false;
    minusButton.disabled = false;
    plusButton.disabled = false;
    likeButton.disabled = false;
    document.querySelector('#pause').textContent = 'pause';
});

//comment
const commentInput = document.getElementById('comment-input');

    document.querySelector('form').addEventListener('submit',e => {
        e.preventDefault();
        let commentList = document.createElement('p');
        commentList.textContent = `${commentInput.value}`;
        document.querySelector('.comments').appendChild(commentList);
        commentInput.value = ""
})

