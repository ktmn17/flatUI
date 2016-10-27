$(function() {
    $(".calendar__datepicker").datepicker($.datepicker.regional["en-GB"]);

    function TodaysDate() {
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();

        $('.calendar__h2').text(day);
        return day + "/" + month + "/" + year;
    }

    $(".calendar__footer").click(function() {
        $(".calendar__datepicker").datepicker("setDate", TodaysDate());
    });

    $(".calendar__datepicker").datepicker("setDate", TodaysDate());

});
