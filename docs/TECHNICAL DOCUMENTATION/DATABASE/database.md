## Setup database connection

First install mariadb on your pi by executing the following command `sudo apt install mariadb-server mariadb-client` in the terminal.

Then you have to setup a root account for remote access.

1. Start mysql client on the pi with root privileges. `sudo mysql –u root`
2. Execute the following SQL queries:
   - `create user 'rroot' identified by 'admin';`
   - `GRANT ALL PRIVILEGES ON * . * TO 'rroot'@'localhost';`
   - `flush privileges;`
   - `quit;`
   - Now you have a `rroot` with the password `admin`. This account has remote access and access to all databases.
3. By default mariadb don't have remote access enabled, so you have to do this.
   - Execute the following command in the terminal, `sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf`
   - Comment out the `bind-address` line with a comment sign `#`
   - Save this file (`^O en ↩`) and exit (`^X`)
   - Restart MySQL service by entering the following command in the terminal `sudo service mysql restart`
4. Now you'r good to go and run the database test.

5. Copy the Create script from the `/doc` folder and paste this in the `mysql` terminal.
