function main(){
    var input = document.getElementById("age");
    var age = input.value;

    if(age < 0 || age > 110){
        alert("Keine gültige Eingabe")
    }

    else if(age <=6 || age >=60){
        alert("Preis beträgt 4 Euro")
    } else {
        alert("Preis beträgt 6 Euro")
    }

}