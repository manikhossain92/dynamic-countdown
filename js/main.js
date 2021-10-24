var year = document.getElementById('year');
var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var currentYear  = new Date().getFullYear();

var nextYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);


// create a fuctipn


function counting()
{
    var currentTime = new Date();
    var diff = nextYear - currentTime;

    var s = Math.floor(diff / 1000) % 60;
    var m = Math.floor(diff / 1000 / 60) % 60;
    var h = Math.floor(diff / 1000 / 60 / 60) % 24;
    var d = Math.floor(diff / 1000 / 60 / 60 /24);

    //DOM
    days.innerHTML = (d <10) ? '0' + d : d;
    hours.innerHTML = (h <10) ? '0' + h : h;
    minutes.innerHTML = (m <10) ? '0' + m : m;
    seconds.innerHTML = (s <10) ? '0' + s : s;

    //BOM
    setInterval(counting,1000)

}
year.innerHTML = nextYear.getFullYear();
counting();