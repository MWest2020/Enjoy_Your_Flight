# Set src files to correct directory

This method will upload the files to the correct directory of `apache 2`

First you need `apache 2` already installed on your raspberry pi.

Then, remove the default index.html of apache.

Go to:

`cd /var/www/html/`

Remove the index file by running the following command:

`sudo rm index.html`

Next, configure the settings for `sftp` to your Pi.

1. Open your project within intelij.
2. Go to tools -> deployment -> configuration
3. Add a new sftp connection.
4. Creat a new ssh configuration, by pressing the button with 3 dots
   - Enter the IP address of the Pi within the host input
   - Set the port number to 22
   - Enter your username within the username input. (default: pi)
   - Enter your password within the password input. (default: raspberry)
   - Test your connection
     - If something goes wrong, check your inputs again.
     - if everything goes well, press the OK button.
5. Within the path input enter the following:
   `/var/www/html/`
6. Press the OK button.

Then you have to make a connection to your Pi.

1. Go to tools -> deployment -> Browse remote host
2. A new window will pop up to the remote host.
3. Within this window press `none`, and click on your sftp connection.
4. Now you have a connection to your PI.

You're now able to drag your files from the intelij folders to your remote host
