---
title: "Making WordPress easier for clients to use"
date: "2010-03-30"
---

[WordPress](http://www.wordpress.org/) is a daunting prospect for clients to edit their own website. With the plethora of [open source plugins](http://wordpress.org/extend/plugins/) available and a few clicks you can clean up the interface to a simple content management system which even the most computer illiterate clients will be able to find their way around.

The main confusion that clients find is the difference between posts and pages. Often when using WordPress as a full CMS you need to have multiple categories such as news, events, projects and find these all under posts is a strange concept for those not familiar with WordPress. To further confuse your clients there are a lot of unused options on the dashboard, edit post, post listings, page edit and page listings. Often boxes such as post slug, post tags, send trackbacks are unused and only confuse the whole matter.

## Trim Admin interface

[Trim Admin interface](http://wordpress.org/extend/plugins/admin-trim-interface/) is a free plugin available which simply hides certain elements in the WordPress admin such as new posts, turbo, help, logos,  and footer elements. The majority of these just clutter the interface and distract from the main focus of the admin. The plugin will remove these elements for all users including administrators.

## Trim Admin menu

[Trim admin menu](http://wordpress.org/extend/plugins/trim-admin-menu/) is designed so you can hide menu items to anyone none administrator. This is ideal for removing Links or Comments when they’re not being used. Afterall, whats the point of showing functionality which isn’t being used?

There are more advanced plugins such as [Admin Menu Editor](http://w-shadow.com/blog/2008/12/20/admin-menu-editor-for-wordpress/) which allow you to fully customise the menu of WordPress. I have tried Admin Menu Editor and while it works well I find that sometimes it can be a little buggy when disabling and enabling plugins.

The advantage of Admin Menu Editor and Trim admin menu becomes clear when using it in conjunction with other plugins such as Magic fields which adds a lot of top level menu items.

## Magic fields and custom write panels

[WordPress 3.0](http://www.blogohblog.com/whats-new-in-wordpress-3-0/) will allow you to create [custom write panels](http://codex.wordpress.org/Function_Reference/register_post_type) so each section of your website (e.g. portfolio, services, news) can have their own section in the CMS rather than being grouped under Posts.  This will give you the ability to create a full admin interface for your clients and takes WordPress one step closer to becoming a full blown CMS to competing with the likes of [Expression Engine](http://expressionengine.com/) and even [Drupal](http://www.drupal.org/).

Unfortunately Wordpress 3.0 is still in development and while it is expected to be release soon there are alternates you can use if you’re not comfortable with using a pre-release.  Plugins such as [Magic fields](http://magicfields.org/) which is a branch of [Flutter](http://flutter.freshout.us/) offer similar functionality to Wordpress 3.0 where you’re able to create custom panels for different sections of the website.

I wouldn’t recommend using Magic fields all the time as it can be very heavy on the admin and often buggy as it is a hack for the admin interface but for those none technologically savey clients or for large websites it is a saviour for us developers.

I hear many good things about [pods CMS](http://podscms.org/) which in a simliar way to Magic fields allows you to create a full cms based on WordPress. Unfortunately I haven’t had chance to fully try this yet but worth checking out before choosing which plugin to use.

If you’re just about to start development on a new website I’d seriously consider using the [nightly builds](http://wordpress.org/download/nightly/) of Wordpress 3.0 as it will probably be released as a full version by the time your website is ready to go live. This will give you some great bonus features over the current release.

## Screen options

Screen options can be modified for each user and the settings are not stored locally. By setting up a separate user account for your client you can go through their account and hide unnecessary things on the dashboard and write panels. There is always the option for them to re-enable them but for first impressions its nice to make sure things are as clean as possible.

## Permissions and roles management

For each client I will often setup [3 accounts](http://codex.wordpress.org/Roles_and_Capabilities). One for myself with administrator access, another administrator account for the client and an editor account for the client. I will recommend they use the editor account for day to day changes. By getting them to login as a level lower to the administrator it removes many of the menu items including Settings, Tools, Plugins, Appearance and Users. This has two advantages; one being the interface is less cluttered with many of the options which aren’t used on a regular basis hidden. The other is as a safe guard from the client accidentally change a setting or disabling a plugin which could be detrimental to the front end of their website.

If I require further control over the roles in WordPress I install [Roles Manager](http://www.im-web-gefunden.de/wordpress-plugins/role-manager/) which is a plugin allowing you to completely customise permissions for each group and even create new ones outside the default 5 available by WordPress. While this plugin does state it only works up to WordPress 2.6 (currently on 2.9.2) I have installed this on many websites and have yet to find any faults with it running on the latest version. There are other plugins such as [Members](http://wordpress.org/extend/plugins/members/) and [Capability Manager](http://wordpress.org/extend/plugins/capsman/) which allow you to do the same thing but I haven’t looked into them as much as [Roles Manager](http://www.im-web-gefunden.de/wordpress-plugins/role-manager/).

## Training and support

While doing all of the above improves the admin interface of WordPress significantly for your clients there is no substitute for training and on going support. With just an hour or two of explaining how to add and modify content preferably face to face or by screen sharing, clients are able to pick up all of the basic skills required to administrate their own website. Alternately if you haven’t customised the admin interface too much you could direct them to online tutorials such as [WordPress TV](http://wordpress.tv/) which will allow them to watch quick tutorials for using WordPress.