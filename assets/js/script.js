var currentDate = moment().format("dddd MMMM Do YYYY");
$("#date").text(currentDate);

$(".timeBlock").each(function () {
    var id = $(this).attr("id");
    var currentHour = moment().format("HH00");
    console.log(currentHour);
    console.log(id);
    if (currentHour === id) {
        $(this).parent().addClass("present");
    } else if (currentHour < id) {
        $(this).parent().addClass("past");
    } else {
        $(this).parent().addClass("future");
    }
}
);

$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

$(".saveBtn").each(function () {

    var id = $(this).attr("id");
    var textinput = localStorage.getItem(id);
    $(this).prev().val(textinput);
});

$(".saveBtn").click(function () {

    localStorage.setItem(this.id, $(this).prev().val());
});

$("#clearBtn").click(function () {

    localStorage.clear();
    location.reload();
});



















// $('textarea').each(function () {
//     this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
// }).on('input', function () {
//     this.style.height = 'auto';
//     this.style.height = (this.scrollHeight) + 'px';
// });


// count line breaks and multiply by line height for text area