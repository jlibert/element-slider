Element Slider
==============

This is a simple jQuery UI element slider for producing a horizontal content scrolling effect.

Usage
-----
Include the following in the `<head>` tag of the html document:
```
<!-- css file(s) -->
<link href="css/style.css" rel="stylesheet" type="text/css"/>
<!--[if IE]>
<link href="css/ie-style.css" rel="stylesheet" type="text/css"/>
<![endif]-->
	
<!-- javascript files, including jquery -->
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/elementslider.js"></script>
```

Now we must set up our content slides, take note of the ids and class attributes used:
```
<div id="slider-container">
		<div class="switch-wrapper" id="left-wrapper"><div id="left-switch"></div></div>
		<div class="switch-wrapper" id="right-wrapper"><div id="right-switch"></div></div>
			<div id="slider">
				<div id="first" class="slide">
					<h1>First</h1>
					Content here!
				</div>
				<div id="second" class="slide">
					<h1>Second</h1>
					Content here!
				</div>
			</div>
			<div id="paginator"><ul></ul></div>	
	</div>
```

Finally at the `<head>` of the document we call the elementSlider function in an anonymous function or document.ready and pass in our desired parameters:
```
<script>
		$(document).ready(function () {
			elementSlider('slider','div','','',1000);
		});
</script>
```

Element Slider params:
---------------------
```
function elementSlider(
	slideGroup, //id of container holding slides
	slideType, //type defined for slides (div, article, section)
	slideClass, //class attribute for slides
	paginator, //show paginator true/false
	speed //speed of slide transitions
)
```

