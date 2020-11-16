const items = Array.from(document.querySelectorAll('[data-time]'));

const seconds = items.map(item => item.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    }).reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = (secondsLeft % 3600); // Remaining seconds to calculate minutes with

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = (secondsLeft % 60); // Seconds from remaining time

document.querySelector('p').innerHTML = `Total Time: ${hours} hour ${minutes} minutes ${secondsLeft} seconds`;