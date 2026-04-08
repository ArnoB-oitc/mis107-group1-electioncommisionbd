function checkVoter() {
    const nid = document.getElementById('nidInput').value;
    const resultDiv = document.getElementById('voterResult');
    
    // This simulates a database check
    if(nid === "123456") {
        resultDiv.style.color = "green";
        resultDiv.innerHTML = "✅ Record Found: Ariyan Azad | Status: Verified Voter";
    } else if(nid === "") {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML = "Please enter an NID number.";
    } else {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "❌ No record found for this NID.";
    }
}
