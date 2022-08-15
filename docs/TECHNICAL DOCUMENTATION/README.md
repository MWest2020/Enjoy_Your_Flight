# TECHNICAL DOCUMENTATION IFES-7 Version 1.0

This documentation is meant for developers and certain experience is recommended:

- basic linux commands and understanding of POSIX architecture
- HTML, CSS, JavaScript
- ExpressJS and NodeJS

The documentation here found is for setting up the IFES-7 entertainment system for on board airplanes.

The order of the documentation is how the features are logically set up, but not required to follow. If only a database is required for orders, feel free to skip the media section, for example. One would need to adjust the front-end, however.

------------------------------------------------------------------------------------------------------
****NOTE****: if you  are looking for the cabin crew instuctions, kindly go [here](../CABIN%20CREW/MANUAL_FOR_FLIGHT_ATTENDANTS_TULIP_AIR.docx)

--------------------------------------------------------------------------------------------------------------------------------

## CONFIGURATION

--------------------------------------------------------------------------------------------------------------------------------

This is the inital configuration needed to work with the Pi system. Some aspect may be later described as wel. In such cases, you can ignore those parts.

[Config here](./CONFIG/pi_config.md)

A Raspberry Pi can be a fickle thing. Backing up is recommended to avoid repeating steps and making possible mistakes.

[Back up here](./CONFIG/backup.md)

Setting up the external power ON/OFF button:

[POWER switch setup](./CONFIG/shutdown_wakeup_button.md)

Automatic starting up the IFES-7 system:

[Application auto-boot here](./CONFIG/pm2/setup.md)

Working with USB and configuring for MEDIA

[USB configuration here](./CONFIG/usb.md)

-------------------------------------------------------------------------------------------------------------------------------

## NETWORKING

-------------------------------------------------------------------------------------------------------------------------------

This is how to set up your Pi system as a distributor for WiFi for users to gain access to the application and internet. It also has the configuration for multiple networks, so it automatically connects. You will need internet on your Pi system to complete all following steps (most can be pulled from [GitHub](https://gitlab.fdmci.hva.nl/eyf/2122/team07/-/tree/master/docs))

[For setting up the Access point](./NETWORKING/network.md)

This is how to shield of internet (along with firewall settings) and let users accept the Terms and Conditions to use the internet.

[For setting up the captive portal](./NETWORKING/CAPTIVE%20PORTAL/setup.md)

To change the web socket address for a human readable URL?:

[For setting up the captive portal](./NETWORKING/apache2/setup.md)

--------------------------------------------------------------------------------------------------------------------------------

## DATABASE

--------------------------------------------------------------------------------------------------------------------------------

This is the general section for the database setup. Make sure you followed the Pi config and double check if not.

Setting up the database itself and users.

[Database configuration](./DATABASE/database.md)

This is the script for filling the database.

[Script](./DATABASE/database.sql)

________________________________________________________________________________________________________________________________

## API

________________________________________________________________________________________________________________________________

Below is the setup up for the API calls for the flight data:

[flight data](./flightdata.md)

overview of used API's:

[Overview](./apis.md)
