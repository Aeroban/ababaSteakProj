function validates() {

        var nameX = document.forms["theForm"]["name"].value;
        if (nameX == "") {
            alert("Please provide your name!");
            return false;
        }
        if (isNaN(nameX) == 0){
            alert("Please provide a valid name!");
            return false;
        }

        var phoneX = document.forms["theForm"]["phone"].value;
        if (phoneX == "") {
            alert("Please provide your phone number!");
            return false;
        }
        if (isNaN(phoneX)){
            alert("Please provide a valid phone number!");
            return false;
        }
        if(!(phoneX.startsWith("0"))){
            alert("Please use Indonesian phone number that starts with 0!");
            return false;
        }
        if(phoneX.length < 7){
            alert("Phone number must at least be 7 digits long!");
            return false;
        }

        var guestX = document.forms["theForm"]["guest"].value;
        if (guestX == "") {
            alert("Please provide total guests!");
            return false;
        }
        if (isNaN(guestX)){
            alert("Please provide a number for total guests!");
            return false;
        }
        if(guestX<1 || guestX>20){
            alert("Please fill the guest number between 1 - 20!");
            return false;
        }

        var dateX = document.forms["theForm"]["date"].value;
        if (dateX == "") {
            alert("Please provide reservation date!");
            return false;
        }

        var timeX = document.forms["theForm"]["time"].value;
        if (timeX == "") {
            alert("Please provide reservation time!");
            return false;
        }
        
        var myDateX = new Date(dateX);
        var today = new Date();
        if (myDateX < today) {
            alert("Please provide a valid reservation date!");
            return false;
        }

        alert("Thank you for the reservation!");
        return true;
}

