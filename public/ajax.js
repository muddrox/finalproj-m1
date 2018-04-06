document.addEventListener('DOMContentLoaded', function(e) {
    let request = new XMLHttpRequest();

    request.addEventListener('load', function(e){
        if ( request.status === 200 ) {
            console.log("Retrieved reviews");
            document.getElementById('reviews').innerHTML = request.responseText;
        } else {
            console.log("Failed to get reviews");
        }
    });

    request.open('GET', '/getReviews', true);
    request.send();

    let form = document.getElementById('postReview');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let title = form.elements['title'].value;
        let content = form.elements['content'].value;
        let score = form.elements['score'].value;

        let request = new XMLHttpRequest();

        request.addEventListener('load', function(e){
            if ( request.status === 200 ) {
                console.log("Created a review");
            } else {
                console.log("You failed, becuz ur internet is dumb");
            }
        });

        request.open('POST', '/createReview', true);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(JSON.stringify({title: title, content: content, score: score}));
    });
});