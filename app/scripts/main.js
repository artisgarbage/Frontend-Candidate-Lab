'use strict';

$( function() {

    $( '#confirmationModal' ).hide();

    function showModal ( messageStr ) {
        $( '#confirmationTxt' ).text( messageStr );
        $( '#confirmationModal' ).fadeIn( 300 ).delay( 1000 ).fadeOut( 300 );
    }

    $( '#coming' ).on( 'click', function() {
        showModal( 'Great, see you soon!' );
    } );

    $( '#notComing' ).on( 'click', function() {
        showModal( 'No problem, thanks for the RSVP!' );
    } );
} );
