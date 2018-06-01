// Form

(function() {

    $(document).ready(function() {

        //walidacja pola email
        $('#email').on('blur', function() {
            var input = $(this);
            var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            var is_email = pattern.test(input.val());
            if(is_email){
                input.removeClass("invalid").addClass("valid");
                input.next('.komunikat').text("OK").removeClass("blad").addClass("ok");
            }
            else{
                input.removeClass("valid").addClass("invalid");
                input.next('.komunikat').text("Wprowadź poprawny email!").removeClass("ok").addClass("blad");
            }
        });
    
        //walidacja pola Wiadomość
        $('#message').on('blur', function() {
            var input = $(this);
            var message = $(this).val();
            if(message){
                input.removeClass("invalid").addClass("valid");
                input.next('.komunikat').text("OK").removeClass("blad").addClass("ok");
            }
            else{
                input.removeClass("valid").addClass("invalid");
                input.next('.komunikat').text("Wiadomość nie może być pusta!").removeClass("ok").addClass("blad");
            }   
        });
          
        //blokowanie możliwości wysyłki pustego/żle wypełnionego formularza
        $('#submit button').click(function(event){
            
            var email = $('#email');
            var message = $('#message');
            
            if(email.hasClass('valid') && message.hasClass('valid')){
                alert("Pomyślnie wysłano formularz.");	
            }
            else {
                event.preventDefault();
                alert("Uzupełnij wszystkie pola!");	
            }
        });

        
     
    });
    
    })();