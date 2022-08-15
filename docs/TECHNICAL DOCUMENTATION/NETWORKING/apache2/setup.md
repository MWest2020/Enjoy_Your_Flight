# Setting up Apache2

-	`sudo apt-get install apache2`

Make sure you are the owner of the apache2 directory:

-	`sudo chown -R pi:pi /etc/apache2`

-	`cd /etc/apache2/sites-available`

Replace the 000-default.conf file with the one in the Apache2 folder in the project resources

Now cd into:

-	`cd /etc/apache2/sites-enabled`

From here we need to enable some modules:

-	`sudo a2enmod`

You will be asked to type in the mod name you want to activate, answer:

-	`proxy`

and another:

-	`proxy_http`

Now reload the apache2 server:

-	`sudo systemctl reload apache2`

Now stop it:

-	`sudo systemctl stop apache2`

And start it again:

-	`sudo systemctl start apache2`
