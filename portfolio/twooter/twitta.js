 var url = 'https://sweltering-inferno-6192.firebaseio.com';
    var firebaseRef = new Firebase(url);

    function funct1(event) {
        event.preventDefault();
        var tweet_content = $("#user-input").val();
        firebaseRef.push({tweet_text: tweet_content});
    }

    function clearInput() {
      $('#user-input').val('');
    }


  //----- Event handlers -----//

    $('.submit').click(clearInput);
    $('.submit').click(funct1);