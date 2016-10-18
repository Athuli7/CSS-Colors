var CSSColors = CSSColors || {};

window.onload = function() { 
	var radio = document.sortForm.sort;
    for(var i = 0; i < radio.length; i++) {
        radio[i].onclick = function() {
            CSSColors.loadColors(CSSColors.colors[this.value]);
        };
    }
    // Default load to hue
	CSSColors.loadColors(CSSColors.colors['hue']);
}

/**
 * Color Names Store
 *
 * Encapsules the different color properties in CSS.
 *
 * The colors are sorted in into 3 types hue value, hex value and alphabetic order.
 */

CSSColors.colors = {
	'hue' : ['purple', 'darkmagenta', 'fuchsia', 'violet', 'plum', 'thistle', 'orchid', 'mediumvioletred', 'deeppink', 
			'hotpink', 'palevioletred', 'lavenderblush', 'crimson', 'pink', 'lightpink', 'black', 'maroon', 'darkred', 'brown', 'dimgray', 
			'dimgrey', 'firebrick', 'red', 'gray', 'grey', 'indianred', 'rosybrown', 'darkgray', 'darkgrey', 'lightcoral', 'silver', 
			'lightgray', 'lightgrey', 'gainsboro', 'whitesmoke', 'snow', 'white', 'salmon', 'mistyrose', 'tomato', 'darksalmon', 'orangered', 
			'coral', 'lightsalmon', 'sienna', 'seashell', 'saddlebrown', 'chocolate', 'sandybrown', 'peachpuff', 'peru', 'linen', 'bisque', 
			'darkorange', 'burlywood', 'tan', 'antiquewhite', 'navajowhite', 'blanchedalmond', 'papayawhip', 'moccasin', 'orange', 'wheat', 
			'oldlace', 'floralwhite', 'darkgoldenrod', 'goldenrod', 'cornsilk', 'gold', 'khaki', 'lemonchiffon', 'palegoldenrod', 'darkkhaki', 
			'olive', 'yellow', 'lightgoldenrodyellow', 'beige', 'lightyellow', 'ivory', 'olivedrab', 'yellowgreen', 'darkolivegreen', 'greenyellow', 
			'chartreuse', 'lawngreen', 'darkgreen', 'green', 'forestgreen', 'limegreen', 'lime', 'darkseagreen', 'lightgreen', 'palegreen', 'honeydew', 
			'seagreen', 'mediumseagreen', 'springgreen', 'mintcream', 'mediumspringgreen', 'mediumaquamarine', 'aquamarine', 'turquoise', 
			'lightseagreen', 'mediumturquoise', 'darkslategray', 'darkslategrey', 'teal', 'darkcyan', 'aqua', 'paleturquoise', 'lightcyan', 
			'azure', 'darkturquoise', 'cadetblue', 'powderblue', 'deepskyblue', 'lightblue', 'skyblue', 'lightskyblue', 'steelblue', 'aliceblue', 
			'dodgerblue', 'slategray', 'slategrey', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'cornflowerblue', 'royalblue', 'navy', 
			'midnightblue', 'darkblue', 'mediumblue', 'blue', 'lavender', 'ghostwhite', 'darkslateblue', 'slateblue', 'mediumslateblue', 'mediumpurple', 
			'rebeccapurple', 'blueviolet', 'indigo', 'darkorchid', 'darkviolet', 'mediumorchid'],
	'hex' : ['white', 'ivory', 'lightyellow', 'yellow', 'snow', 'floralwhite', 'lemonchiffon', 'cornsilk', 'seashell', 'lavenderblush', 'papayawhip', 
			'blanchedalmond', 'mistyrose', 'bisque', 'moccasin', 'navajowhite', 'peachpuff', 'gold', 'pink', 'lightpink', 'orange', 'lightsalmon', 'darkorange', 
			'coral', 'hotpink', 'tomato', 'orangered', 'deeppink', 'fuchsia', 'red', 'oldlace', 'lightgoldenrodyellow', 'linen', 'antiquewhite', 'salmon', 'ghostwhite', 
			'mintcream', 'whitesmoke', 'beige', 'wheat', 'sandybrown', 'azure', 'honeydew', 'aliceblue', 'khaki', 'lightcoral', 'palegoldenrod', 'violet', 'darksalmon', 
			'lavender', 'lightcyan', 'burlywood', 'plum', 'gainsboro', 'crimson', 'palevioletred', 'goldenrod', 'orchid', 'thistle', 'lightgray', 'lightgrey', 'tan', 
			'chocolate', 'peru', 'indianred', 'mediumvioletred', 'silver', 'darkkhaki', 'rosybrown', 'mediumorchid', 'darkgoldenrod', 'firebrick', 'powderblue', 
			'lightsteelblue', 'paleturquoise', 'greenyellow', 'lightblue', 'darkgray', 'darkgrey', 'brown', 'sienna', 'yellowgreen', 'darkorchid', 'palegreen', 
			'darkviolet', 'mediumpurple', 'lightgreen', 'darkseagreen', 'saddlebrown', 'darkmagenta', 'darkred', 'blueviolet', 'lightskyblue', 'skyblue', 
			'gray', 'grey', 'olive', 'purple', 'maroon', 'aquamarine', 'chartreuse', 'lawngreen', 'mediumslateblue', 'lightslategray', 'lightslategrey', 
			'slategray', 'slategrey', 'olivedrab', 'slateblue', 'dimgray', 'dimgrey', 'mediumaquamarine', 'rebeccapurple', 'cornflowerblue', 'cadetblue', 
			'darkolivegreen', 'indigo', 'mediumturquoise', 'darkslateblue', 'steelblue', 'royalblue', 'turquoise', 'mediumseagreen', 'limegreen', 'darkslategray', 
			'darkslategrey', 'seagreen', 'forestgreen', 'lightseagreen', 'dodgerblue', 'midnightblue', 'aqua', 'springgreen', 'lime', 'mediumspringgreen', 
			'darkturquoise', 'deepskyblue', 'darkcyan', 'teal', 'green', 'darkgreen', 'blue', 'mediumblue', 'darkblue', 'navy', 'black'],
	'alpha' : ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 
				'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'darkblue', 'darkcyan', 'darkgoldenrod', 
				'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 
				'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 
				'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 
				'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 
				'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 
				'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 
				'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 
				'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 
				'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 
				'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 
				'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']
}

