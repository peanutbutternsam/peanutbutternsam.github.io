 var url = 'https://sweltering-inferno-6192.firebaseio.com';
    var firebaseRef = new Firebase(url);

    function funct1(event)
    {
        event.preventDefault();
        var tweet_content = $("#user-input").val();
        firebaseRef.push({tweet_text: tweet_content});
    }

    $('.submit').click(funct1);