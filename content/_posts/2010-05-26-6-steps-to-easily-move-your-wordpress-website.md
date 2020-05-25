---
title: "6 steps to Easily move your WordPress Website"
date: "2010-05-26"
---

WordPress can be a tricky content management system to move from one location to another. This is mainly due to the endless number of absolute paths which are stored in the database in posts, pages, comments, links and plugins. It is understandable that WordPress stores absolute paths as it is designed to accomodate a wide variety of locations and conditions.

Many WordPress developers use a development server or their localhost to create a website before uploading it to the live website. Here are the steps I follow to ensure an easy and successful move.

Before you start to move anything make sure you have a **full backup of your files and especially your database**. This can be achieved by exporting your database to an SQL file with [phpmyadmin](http://www.phpmyadmin.net/home`page/index.php), an application like [sequelpro](http://www.sequelpro.com/) or using the [WP-DB-Database](http://wordpress.org/extend/plugins/wp-db-backup/).

## 1. Download Database

First we need to export the database. This could be a duplicate of the backup you have just made. It needs to be an SQL file so we can modify it in the next step. As previously mentioned [phpmyadmin](http://www.phpmyadmin.net/), [sequelpro](http://www.sequelpro.com/) or [WP-DB-Database](http://wordpress.org/extend/plugins/wp-db-backup/) can easily complete this task.

## 2. Search and replace database for new website address

WordPress stores absolute paths inside the database which can pose a problem when moving it. I have found the easiest way to alter this is a search and replace of the entire database. Simple open the SQL file you have generated in your favourite editor and search for `www.olddomain.com` to replace with `www.newdomain.com`.

If you’re unable to acquire an SQL file you can use the plugin [search & replace](http://wordpress.org/extend/plugins/search-and-replace/) but please be aware this will only replace content inside of posts and pages so links, settings and plugins will need to be altered manually. I wouldn’t recommend doing it this way if you don’t have to!

## 3. Upload the database to the new website

Using the software I’ve previously mentioned in this article; import your SQL file to the new database. This will populate your new database with all your WordPress content.

## 4. Modify the wp-config file with the changes in database connection

Next, open your wp-config file in the root of your WordPress install and edit the database details so it is ready when you transfer the files to the new hosting. Doing this before you move the files will reduce downtime on the new website address.

## 5. Transfer the files to the new location

Now we’re all setup to move your WordPress files. Copy your files across to the new location. There are several ways of doing this but the simplest is to download the files using FTP to your computer and then reupload to to your new space. If you’re using an application such as [transmit](http://www.panic.com/transmit/) you can move from one FTP account to another removing the need to download a local copy (although always good to keep one in case).

This could take at least 10 minutes so you may wish to place a holding page on the server. If you name the file `index.html` it ensures WordPress will not over write it and on most servers will take precedence over `index.php` which WordPress uses.

Once transferred ensure that the `upload` folder inside `wp-content` has full right permissions so you can upload images from your admin. You may also be using some plugins which require special file permissions. In most cases you can right click on a file in your FTP client and select permissions.

## 6. Test

Before removing the `index.html` you may have created while transferring all of your files make sure to test everything on your website. Take particular care to check image uploading is working in your administration and any forms you may have on the front end post to the correct locations.

Now you can sit back in confidence that WordPress is running smoothly at its new location.