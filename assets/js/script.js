// TODO: Smile. You are enough.

let parent = document.querySelector('#stickyDiv').parentElement;

// testing parent overflow. sticky div not working

while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
}

// display current date at top of application

var currentDate = moment().format("dddd MMMM Do YYYY");
$("#date").text(currentDate);

// resize text areas to fit input

$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

//check time block for past present or future hour and add class to change bg color

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

// for each save button, get the value out of local storage and display it in the corresponding text area

$(".saveBtn").each(function () {

    var id = $(this).attr("id");
    var textinput = localStorage.getItem(id);
    $(this).prev().val(textinput);
});

// when a save button is clicked, save text in associated text area to local storage

$(".saveBtn").click(function () {

    localStorage.setItem(this.id, $(this).prev().val());
});

// when save all button is clicked, save every text area to local storage

$("#saveAllBtn").click(function () {

    $(".saveBtn").each(function () {

        localStorage.setItem(this.id, $(this).prev().val());
    });
});

// when clear button is clicked, delete local storage and reload the page

$("#clearBtn").click(function () {

    localStorage.clear();
    location.reload();
    window.scrollTo(0, 0);
});