
function newDateObject(){

    const todayDate = new Date();

    document.getElementById('example1').innerHTML=" Today's date is: " + todayDate;
}

function newDateWithSevenP(){

    const finalExamDate = new Date(2022, 4, 10, 12, 30, 0, 0 );

    document.getElementById('example2').innerHTML= "The final exam is in: "+ finalExamDate;
}

function newDateString(){

    const firstDayOfClass = new Date("January 18, 2022, 12:30:00");

    document.getElementById('example3').innerHTML= "The class started in: "+ firstDayOfClass;


}

function shortDateFormat(){


    const studentBirthday = new Date("12/01/2000");

    document.getElementById('example4').innerHTML=" Jorge was born in: " + studentBirthday;
}

function getCurrentYearMeth(){

    const currentYear = new Date();
  

    document.getElementById('example5').innerHTML="Current year is: "+  currentYear.getFullYear(); ;
}

function getCurrentMonthMeth(){

    const Months= new Date()

    const currentMonth = Months.getMonth()+1;

    document.getElementById('example6').innerHTML= "current month is: "+ currentMonth;
}

function getCurrentDayMeth(){

    const currentDay = new Date()

    document.getElementById('example7').innerHTML="Current day is:"+ currentDay.getDate();
}

function getCurrentHoursMeth(){

    const currentHour = new Date()

    document.getElementById('example8').innerHTML= currentHour.getHours();
}

function getCurrentMinutesMeth(){

    const currentMinutes = new Date();

    document.getElementById('example9').innerHTML= "current minute is: " + currentMinutes.getMinutes();
}

function getCurrentSecondsMeth(){

    const currentSeconds = new Date();

    document.getElementById('example10').innerHTML= "current second is: " + currentSeconds.getSeconds();
}

function getCurrentWeekMeth(){

    const WeekDay = new Date();

    const currentWeekDay = WeekDay.getDay()+1;

    document.getElementById('example11').innerHTML="current weekDay is: "+ currentWeekDay;


}