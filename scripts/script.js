document.getElementById("LondonListID").addEventListener("click",displayLondon);
document.getElementById("ParisListID").addEventListener("click", displayParis);
document.getElementById("TokyoListID").addEventListener("click", displayTokyo);

function displayLondon() 
{
  document.getElementById("articleID").innerHTML = "<h1>London</h1>		<p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>	<p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>"
}
			
function displayParis() 
{
  document.getElementById("articleID").innerHTML = "<h1>Paris</h1><p>Paris is great</p>"
}
	
function displayTokyo() 
{
  document.getElementById("articleID").innerHTML = "<h1>Tokyo</h1><p>Tokyo is great</p>"
}