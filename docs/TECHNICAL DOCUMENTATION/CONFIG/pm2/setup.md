# Setting up PM2

Make sure you are the owner of the project directory:

-	`sudo chown -R pi:pi team07`

In the app:

- `npm install pm2`

- `npm install -g pm2`

- `pm2 start app.js -–name “eyf07”`

Name is optional, you can use that in the future to refer to the app in commands or see it in the list with:

- `om2 list`



Setup startup from reboot PI:

-	`pm2 startup`

Should receive something like:

```yml
[PM2] Init System found: systemd
-----------------------------------------------------------
PM2 detected systemd but you precised systemd
Please verify that your choice is indeed your init system
If you arent sure, just run : pm2 startup
-----------------------------------------------------------
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u ayo --hp /home/ayo*
```

Just copy and paste that command and run it.

-	`sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup <distribution> -u <user> --hp <home-path>`

Should receive this, indicating PM2 is configured to start at boot:

```
[PM2] Init System found: systemd

. . .

[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
$ pm2 save

[PM2] Remove init script via:
$ pm2 unstartup systemd
```


Run:

-	`pm2 save`

Restart the Pi and then run the following command to see if all processes are restored:

-	`pm2 list`
