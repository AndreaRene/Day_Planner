
$(".saveBtn").each(function () {
    var that = this;
    // console.log(that.id);
    for (i = 1; i <= localStorage.length; i++) {
        if (localStorage.key("save" + i) === that.id) {
            console.log(that.id);
        }
    }
});


$(".saveBtn").click(function () {

    JSON.parse(localStorage.getItem($(this).prev().val())) || [];


    localStorage.setItem(this.id, JSON.stringify($(this).prev().val()));
})

$("#clearBtn").click(function () {

    localStorage.clear();
    location.reload();
})



















// $('textarea').each(function () {
//     this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
// }).on('input', function () {
//     this.style.height = 'auto';
//     this.style.height = (this.scrollHeight) + 'px';
// });


// count line breaks and multiply by line height for text area


// const today = moment();
// moment().format('dddd, MMMM Do YYYY');
// console.log(today);


