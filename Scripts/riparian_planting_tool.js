function getRiparian() {
	ripDiv = document.getElementById("riparian");
	if (ripDiv.style.visibility == "visible") {
		ripDiv.style.visibility = "hidden";
		return;
		}
	if (ripDiv.childNodes.length == 0) {
		ripHeading = document.createElement("p");
		ripHeading.innerHTML = "Input Specifications";
		ripHeading.style.textAlign = "center";
		ripHeading.style.margin = "0px";
		ripDiv.appendChild(ripHeading);
		ripBar = document.createElement("hr");
		ripDiv.appendChild(ripBar);
		ripForm = document.createElement("form");
		ripForm.id = "ripForm";
		canCheck = document.createElement("input");
		canCheck.setAttribute("type", "checkbox");
		canCheck.id = "canCheck";
		canCheck.style.margin = "5px";
		ripForm.appendChild(canCheck);
		canCheck.checked = true;
		canLab = document.createElement("label");
		canLab.innerHTML = "% Canopy Cover";
		canLab.style.margin = "5px";
		canLab.style.marginRight = "15px";
		ripForm.appendChild(canLab);
		canInp = document.createElement("input");
		canInp.setAttribute("type", "text");
		canInp.id = "canInp";
		canInp.value = "70";
		canInp.style.margin = "5px";
		canInp.style.width = "70px";
		ripForm.appendChild(canInp);
		breakP = document.createElement("p");
		breakP.innerHTML = "<br>";
		breakP.style.margin = "0px";
		ripForm.appendChild(breakP);

		solGainCheck = document.createElement("input");
		solGainCheck.setAttribute("type", "checkbox");
		solGainCheck.id = "solGainCheck";
		ripForm.appendChild(solGainCheck);
		solGainCheck.checked = true;
		solGainLab = document.createElement("label");
		solGainLab.innerHTML = "Solar Gain Percentile";
		solGainLab.style.margin = "5px";
		solGainLab.style.marginRight = "15px";
		ripForm.appendChild(solGainLab);
		solGainInp = document.createElement("input");
		solGainInp.setAttribute("type", "text");
		solGainInp.id = "solGainInp";
		solGainInp.value = "75";
		solGainInp.style.margin = "5px";
		solGainInp.style.width = "70px";
		ripForm.appendChild(solGainInp);
		breakP = document.createElement("p");
		breakP.innerHTML = "<br>";
		breakP.style.margin = "0px";
		ripForm.appendChild(breakP);

		impSurCheck = document.createElement("input");
		impSurCheck.setAttribute("type", "checkbox");
		impSurCheck.id = "impSurCheck";
		ripForm.appendChild(impSurCheck);
		impSurCheck.checked = true;
		impSurLab = document.createElement("label");
		impSurLab.innerHTML = "% Impervious Surface";
		impSurLab.style.margin = "5px";
		impSurLab.style.marginRight = "15px";
		ripForm.appendChild(impSurLab);
		impSurInp = document.createElement("input");
		impSurInp.setAttribute("type", "text");
		impSurInp.id = "impSurInp";
		impSurInp.value = "10";
		impSurInp.style.margin = "5px";
		impSurInp.style.width = "70px";
		ripForm.appendChild(impSurInp);
		breakP = document.createElement("p");
		breakP.innerHTML = "<br>";
		breakP.style.margin = "0px";
		ripForm.appendChild(breakP);

		ripDiv.appendChild(ripForm);
		}
	tmpButton = document.getElementById("riparianButton");
	x = tmpButton.getBoundingClientRect();
	ripDiv.style.left=x.left + 425;
	ripDiv.style.top=x.bottom - 5;
	ripDiv.style.visibility = "visible";
	}
