var CSSColors = CSSColors || {};

window.onload = function() { 
	CSSColors.loadColors();
}

/**
 * Color Names Store
 *
 * Encapsules the different color properties in CSS along with browser that support the property
 * in an array of JSON.
 *
 * an entry needs 'name' property to get displayed, other properties are optional if no value for browser 
 * is set the browser will be indicated as not supported.
 */

CSSColors.colors = [
	'{ "name" : "white", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "ivory", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightyellow", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "yellow", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "snow", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "floralwhite", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lemonchiffon", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "cornsilk", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "seashell", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lavenderblush", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "papayawhip", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "blanchedalmond", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mistyrose", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "bisque", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "moccasin", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "navajowhite", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "peachpuff", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "gold", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "pink", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightpink", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "orange", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightsalmon", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkorange", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "coral", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "hotpink", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "tomato", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "orangered", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "deeppink", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "fuchsia", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "red", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "oldlace", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightgoldenrodyellow", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "linen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "antiquewhite", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "salmon", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "ghostwhite", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mintcream", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "whitesmoke", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "beige", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "wheat", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "sandybrown", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "azure", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "honeydew", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "aliceblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "khaki", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightcoral", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "palegoldenrod", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "violet", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darksalmon", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lavender", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightcyan", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "burlywood", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "plum", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "gainsboro", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "crimson", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "palevioletred", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "goldenrod", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "orchid", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "thistle", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightgray", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightgrey", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "tan", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "chocolate", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "peru", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "indianred", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumvioletred", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "silver", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkkhaki", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "rosybrown", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumorchid", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkgoldenrod", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "firebrick", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "powderblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightsteelblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "paleturquoise", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "greenyellow", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkgray", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkgrey", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "brown", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "sienna", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "yellowgreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkorchid", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "palegreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkviolet", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumpurple", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightgreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkseagreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "saddlebrown", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkmagenta", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkred", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "blueviolet", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightskyblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "skyblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "gray", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "grey", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "olive", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "purple", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "maroon", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "aquamarine", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "chartreuse", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lawngreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumslateblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightslategray", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightslategrey", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "slategray", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "slategrey", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "olivedrab", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "slateblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "dimgray", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "dimgrey", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumaquamarine", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "rebeccapurple", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "cornflowerblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "cadetblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkolivegreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "indigo", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumturquoise", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkslateblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "steelblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "royalblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "turquoise", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumseagreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "limegreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkslategray", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkslategrey", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "seagreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "forestgreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lightseagreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "dodgerblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "midnightblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "aqua", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "springgreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "lime", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumspringgreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkturquoise", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "deepskyblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkcyan", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "teal", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "green", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkgreen", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "blue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "mediumblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "darkblue", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "navy", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "black", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}'
];

/**
 * Color Loader
 *
 * Called on page load, parses the Array, extract data and transfer to createNode to make an entry.
 * returned node is appended to the div.
 */
CSSColors.loadColors = function() {
	var colorItems = document.getElementById("colorItems");
	var loadingContainer = document.getElementById("loading-container");
	loadingContainer.parentElement.removeChild(loadingContainer);
	var sizeOfcolorItems = CSSColors.colors.length;
	var end = 0;
	for ( var color in CSSColors.colors ) {
		if ( (sizeOfcolorItems-1 ) == color) {
			end = 1;
		}
		colorItems.appendChild(CSSColors.createNode(CSSColors.colors[color], color, end));
	}
}

/**
 * Creates New Node
 *
 * Cretes new node for a property and sets the color value to it.
 */
CSSColors.createNode = function(colorData, counter, end ) {
	var colorData =  JSON.parse(colorData);
	if ( colorData['name'] ) {
		var newColorNode = document.createElement("div");
		var browserSupport = ''; 	// Initilize to null
		if ( end == 1 ) {
			newColorNode.setAttribute("class", "grid column small-4 end");
		} else {
			newColorNode.setAttribute("class", "grid column small-4");
		}

		if ( colorData['chrome']  )  {
			browserSupport += '<li class="active"><i class="fa fa-chrome"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-chrome"></i></li>';
		}

		if ( colorData['firefox']  )  {
			browserSupport += '<li class="active"><i class="fa fa-firefox"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-firefox"></i></li>';
		}

		if ( colorData['safari']  )  {
			browserSupport += '<li class="active"><i class="fa fa-safari"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-safari"></i></li>';
		}

		if ( colorData['opera']  )  {
			browserSupport += '<li class="active"><i class="fa fa-opera"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-opera"></i></li>';
		}

		if ( colorData['internet-explorer']  )  {
			browserSupport += '<li class="active"><i class="fa fa-internet-explorer"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-internet-explorer"></i></li>';
		}

		if ( colorData['edge']  )  {
			browserSupport += '<li class="active"><i class="fa fa-edge"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-edge"></i></li>';
		}		
		newColorNode.setAttribute("style", "background-color:"+ colorData['name']);
		newColorNode.innerHTML = '<div class="description-wrap" data-clipboard-action="copy" data-clipboard-target=".color' + counter + '"><div class="description"><div class="holder">Color : <span class="color' + counter + '">' + colorData['name']   + '</span></div></div></div> <ul class="browserSupport">' + browserSupport + '</ul>';
		return newColorNode;

	} else {
		return 0;
	}
	
}
