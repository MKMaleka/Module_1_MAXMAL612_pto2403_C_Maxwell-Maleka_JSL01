
function validateSyntax() {
    let input = document.getElementById('petInput').value;

    let regex = /^pet_(\d{4})+([A-Za-z]+)$/; //The string startswith pet_,captures four digits of brith year and only contain letters 
    let result = input.match(regex); 
    
    if (result) {
        let birthYear = result[1]; //extracts birth year from the matched regex
        let name = result[2]; //extracts name from the matched regex      
        
        let BirthYear = birthYear >= 1500 && birthYear <= new Date().getFullYear();  //validated between 1500 and current year
        let Name = /^[A-Za-z]+$/.test(name) && name.trim().length > 0; //match a string that contains uppercase and lowercase, test(name) to check string match regex
        
        let display = BirthYear && Name ? "Valid Syntax🟢" : "Invalid Syntax🔴"; //used boolean to determine if criteria is met or not
        document.getElementById('result').innerText = display;
      } 
    else {
        document.getElementById('result').innerText = "Invalid Syntax🔴";
    }

}


