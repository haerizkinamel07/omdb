$('#search-button').on('click', function(){
    $.ajax({
    url: 'http://omdbapi.com',
    type: 'get',
    dataType: 'json',
    data: {
        'apikey' : 'c94ffec',
        's': $('#search-input').val()
    },
    success: function (result) {
        console.log(result);
    }
    });
});