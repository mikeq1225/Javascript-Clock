$(document).ready(function() {
  setInterval(() => {
    var time = new Date()
    var hours = time.getHours()
    if (hours > 12) {
      hours = "0" + (hours - 12)
    } else if (hours === 0) {
      hours = 12
    }
    var minutes = time.getMinutes()
    var seconds = time.getSeconds()
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    $("#clock").html(`${hours}:${minutes}:${seconds}`)

    var hex1 = hours.toString(16) + minutes.toString(16) + seconds.toString(16)
    $("#hexCode").html(`#${hex1}`)
    $("body").css("background-color", `#${hex1}`)
  }, 1000)
})
