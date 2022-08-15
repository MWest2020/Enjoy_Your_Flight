# Setting up the captive portal

## installing the software

Begin by updating your RPi with the latest package information:

`sudo apt-get update`

With our package manager up to date, install a dependency required by
nodogsplash:

`sudo apt-get install libmicrohttpd-dev`

Next, clone the nodogsplash GitHub repository to your home directory:

```bash
cd ~/
git clone https://github.com/nodogsplash/nodogsplash.git`
```

We can now compile nodogsplash from the source:

```bash
cd nodogsplash
make
sudo make install
```

## Configuration changes

Make sure you are the owner of the `nodogsplash` directory:

- `sudo chown -R pi:pi /etc/nodogsplash`

**Replace the file at:**
`/etc/nodogsplash.conf`

With the same name file in the NDS folder in the project docs

Also replace the **splash.html**, **splash.css** and the **images** folder with the same name files in the resource folder of the project:

**These have to go into:**
`/etc/nodogsplash/htdocs`

## Adjusting DNSmasq

Open the dnsmasq config file:

`sudo nano /etc/dnsmasq.conf`

There should already be some settings in there but make sure all of this is in it, add what is missing:

```bash
inferface=wlan0
server=1.1.1.1
dhcp-range=192.168.220.2,192.168.220.240,255.255.255.0,12h
domain-needed
bogus-priv
expand-hosts
domain=eyf.com
```

Save this by `CTRL + X`

To be sure, we also add it in out hosts file:

`sudo nano /etc/hosts`

add at the bottom:

- `192.168.0.126 node`

## Starting the captive Portal

This is simply done by `sudo nodogsplash`.

Using this only would mean we need to manually start and stop the captive portal, meaning we would need to code this everytime we have need of it.

Luckily, we can configure a daemon (background service) with `systemd`.

``` bash
sudo cp ~/nodogsplash/debian/nodogsplash.service /lib/systemd/system/
sudo systemctl enable nodogsplash.service 
```

Next, start the service and check its status:

```bash
sudo systemctl start nodogsplash.service 
sudo systemctl status nodogsplash.service
```

Note: *The captive portal may be stopped with `sudo systemctl stop nodogsplash.service` or disabled completely with `sudo systemctl disable nodogsplash.service`.*
