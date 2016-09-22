$(document).ready(function() {
    $('a[href-t^="#"]').click(function () { 
        elementClick = $(this).attr("href-t");
        destination = $(elementClick).offset().top;
        
        console.log(destination);
        // if($.browser){
        // $('body').animate( { scrollTop: destination }, 1100 );
        // }else{
        $('body').animate( { scrollTop: destination - 20 }, 1100 );
        // }
        // return false;
    });
});