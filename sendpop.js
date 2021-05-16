 $('.send-pop-subject').click(function (){
  if($('#class-subject').attr('style')!=undefined)
  {
    if($('#class-subject').attr('style').indexOf("rgb(4, 224, 0)")!=-1  && $('#telephone-subject').attr('style').indexOf("rgb(4, 224, 0)")!=-1  && $('#name-subject').attr('style').indexOf("rgb(4, 224, 0)")!=-1)
    {
      $('.error').css("display","none");
                      $.ajax({
  url: "procesing.php",
  method: 'post',
    data: {name: $('#name-subject').val(),
        telephone: $('#telephone-subject').val(),
        class: $('#class-subject h3').text()
     

},
  async: false,
  success: function(data){
    var popup = document.querySelector(".popup__overlay__subject");
     popup.classList.add("hidden");
    var popup = document.querySelector(".popup__overlay__msg");
    popup.classList.remove("hidden");
    fbq('track', 'Lead');
    }
        
  
});
    }
    else{
      $('.error').css('display','block')
    }
  }
  else{
    $('.error').css('display','block')
  }

}

)  