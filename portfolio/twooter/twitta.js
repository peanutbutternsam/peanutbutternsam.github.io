 var url = 'https://sweltering-inferno-6192.firebaseio.com';
    var firebaseRef = new Firebase(url);

    function funct1(event)
    {
        //var title = $("#").text();
        var tweet_content = $(".text-box").val();
        firebaseRef.push({tweet_text: tweet_content});
        event.preventDefault();
    }

    var submit = document.getElementsByTagName('button')[0];

    submit.onclick = funct1;