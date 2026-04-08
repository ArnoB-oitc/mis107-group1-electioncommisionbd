function checkVoter() {
    const nid = document.getElementById('nidInput').value;
    const resultDiv = document.getElementById('voterResult');
    
    if(nid === "123456") {
        resultDiv.style.color = "#006a4e"; // Green for success
        resultDiv.innerHTML = "✅ Record Found: Ariyan Azad | Status: Verified Voter | Center: Uttara Model School";
    } else if(nid === "") {
        resultDiv.style.color = "#f42a41"; // Red for alert
        resultDiv.innerHTML = "Please enter an NID number.";
    } else {
        resultDiv.style.color = "#f42a41";
        resultDiv.innerHTML = "❌ No record found for this NID.";
    }
}
