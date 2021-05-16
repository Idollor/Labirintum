$('.send-pop').click(function () {
    if($('#class').attr('style')!=undefined){
if($('#class').attr('style').indexOf("rgb(4, 224, 0)")!=-1 && $('#subject').attr('style').indexOf("rgb(4, 224, 0)")!=-1 )
{

  $('.error').css("display","none");
		        console.log($('#telephone-adaptive').val());
        console.log($('#class-adaptive h3').text())   
         console.log($('#name-adaptive').val())  
          console.log($('#subject-adaptive h3').text())
          $.ajax({
  url: "procesing.php",
  method: 'post',
    data: {name: $('#name-adaptive').val(),
        telephone: $('#telephone-adaptive').val(),
        class: $('#class h3').text(),
        subject: $('#subject h3').text()

},
  async: false,
  success: function(data){
  	var popup = document.querySelector(".popup__overlay");
  	popup.classList.add("hidden");
    popup = document.querySelector(".popup__overlay__msg");
    popup.classList.remove("hidden");
   
 

    }
        
  
});
	}
  else{
    $('.error').css('display','block')
  }
}
else{
  $('.error').css('display','block')
}})
var popup = document.querySelector(".popup__overlay__subject");
$('.send').click(function () {
  if($('#telephone-adaptive').attr('style')!=undefined)
  {
    
    if($('#telephone-adaptive').attr('style').indexOf("rgb(4, 224, 0)")!=-1 && $('#name-adaptive').attr('style').indexOf("rgb(4, 224, 0)")!=-1 )
  
  {
    if( $('main').width()>=1401)
   {
    alert();
    $('.error').css('display','none');
    event.preventDefault();
    popup.classList.remove("hidden");
     
   }
  
 }
   else{
      $('.error').css("display","block");

   }
 }
   else{
      $('.error').css("display","block");
   }
 
});
$('.send').click(function () {
	if(window.innerWidth<1400 )
	{
		if($('#class-adaptive').attr('style').indexOf("rgb(4, 224, 0)")!=-1 && $('#subject-adaptive').attr('style').indexOf("rgb(4, 224, 0)")!=-1  && $('#telephone-adaptive').attr('style').indexOf("rgb(4, 224, 0)")!=-1  && $('#name-adaptive').attr('style').indexOf("rgb(4, 224, 0)")!=-1)
{
  $('.error').css("display","none");
		        console.log($('#telephone-adaptive').val());
        console.log($('#class-adaptive h3').text())   
         console.log($('#name-adaptive').val())  
          console.log($('#subject-adaptive h3').text())
          $.ajax({
  url: "procesing.php",
  method: 'post',
    data: {name: $('#name-adaptive').val(),
        telephone: $('#telephone-adaptive').val(),
        class: $('#class-adaptive h3').text(),
        subject: $('#subject-adaptive h3').text()

},
  async: false,
  success: function(data){
    var popup = document.querySelector(".popup__overlay__msg");
    popup.classList.remove("hidden");
   
 

    }
        
  
});
	}}
})
$('.cls').click(function(){
	var popup = document.querySelector(".popup__overlay__msg");
        popup.classList.add("hidden");
})