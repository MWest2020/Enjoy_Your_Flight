# Raspberry Pi Configuration

## Install a distrubution to work with

the easiest is to download the Ras[berry Pi imager from the website and use this to write the SD card

## Location plus WiFi Settings

On the first boot, Raspberry Pi will ask you for some details about location (important for networking later on) as well as giving you the option to set up the WiFi connection.

Search your network per SSID and after selecting, enter your password.

Go to `Preferences` -> `Raspberry Pi Configuration` and
a) change hostname (optional)
b) Activate SSH and VNC

SSH is for Command Line Access and VNC for remote Graphical Interface support

Now is a good time to update / upgrade.

`sudo apt update`
`sudo apt -y upgrade`
`sudo reboot`

## SSH connection for remote piloting and VNC

Head over to the main tab, go to `Raspberry Pi Configurations`
and make sure to set both `VNC` and `SSH` to `on`

It may be needed to install a vnc server or a remote desktop protocol, but for me it wasn't needed.

You can now install `Real VNC` on your laptop and remote acces the GUI from your local laptop. You should be able to SSH via the
terminal as well with the `ssh pi@[IP address]`. If succesful, you will see a new user in the terminal (`pi@[your username]`).

## Install the Apache server

To enable a proxy web server for your pi, use the folowing command:

`sudo apt install apache2`

[see also](https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md)

You can test the web server in the browser and go to `https://{YOUR USERNAME}.local`. This can be done in the same network.

## Install a DB

The easiest and recommended (HVA) DB is MariaDB, which is suitable for smaller projects.

Install MariaDB client and server:

`https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md`

For easier access later on and without having to fully open up the Raspberry (we don't want that --security), start the MySQL client with root priviliges:
`sudo mysqsl -u root`

with in MySQL client:

```SQL
create user rroot identified by ’admin’;
 grant all on *.* to rroot  with grant option;
 flush privileges;
 quit;
```

Change to MariaDB config for remote acces:

`sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf`

and comment out the local host address with the `#` sign:

`#bind-address = 127.0.0.1`

Save and quit

`sudo service mysql restart`

to update the settings. Conf files need this often to work. Best to test the [connenction](https://dlo.mijnhva.nl/d2l/le/content/333009/viewContent/1131236/View).

## a file transfer protocol server

The recommended FTP server from HVA is installed with:

`sudo apt install vsftpd`

Standard setting are `read only`. The change this:

`sudo nano /etc/vsftpd.conf`

and update the following settings by commenting out:

```yml
write_enable=YES
local_umask=022
```

## IntelliJ

`sudo chown -R pi.pi /var/www/html`

