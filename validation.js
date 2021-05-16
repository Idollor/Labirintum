$('#name').on('input', function () {
    var msg = $(this).val();
    let result = msg.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
    if(result){
    		$(this).css("border-color", "#04E000");
    }
    else{
    		
    }
});
$('#telephone').on('input', function () {
    var msg = $(this).val();
    let result = msg.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    if(result){
    		$(this).css("border-color", "#04E000");
    }
    else{
    		
    }
});





$('#name-subject').on('input', function () {
    var msg = $(this).val();
    let result = msg.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
    if(result){
        $(this).css("border-color", "#04E000");
    }
    else{
        
    }
});
$('#telephone-subject').on('input', function () {
    var msg = $(this).val();
    let result = msg.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    if(result){
        $(this).css("border-color", "#04E000");
    }
    else{
        
    }
});








$('#telephone-subject').on('focus', function () {
  $(this).css("border-color", "#4EAFF1");
  });


$('#name-subject').on('focus', function () {
  $(this).css("border-color", "#4EAFF1");
  });
$('#name-subject').on('focusout', function () {
  var msg = $(this).val();
    let result = msg.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
    
      if(result){
        $(this).css("border-color", "#04E000");
       }
       else{
        $(this).css("border-color", "red");
       }
  
  });
$('#telephone').on('focusout', function () {
  var msg = $(this).val();
    let result = msg.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    
      if(result){
        $(this).css("border-color", "#04E000");
       }
       else{
        $(this).css("border-color", "red");
       }
  
  });







$('#telephone').on('focus', function () {
	$(this).css("border-color", "#4EAFF1");
	});


$('#name').on('focus', function () {
	$(this).css("border-color", "#4EAFF1");
	});
$('#name').on('focusout', function () {
	var msg = $(this).val();
    let result = msg.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
    
	    if(result){
    		$(this).css("border-color", "#04E000");
   		 }
   		 else{
    		$(this).css("border-color", "red");
   		 }
	
	});
$('#telephone').on('focusout', function () {
	var msg = $(this).val();
    let result = msg.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    
	    if(result){
    		$(this).css("border-color", "#04E000");
   		 }
   		 else{
    		$(this).css("border-color", "red");
   		 }
	
	});








$('#name-adaptive').on('input', function () {
    var msg = $(this).val();
    let result = msg.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
    if(result){
        $(this).css("border-color", "#04E000");
    }
    else{
        
    }
});
$('#telephone-adaptive').on('input', function () {
    var msg = $(this).val();
    let result = msg.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    if(result){
        $(this).css("border-color", "#04E000");
    }
    else{
        
    }
});



$('#telephone-adaptive').on('focus', function () {
  $(this).css("border-color", "#4EAFF1");
  });


$('#name-adaptive').on('focus', function () {
  $(this).css("border-color", "#4EAFF1");
  });
$('#name-adaptive').on('focusout', function () {
  var msg = $(this).val();
    let result = msg.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
    
      if(result){
        $(this).css("border-color", "#04E000");
       }
       else{
        $(this).css("border-color", "red");
       }
  
  });
$('#telephone-adaptive').on('focusout', function () {
  var msg = $(this).val();
    let result = msg.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    
      if(result){
        $(this).css("border-color", "#04E000");
       }
       else{
        $(this).css("border-color", "red");
       }
  
  });