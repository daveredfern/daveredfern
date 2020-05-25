---
title: "Getting the most from WordPress post thumbnail"
date: "2010-05-1"
---

The majority of page on the Internet includes an image; blogs are no exception. More and more blogs are introducing newspaper style layouts with a large image at the top of each article.

Previously in WordPress the methods to display these was clunky, either having to upload and paste the URL into a custom field or using a php script to interrogate the content to find the first image. WordPress 2.9 and above have bought a nice and easy solution to this problem with the introduction of [post thumbnail](http://codex.wordpress.org/Template_Tags/the_post_thumbnail).

Post thumbnail adds an additional [meta box](http://codex.wordpress.org/Function_Reference/add_meta_box) to your posts and pages allowing your editors to upload their own images completely separate to the content. It also has the ability to automatically crop your images to the correct size ensuring nothing ever looks out of align on your website.

## Implementing post thumbnail

To enabled Post Thumbnail simple paste the following into your `functions.php`. I have also included the code to enable Post Thumbnail in just pages or posts.

```
if(function_exists('add_theme_support')) {
	add_theme_support('post-thumbnails');
	// add_theme_support('post-thumbnails', array('post')); // Add to posts
	// add_theme_support('post-thumbnails', array('page')); // Add to pages
}
```

Once enabled you should see a new meta box in your posts and pages in your WordPress admin. We now need to tell WordPress what size we want the thumbnail to be. You can do this by simply placing the following into your `functions.php` file.

```
set_post_thumbnail_size(570, 200, true); // width, height, crop (true or false)
```

In most cases we’ll want a few difference sizes for our post thumbnail for various areas of our website such as homepage, archives, single and search. This can be accomplished by creating new image sizes. Add this to your `functions.php`.

```
add_image_size('single_post', 200, 120, true); // name, width, height, crop
```

You can add as many of these as you want but remember it will create a crop for each image you upload so if you’re limited on space you may wish to try and keep them to a minimum.

Post thumbnails are created at the time the image is uploaded so if in the future you change your cropping sizes all previous post thumbnails uploaded won’t resize. There is a plugin available called [Regenerate Thumbnail](http://wordpress.org/extend/plugins/regenerate-thumbnails/) which will go through all of your images and resize them to the new sizes.

Now we’ve set all the settings to our theme we can look at displaying the post thumbnail. You can use the following code in any loop to display a post thumbnail.

```
<?php
if (has_post_thumbnail()) {
	// an image has been uploaded lets display it
	the_post_thumbnail();
	// the_post_thumbnail('single-post'); // use to display custom thumbnails
		we've added previously
	// $image = get_the_post_thumbnail(); // this will return the image as a
		variable instead of printing it.
} else {
	// you may wish to include your previous method
		for older content or a default image?
}
?>
```

Here we’re displaying the post thumbnail in the loop. First we’re checking whether the post has a thumbnail attached to it. If the thumbnail is present we can then either print out the default size or a custom one we’ve previously created in our `functions.php` file. I have added an else statement in this post in case you wish to add a default image or carry on supporting previous methods used before this function was used on your website.

## Adding post thumbnail to your RSS

Unfortunately regardless of whether Post Thumbnail has been activated in your functions.php WordPress will not display them in your RSS feed. We can include the following function will add the thumbnail if available to each post in your RSS. Place it in your `functions.php`.

```
function rss_post_thumbnail($content) {
  	global $post;
   	if(has_post_thumbnail($post->ID)) {
   	    	$content = '<p>' . get_the_post_thumbnail($post->ID) .
   	    	   	   '</p>' . get_the_content();
   	}
   	return $content;
}
add_filter('the_excerpt_rss', 'rss_post_thumbnail');
add_filter('the_content_feed', 'rss_post_thumbnail');
```

That’s it! Its really that simple.