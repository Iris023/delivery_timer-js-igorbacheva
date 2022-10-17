gsap.to(".logo", {delay: 1, rotation: 1080, duration: 5, ease: "bounce.Out", repeat: -1, repeatDelay: 2.2})

const waitingSong = document.querySelector('#melody');
const thanks = document.querySelector('#thanks');

thanks.addEventListener ('click', ()=>{
    return waitingSong.paused? waitingSong.play() : waitingSong.pause();
})

const deliveryTime = 0.1;
let deliveryTimeInSeconds = deliveryTime * 60;

function timer() {
    let displayMinutes = Math.floor(deliveryTimeInSeconds / 60);
    let displaySeconds = deliveryTimeInSeconds % 60;

    if (displaySeconds < 10) {
        displaySeconds = "0" + displaySeconds;
    }

    if (displayMinutes < 10) {
        displayMinutes = "0" + displayMinutes;
    }

    let displayTime = document.querySelector('#displayTime');
        displayTime.innerHTML = `${displayMinutes} :<span class="seconds">${displaySeconds}</span>`;
        deliveryTimeInSeconds--;

    if (deliveryTimeInSeconds < 0) {
        stopTimer();
        deliveryTimeInSeconds = 0;
    }

    function stopTimer() {
        clearInterval(timerId);
        setTimeout(showAlert, 1000);
        function showAlert(){
            Swal.fire({
                icon: 'info',
                title: `Time is up!`,
                text: `If you haven't got your pizza yet, contact us to get a code`,
                showDenyButton: true,
                denyButtonColor: '#5ea85e',
                denyButtonText:'No need',
                confirmButtonColor: '#FF5151',
                confirmButtonText: `<a class="contactUs" href="mailto:service@ipizza.com?body=Hello! I haven't got my pizza in time. My order number is...">Contact us</a>`,
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
        waitingSong.pause();
    }
}
let timerId = setInterval(timer,1000);



