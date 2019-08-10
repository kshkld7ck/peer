function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;
   
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
   console.log(dateEnd)
    if ( isNaN(dateEnd) ) {
      return;
    }
   
    timer = setInterval(calculate, 1000);
   
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
                               dateStart.getUTCMonth(),
                               dateStart.getUTCDate(),
                               dateStart.getUTCHours(),
                               dateStart.getUTCMinutes(),
                               dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

      if ( timeRemaining >= 0 ) {
        days    = parseInt(timeRemaining / 86400);
        timeRemaining   = (timeRemaining % 86400);
        hours   = parseInt(timeRemaining / 3600);
        timeRemaining   = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining   = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
   
            console.log(days + ' ' + hours + ' ' + minutes  )
        // document.querySelector(".item__days-h6").innerHTML    = parseInt(days, 10);
        // document.querySelector(".item__hours-h6").innerHTML   = ("0" + hours).slice(-2);
        // document.querySelector(".item__minutes-h6").innerHTML = ("0" + minutes).slice(-2);
        $('.item__days-h6').text(parseInt(days, 10))
        $('.item__hours-h6').text(("0" + hours).slice(-2))

        $('.item__minutes-h6').text(("0" + minutes).slice(-2))
        $('.carousel__item-counter.carousel__item-counter-desktop ').slideDown(300);

        // document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
        console.log(days)

      }
    }
   
    // function display(days, hours
  }
   
   
   
//   countdown('10/08/2019 19:00:00 AM');
countdown('10/08/2019 07:00:00 PM');