Element Slider
==============

This is a simple jQuery UI element slider for producing a horizontal content scrolling effect.
Demo: http://www.jeiellibert.com

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

License
=======

This project and all its files are licensed under the New BSD License. See the following:

Copyright (c) 2013, Jeiel Libert <jeiellibert@gmail.com>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer. 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

