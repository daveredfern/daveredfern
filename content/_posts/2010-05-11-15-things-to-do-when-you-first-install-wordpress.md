---
title: "14 things to do when you first install WordPress"
date: "2010-04-14"
tags: [WordPress, "Web Design"]
---

Here’s a list of 14 things to do when you install WordPress to secure and set your website up ready for development.

## 1. Install with database table prefix

By default all tables with a WordPress install are prefix with wp_. This means that anyone knows the names of all of your MySQL tables. You can change the prefix while installing WordPress. Alternately you can add the following code to your wp-config.php file.

```
$table_prefix = 'wp_';
```

Be aware that if you change this after installing WordPress you’ll have to change the table names in your database.

## 2. Remove the default admin account

When you install WordPress the first account created has the username admin. This is a security risk. By going to ‘Users > Add New’ you can create a new account with Administration writes and a custom username which is more suitable and secure. Then when you login with your new account you can delete the default admin account. At this point you also have the opportunity to delete all the default WordPress posts.

## 3. Remove all default WordPress content

WordPress adds a post, page, comment and multiple links to demonstrate WordPress when first installed. It only takes a couple of minutes to remove these and cleans up the admin ready to place your websites content in.

## 4. Install dummy content for development

Often when you start developing a website you won’t have all of the final content from the client which makes it hard to develop. Problems such as not being enough posts to paginate, no archives of posts over several months and lack of content so unable to style all the elements are common problems.

A solution from WP Candy is to inject some dummy content to the site while developing. This will give you a variety of content so you can easily style it.

## 5. Setup Akismet

This plugin comes with WordPress but does require activating and a registered account at WordPress.com. Akismet is a product developed my Automattic and is a system to stop spam. Any WordPress site with comments enable should have this installed as I have found it blocks the majority of spam posts and removes the need for captcha. It’s a 5 minute job to setup and then never needs messing with again!

## 6. Change settings

There are several changes to the default WordPress you should make before. Here are the ones I recommend:-

- Change the blog name and tagline.
- Change the date format. I suggest j F Y so it displays 8 April 2010.
- Enable remote publishing so you can use remote application such as android or iPhone. Tick both Atom Publishing Protocol and XML-RPC.
- Change the number of posts displayed per page from 10 to 5.
- Untick allowing people to post comments by default. This can be overridden in individual posts.
- Setup the Permalinks structure. I always set them to /%category%/%postname%/.

## 7. Set up a ping list

By default there is only one URL in the ping list but to spread your website about you can increase this list. Here are a few you can add to help spread the word of your blog.

## 8. Install your theme

While you will probably not have fully developed your theme when installing WordPress some regular developers have a base theme which they use. If you haven’t you can always check out Elliot Jay Stocks Starker theme.

## 9. Install your commonly used plugins

Every WordPress website will have at least a couple of plugins you’ll need to install. Most developers will have a list of their most commonly used ones.

## 10. Install google analytics

Installing Google Analytics is essential for most websites so why not do it early and add it to the footer.php of your theme. There are lots of plugins which can add it for you but I prefer to add it manually. Doing it early will tick on thing off early instead of leaving it to the last minute for the client to setup an account.

## 11. Generate a secret key

A secret key can be generated from visited the WordPress website. By place this generate code inside your wp-config.php file you can encrypt your cookies. This stops people from accessing your WordPress admin through cookie hijacking.

## 12. Lock down your config file

WordPress is an open source project so anyone can see the code and file names. This means that people can often guess the location of files such as wp-config.php and wp-admin. You can lock down using you .htaccess file with the following code:

```
<files wp-config.php>
	Order deny,allow
	deny from all
</files>
```

This will stop anyone from browsing to the file and accessing it.

## 13. Protect your admin folder

The admin folder on WordPress is commonly known as wp-admin so you need to make sure it is protected. You can do this with two methods. The simplest is to set the file access properties (chmod) to 644. If you wish to further protect your admin folder you can lock it using the .htaccess file so only certain IP address can be accessed.

```
order deny, allow
allow from 12.121.122.12 #Change to your ip address
deny from all
```

This can often be very inconvenient and impractical on client websites but for personal projects it maybe worth while.

## 14. Limit search engines spidering WordPress folders

It is unlikely you will want search engines spidering your WordPress folders. Using the .htaccess file you can stop them from spidering it. Add the following:

```
Disallow: /wp-*
```