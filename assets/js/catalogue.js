$(document).ready(

    function(){
        charger();
       
    }
    
);


function charger(){

    $.get("categories.php",function(reponse){

    $("#divCat").html(reponse);
    $("#listCat").change (function(){
        chargerProduits($(this).val());

    });
   });

   $.get("produit.php",function(listeproduit)
   {
    $("#divPro").html(listeproduit);
   }
   
   );

   //API CONSUMING JS
   var zone="London";
   var sigle="uk";
   var key="439d4b804bc8187953eb36d2a8c26a02"
   var url="https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fbecad9ee07d7576f5d7dd58fbb72fa3";

   var callBackGetSucces =function(data){
       console.log("donnée API", data);

   }

   $.get(url,callBackGetSucces).done(

    function(){}
   )
    .fail(function(){
        alert("erro");
    })
   .always(function(){
    //alert("finich");
   })
   
   
   // fin API

   //service authentification
 
  var settings = {
    "url": "http://5.135.143.83:9999/covcamtrack/camtrack/oauth/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": ["application/x-www-form-urlencoded", "application/x-www-form-urlencoded"],
      "Authorization": "Basic Y292ZGF0YToxMjM0NTY="
    },
    "data": {
      "username": "C0BDD1C32D4B",
      "password": "11668",
      "grant_type": "12345",
      "client_id": "covdata"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://5.135.143.83:9090/camtrack/static/listRegionsTown",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer 31c7edc0-6fa0-4762-94c4-9b15c6b0ec9a",
      "User-Agent": "PostmanRuntime/7.13.0",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "b58174e9-69a0-4be2-8da7-3e4ce5d249f1,29b90113-55e5-4809-858f-7919de417ddb",
      "Host": "5.135.143.83:9090",
      "accept-encoding": "gzip, deflate",
      "content-length": "10",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    },
    "data": {
      "regionid": "2"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  
 
  

}

   function chargerProduits(idc){

    $.get("produit.php?idcat="+idc,function(reponse){

    $("#divPro").html(reponse);
    
   });
}