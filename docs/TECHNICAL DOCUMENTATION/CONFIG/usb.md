# Mounting USB

Linux is not a plug and play USB system. For a linux-based system (Pi is one), you need to __mount__ storage devices for the system to recognize the storage unit.

## Mounting manually

Mounting a disk manually can be done by opening the terminal and use the following command:

`sudo mount /dev/sda1 /mnt/usb`

This should do the trick for a quick standard mount.

This won't work for USB drives for media players, as our controller is calibrated to using that brand at the moment. In case other brands are used, check out below, as well as automatic mounting on boot.

## Get information about the drive

```bash
sudo apt update 
sudo apt upgrade -y
```

------------------------------------------------------------------------------------------------------
**_NOTE:_** if you are using NFTS based drives install the nfts-3g package as well:

`sudo apt install nfts-3g`

### drive specifics

Additional information is needed to mount this way, and we'll use the fdisk tool for this

`sudo fdisk -l`

You will see an overview on drives being mounted and the type (NFTS, see above). A few things are good to keep inmind here:

- the drive disk __size__
- the drive disk __type__
- the drive disk __name__

Note down these specifics, we need them later.

### UUID

When you format a disk, the system assigns an ID to the disk. That's the UUID. We will use this for booting automatically later.

to get the UUID:

`sudo ls -l /dev/disk/by-uuid`

you will get and overview with read/write/execute rights by user, a date and the _UUID_. Find the corresponding name for earliers and jot down the UUID.

## Creating a mount point

Almost done. Linux based systems need input fro you _where_ you want the usb drive. Convention is to do this in `/mnt` or `/media` for USB drives. We will use `/media`, as we this is media player oriented.

create the directory:
`sudo mkdir /media/INTENSO`

## Manually mounting the disk

Fast manual mount. Will be lost on reboot:

`sudo mount [DEVICE] [TARGET FOLDER] -o [OPTIONS]`

in our case:

`sudo mount /dev/sda1 /media/INTENSO -o uid=pi, gid=pi`

to unmount:

`sudo umount /media/INTENSO`

## AUTOMATICALLY MOUNT THE USB

As mentioned before, rebooting a Pi will result in unmounting the usb. Coming this far, you'll understand we want this done automatically.

`/etc/fstab` is a configuration file to configure a mount point for each device.
We’ll save in this file all information needed to mount our USB drive to /mnt/usb.

Follow this procedure to add your USB drive in this file:

`sudo nano /etc/fstab/`

Add this at hte end:
l
`UUID=1AA7 /media/INTENSO vfat defaults, nofail 0 2`

reboot the system or mount right away with `sudo mount -a`.
