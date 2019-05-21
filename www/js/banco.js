// This is a JavaScript file

$(document).on("click","#cadastrar",function(){
  var parametros = {
    "nome": $("#nome").val(),
    "email": $("#email").val()
  };

  $.ajax({
    type:"post",
    url:"https://mobile2i2-joaoaraya.c9users.io/webservice/cadastra.php",
    data:parametros,
    success: function(data){
      navigator.notification.alert(data);
      $("#nome").val("");
      $("#email").val("")
    },
    error: function(data){
      navigator.notification.alert(data);
    }
  });
});
$(document).on("click","#listar",function(){
  $(location).attr("href","lista.html");
});