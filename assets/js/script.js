var currentDate = moment().format("dddd MMMM Do YYYY");
$("#date").text(currentDate);


$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:visible;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});
//update scroll height based on screen size 

$(".timeBlock").each(function () {
    var id = $(this).attr("id");
    var currentHour = moment().format("HH00");

    if (currentHour === id) {
        $(this).parent().addClass("present");
    } else if (currentHour < id) {
        $(this).parent().addClass("past");
    } else {
        $(this).parent().addClass("future");
    }
});


$(".saveBtn").each(function () {

    var id = $(this).attr("id");
    var textinput = localStorage.getItem(id);
    $(this).prev().val(textinput);
});


$(".saveBtn").click(function () {

    localStorage.setItem(this.id, $(this).prev().val());
});


$("#saveAllBtn").click(function () {

    $(".saveBtn").each(function () {
        localStorage.setItem(this.id, $(this).prev().val());
    });
});




$("#clearBtn").click(function () {

    localStorage.clear();
    location.reload();
});




