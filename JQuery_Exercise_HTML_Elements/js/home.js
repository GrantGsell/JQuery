$(document).ready(function () {
	// Center all h1, h2 elements
	centerTextElements("h1");
	centerTextElements("h2");

	// Center the team lists via class name
	centerTextElements("row row-eq-height");

	// Change The Squad element text
	changeElementTextViaId("yellowHeading", "Yellow Team");

	// Change the color of each background
	changeElementTextColor("orangeHeading");
	changeElementTextColor("blueHeading");
	changeElementTextColor("redHeading");
	changeElementTextColor("yellowHeading");

	// Add new people to Yellow team list
	addElementToUnsortedList("yellowTeamList", "Joseph Banks");
	addElementToUnsortedList("yellowTeamList", "Simon Jones");

	// Hide elements based on id
	hideElement("oops");

	// Remove the footer
	removeElement("footerPlaceholder");
	
});


/**
 *
 */
function centerTextElements(tag){
	// Center text using jQuery and the tag id
	$(tag).css("text-align", "center");
}


/**
 *
 */
function centerElementsByClass(className){
	// Extract all tag objects
	var elemObject = document.getElementsByClassName(className);

	// Turn tag objects into an array of the object values
	var elemValsList = Object.values(elemObject);

	// For each element with the given tag center their content
	elemValsList.forEach(elem => elem.style.justifyContent = "center");
}


/**
 *
 */
function changeElementTextViaId(id, text){
	// Add pound sign to id
	var id = "#" + id;

	// Set the new text
	$(id).text(text);
}


/**
 *
 */
function changeElementTextColor(id){
	// Extract color from id
	var color = id.substr(0, id.indexOf("H"));
	
	// Add pound sign to id variable
	var id = "#" + id;

	// Change the background color of element
	$(id).css("background-color", color);
}


/**
 *
 */
function addElementToUnsortedList(parentElementId, textData){
	// Add pound sign to parentElementId variable
	var parentElementId = "#" + parentElementId;

	// Add new list item to parent unsorted list
	$(parentElementId).append($("<li>").text(textData));
}


/**
 *
 */
function hideElement(element){
	// Add pound sign to element
	var elementId = "#" + element;

	// Hide the element specified by elementId
	$(elementId).fadeOut();
}


/**
 *
 */
function removeElement(element){
	// Add pound sign to element
    element = "#" + element;

	// Remove the element
	$(element).remove();
}


/**
 *
 */

