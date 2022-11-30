$( document ).ready(function() {

    $( "a[id$='enlace/']" ).click(function( event ) {
        event.preventDefault();
        window.location.href = "#";
    });

});
