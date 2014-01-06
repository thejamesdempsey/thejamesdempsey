---
layout: post
title: Ordered List Numbering with Scss
date:   2013-10-12 22:50:06
categories: web-development sass scss ocss mixins ordered-lists
---

## {{post.title}}


Recently, I encountered a very specific challenge in working on the Cru pattern library. Cru's primary font is Freight Sans Pro, which looks great in most situations. However, when it comes to numerals, this font is lacking. Freight Sans Pro uses old-style figures which means that the numerals vary in height and position, with irregular alignment of characters. 

The Cru brand style guide requires lining numerals, which have a constant height and position and sit on the baseline. Typically, I can easily switch out the font to Helvetica Neue with a simple class, but with ordered lists this becomes impossible, or so I thought. 


I was able to use this great scss mixin, which writes numbers via a loop and allows me to use the `:before` pseudo class to display these numbers and change the font on this pseudo class only. Pretty cool stuff. 


<h4 class="post__sub-title">Numbering Mixin</h3>


{% highlight sass %}

@mixin auto-numbers($numbered-element, $sep, $counter: item, $nested-parent: false ){
    $sel: ();
    @if $nested-parent {
        $sel: append($sel, unquote($nested-parent));

        #{$nested-parent}{
            list-style: none;
            margin-left: 0;
        }
    }
    $sel: append($sel, unquote('&'), comma);

    #{$sel}{
        counter-reset: #{$counter};
        > #{$numbered-element}{
            &:before{
                counter-increment: #{$counter};
                content: if($nested-parent, counters(#{$counter}, "#{$sep} ") "#{$sep} ", counter(#{$counter}) "#{$sep} ") ;
            }
        }
    }
}

{% endhighlight %}


<h4 class="post__sub-title">Auto-Numbers in the Real World</h4>

{% highlight sass %}
.numbered-list{
    @include auto-numbers(li, '.');
    font-size: inherit;
	
	:before{
		margin-right: 5px !important;
		font-family: $numeral-font-family !important;
		font-size: 95% !important;
	}
	
}
{% endhighlight %}


This is another example of the incredible capabilities of SCSS. Feel free to use this as you wish.