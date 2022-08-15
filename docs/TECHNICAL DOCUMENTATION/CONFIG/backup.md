# FULL Back up Raspberry Pi

This method is the easiest if not for scheduled backups or partial backs ups.

1) Turn down the Raspberry Pi with the `sudo shutdown -h` command. A minute later, your Pi will shut down.
Remove the SD card and put the SD card in your Windows laptop.

Launch `Win32 Disk Imager` or download an imager per your preference.

Choose a location for your backup. The menu can be a bit confusing, but the folder selected is where you will store the `backup`. The selection next to it is the actual drive you are backing up (your Pi system files and all).

Initiate the backup by selecting the `Read` option. Do not forget to add `.img` after the backup name.

Verify the backup process is successful

How to restore your backup file contents? Reverse the process by selecting the backup image and select the drive, but choose `Write` this time

## Back up files from a Pi to another system (Linux or Mac)

This method will back up files from your `pi` to your laptop.

Install on BOTH your laptop and Pi:

`sudo apt-get install rsync`

Then, on your computer (where you want to store your backup):

`mkdir /home/[USER]/backups_pi`

and on your P:

`mkdir /home/[USER]/backup`

With `rsync` installed, there are two ways to back your Pi up:

From your computer:

`rsync -auzr pi@[RASPBERRY_IP]:/home/pi/backup/* /home/[USER]/backups_pi/`

From your Raspberry Pi:

`rsync -avzP --rsh=ssh /home/pi/backups/* [USER]@[COMPUTER_IP]:/home/[USER]/backups_pi/`

Don't forget to substitute the variables with your system's variables. Your computer will have an IP in the range of 192.168.xx.xx, and your Pi, if you followed RaspAP 10.xx.xx.xx. 192.168.220.1 if you followed the regular way.
