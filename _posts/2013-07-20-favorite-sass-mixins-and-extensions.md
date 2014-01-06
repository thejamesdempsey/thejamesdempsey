---
layout: post
title: Getting Sassy
date:   2013-07-20 22:50:06
categories: web-development sass ocss mixins extensions
page-class: page--post
---

## {{post.title}}

I have completely fallen in love with Object Oriented CSS and Sass. It makes my code much more D.R.Y and allows me to manipulate my code by simply changing a few variables. Sass provides options for nesting, setting variables, creating mixins and selector inheritance. My favorites out of all the features Sass provides though has to be the mixins and extensions. These are incredible time savers and makes my code much more reusable. 

I am going to share some of the snippets I have been using the most recently. Feel free to <a href="https://github.com/thejamesdempsey/sass-mixins" target="_blank">grab these from my GitHub</a> and edit them to your hearts content. 



<h3 class="post__section-title">Clearfix</h3>

Here is a simple way to implement Nicolas Galagher's clearfix hack. I extend this silent class to avoid the clearfix class being all over my markup.


{% highlight sass %}
%clearfix{
	&:before, &:after{
		content: "";
		display: table;
	}
	&:after{
		clear: both;
	} 
}
{% endhighlight %}


<!-- CLEARFIX MIXIN USAGE -->

#####Usage: Scss
{% highlight sass %}

.wrapper{
	@extend %clearfix;
}

.row{
	@extend %clearfix;
}

.site-head{
	@extend %clearfix;
}

{% endhighlight %}


<!-- CLEARFIX MIXIN OUTPUT IN CSS -->

#####Output: CSS

{% highlight css %}

.wrapper:before, .row:before, .site-head:before, .wrapper:after, .row:after, .site-head:after {
	content: "";
	display: table; 
}

.wrapper:after, .row:after, .site-head:after {
	clear: both; 
}

{% endhighlight %}


<h3 class="post__section-title">Box Sizing</h3>

This allows me to reset my elements box modal with ease. Not as useful as some others since I only call it once but it is reusable. D.R.Y at its finest. 


{% highlight sass %}

@mixin box-sizing($box-model) {
  -webkit-box-sizing: $box-model; 
     -moz-box-sizing: $box-model; 
          box-sizing: $box-model;
}
}
{% endhighlight %}

<!-- BOX SIZING OUTPUT IN CSS -->

#####Usage: Scss
{% highlight sass %}

*,
*:after,
*:before {
	@include box-sizing(border-box);
}


{% endhighlight %}


<!-- BOX SIZING OUTPUT IN CSS -->

#####Output: CSS
{% highlight css %}

*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box; 
}

{% endhighlight %}






<h3 class="post__section-title">Border Radius</h3>

This give me the ability to set every border radius without having to worry about prefixes. Did I mention I love Sass?

{% highlight sass %}

// Regular border-radius


@mixin border-radius($radius) {
	background-clip: padding-box;  
	-webkit-border-radius: $radius;
	        border-radius: $radius;
}


{% endhighlight %}


<!-- BORDER-RADIUS MIXIN USAGE -->

#####Usage: Scss
{% highlight sass %}

.btn {
	@include border-radius(5px);
}

{% endhighlight %}



#####Output: CSS
{% highlight css %}

.btn {
	background-clip: padding-box;
	-webkit-border-radius: 5px;
	border-radius: 5px;
}

{% endhighlight %}


<h3 class="post__section-title">Center Align</h3>

I use this to center align any element within its parent element. This requires a width or max-width to be set in order for it to work. 


{% highlight sass %}

@mixin centered {
 	display: block;
	margin-left: auto;
	margin-right: auto;
}

{% endhighlight %}


#####Usage: Scss
{% highlight sass %}
.site--foot {
	width: 800px;
	@include centered;
}
{% endhighlight %}

#####Output: CSS

{% highlight css %}

.site--foot {
	width: 800px;
	display: block;
	margin-left: auto;
	margin-right: auto; 
}

{% endhighlight %}




<h3 class="post__section-title">REM Font Sizing</h3>

This mixin allows you to set your font size relative to the root (html) element. It also provides a px fallback for IE 8 and down.

{% highlight sass %}

@mixin font-size($sizeValue: 1.6) {
	font-size: ($sizeValue * 10) + px; 
	font-size: $sizeValue + rem;
}

{% endhighlight %}


#####Usage: Scss
{% highlight sass %}

html {
  	font-size: 62.5%; // Sets up the Base 10 font-size
}

h1{
	@include font-size(3.6);
}

p {
	@include font-size(1.4);
}
{% endhighlight %}

#####Output: CSS

{% highlight css %}

html {
	font-size: 62.5%; /* Sets up the Base 10 font-size */
}

h1 {
	font-size: 36px;
	font-size: 3.6rem; 
}

p {
	font-size: 14px;
	font-size: 1.4rem; 
}

{% endhighlight %}


<h3 class="post__section-title">Vendor Prefix</h3>

This is my personal favorite because I can take any css attribute, add an argument and it adds any vendor prefixes I desire. 

{% highlight sass %}

@mixin prefix($name, $argument) {
	-webkit-#{$name}: #{$argument};
       -moz-#{$name}: #{$argument};
            #{$name}: #{$argument};
}

{% endhighlight %}


#####Usage: Scss

{% highlight sass %}

.shadow {
	@include prefix(box-shadow, inset 0 0 10px #f9f9f9)
}

{% endhighlight %}


#####Output: CSS

{% highlight css %}

.shadow {
 	-webkit-box-shadow: inset 0 0 10px #f9f9f9;
	-moz-box-shadow: inset 0 0 10px #f9f9f9;
	box-shadow: inset 0 0 10px #f9f9f9; 
}

{% endhighlight %}


I hope you benefit as much from these as I have. More to come soon.