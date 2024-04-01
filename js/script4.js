const $=selector=>document.querySelector(selector)
document.addEventListener("DOMContentLoaded", function() {

    const emailPattern =  /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    $("#arrival_date").focus();

const submit=evt=>{

    const arrival_date= $("#arrival_date")
    arrival_date.value=arrival_date.value.trim();

    const nights = $("#nights");
    nights.value=nights.value.trim();

    const adults= $("#adults").value;

    const children=$("#children").value;
    
    const name= $("#name");
    name.value=name.value.trim();

    const email =$("#email");
    email.value=email.value.trim();

    const phone=$("#phone").value;

    const room = document.querySelector( 'input[name="room"]:checked');   
         if(room != null) {   
           }
        else {  
            alert("Room Type is not selected"); }

    const bed = document.querySelector( 'input[name="bed"]:checked');   
         if(bed != null) {   
                    }
          else {  
                  alert("Bed Type is not selected"); }


    let isValid=true;

    if(!arrival_date.value || !nights.value || !email.value || !name.value ){
        alert("A value muste be entered into each text box");
        isValid=false;
    }

    evt.preventDefault();
    
    if(isNaN(nights.value)){
        alert("The number of nights must be numeric");
        isValid=false;
    }

    if(!emailPattern.test(email.value)){
        alert("the email address must match the pattern that is provided");
        isValid=false;
    }
     
    if(isValid){
        $("#arrival_date").value = "";
        $("#nights").value = "";
        $("#adults").selectedIndex = 0;
        $("#children").selectedIndex = 0;
        $("input[name='room']:checked").checked = false;
        $("input[name='bed']:checked").checked = false;
        $("#name").value = "";
        $("#email").value = "";
        $("#phone").value = "";
    }
}

$("#submit").addEventListener('click',submit)
});
    