function editNodeText(regex, input, helpId, helpMessage)
 
{
  // See if the info matches the regex that was defined
  // If the wrong information was entered, warn them
  if (!regex.test(input)) {
 
    if (helpId != null)
      // We need to show a warning
      // Remove any warnings that may exist
      while (helpId.childNodes[0]){
        helpId.removeChild(helpId.childNodes[0]);
      }
 
      // Add new warning
      helpId.appendChild(document.createTextNode(helpMessage));
 
    } else {
 
      // If the right information was entered, clear the help message
      if (helpId != null){
 
        // Remove any warnings that may exist
        while (helpId.childNodes[0]){
          helpId.removeChild(helpId.childNodes[0]);
        }
 
      }
 
    }
}

function isUsernameOk(inputField, helpId) {
 
  // See if the input value contains any text
  return editNodeText(/^[A-Za-z0-9._-]{8,100}$/,
   inputField.value, helpId, "Should be greater than 8 characters.");
}
document.getElementById('user').style.color = "red";

function isPassworkOk(inputField, helpId) {
 
  // See if the input value contains any text
  return editNodeText(/^[A-Za-z0-9]{8,100}$/,
   inputField.value, helpId, "Should be greater than 8 characters.");
}
document.getElementById('pass').style.color = "red";

function isConfirmOk() {
	if(document.getElementById('password').value == document.getElementById('confirm').value){
		document.getElementById('pwc').style.color = "green";
		document.getElementById('pwc').innerHTML = "&#9745; matching";
	}else{
		document.getElementById('pwc').style.color = "red";
		document.getElementById('pwc').innerHTML = "Password and Password Comfirmation do not match";
	}
}

function isEmailOk(inputField, helpId) {
 
  return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 
  	inputField.value, helpId, "Enter an Email (Ex. mysite@ourearth.com)");
 };
 document.getElementById('email_help').style.color = "red";