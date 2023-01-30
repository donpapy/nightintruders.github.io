const startingHours = 30;

let time = startingHours * 60 *60;



const countdownEl = document.getElementById('countdown')



setInterval(updateCountdown,1000);

function updateCountdown(){

  const hours = Math.floor(time/60);

  let minutes = time % 60



  countdownEl.innerHTML = `${hours}: ${minutes}`;

  time--;

}



<p id="countdown">30:00:00</p>
     <script src="script.js"></script>