/**
 * Color Loader
 *
 * Called on page load, parses the Array, extract data and transfer to createNode to make an entry.
 * returned node is appended to the div.
 */
CSSColors.loadColors = function(colors) {
	var loadingContainer = document.getElementById("loading-container");
	loadingContainer.setAttribute("style", "display:table;");
	var colorItems = document.getElementById("colorItems");
	colorItems.innerHTML='';
	loadingContainer.setAttribute("style", "display:none");
	var sizeOfcolorItems = colors.length;
	var end = 0;
	for ( var color in colors ) {
		if ( (sizeOfcolorItems-1 ) == color) {
			end = 1;
		}
		colorItems.appendChild(CSSColors.createNode(colors[color], color, end));
	}
}

/**
 * Creates New Node
 *
 * Cretes new node for a property and sets the color value to it.
 */
CSSColors.createNode = function(colorData, counter, end ) {
	if ( colorData ) {
		var newColorNode = document.createElement("div");
		var browserSupport = ''; 	// Initilize to null
		if ( end == 1 ) {
			newColorNode.setAttribute("class", "grid column small-4 end");
		} else {
			newColorNode.setAttribute("class", "grid column small-4");
		}
	
		newColorNode.setAttribute("style", "background-color:"+ colorData);
		newColorNode.innerHTML = '<div class="description-wrap" data-clipboard-action="copy" data-clipboard-target=".color' + counter + '"><div class="description"><div class="holder"><span class="color' + counter + '">' + colorData   + '</span></div></div></div>';
		return newColorNode;

	} else {
		return 0;
	}
	
}
