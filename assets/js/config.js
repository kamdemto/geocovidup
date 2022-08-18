
$(document).ready(function(){
   
    chargerlist();
    chargerCat();
});


function chargerlist(){
    
}

function chargerCat() {

    $.get("http://localhost/geocovid/categories.php",function(rep){

            $("#divcat").html(rep);
            
    }
    
    
    );
}
