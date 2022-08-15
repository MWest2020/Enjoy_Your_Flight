-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET latin1 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `seatNumber` INT(11) NOT NULL,
  `firstname` VARCHAR(45) NULL DEFAULT NULL,
  `lastName` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`seatNumber`),
  UNIQUE INDEX `seatNumber_UNIQUE` (`seatNumber` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

-- -----------------------------------------------------
-- Table `mydb`.`order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`order` ;

CREATE TABLE IF NOT EXISTS `mydb`.`order` (
  `orderNumber` INT(11) NOT NULL AUTO_INCREMENT,
  `time` TIMESTAMP NULL DEFAULT NULL,
  `user_seatNumber` INT(11) NOT NULL,
  `status` VARCHAR(45) NOT NULL,	
  PRIMARY KEY (`orderNumber`),
  UNIQUE INDEX `orderNumber_UNIQUE` (`orderNumber` ASC) VISIBLE,
  INDEX `fk_order_user_idx` (`user_seatNumber` ASC) VISIBLE,
  CONSTRAINT `fk_order_user`
    FOREIGN KEY (`user_seatNumber`)
    REFERENCES `mydb`.`user` (`seatNumber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`category` ;

CREATE TABLE IF NOT EXISTS `mydb`.`category` (
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `category` VALUES ('fris'),('broodjes'),('warm tussendoortje'),('sieraden'),('snacks'),('parfum');

-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`product` ;

CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `price` DOUBLE NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `category_name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_product_category1_idx` (`category_name` ASC) VISIBLE,
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`category_name`)
    REFERENCES `mydb`.`category` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = latin1;

DROP TABLE IF EXISTS `mydb`.`memory_highscore` ;

CREATE TABLE IF NOT EXISTS `mydb`.`memory_highscore`  (
    `dateTime` DATE NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `aantalBeurten` INT NOT NULL,
    `tijdsDuur` INT NOT NULL,
    PRIMARY KEY (`dateTime`, `name`))
              ENGINE = InnoDB
              DEFAULT CHARACTER SET = latin1;


INSERT INTO `product` VALUES (2,'broodje gezond','Ons broodje gezond wordt geserveerd op een heerlijk vers gebakken broodje naar keuze en wordt belegd met jong belegen kaas, tomaat, ijsbergsla, ham, gekookt ei en komkommer. ',3.50,'broodjeGezond.jpg','broodjes'),
(3,'Mars','Heerlijke chocolade in combinatie met karamel en nougat wat een unieke smaak geeft.',1.50,'mars.jpg','snacks'),
(4,'Oorbellen','Mooie oorbellen gemaakt van 24K goud, in de vorm van hartjes gegoten',250.50,'oorbellen.png','sieraden'),
(5,'Pepsi max','Geniet met Pepsi Max van de smaak van Pepsi cola, zonder suiker',2.00,'pepsiMax.jpg','fris'),
(6,'Sisi','SiSi No Bubbles Orange is een heerlijke fruitdrank zonder koolzuur met sinaasappelsmaak. Deze lekker tropische smaak is nu verlaagd in suiker en nóg lekkerder!',2.50,'sisi.jpg','fris'),
(7,'Snicker', 'Reep van melkchocolade met een luchtige vulling, karamel en knapperige, geroosterde pinda\'s in een handige meeneemverpakking.',1.50,'snicker.jpg','snacks'),
(8,'John hardy dragon armband', 'Uit onze Legends-collectie is de Naga geïnspireerd op de mythische waterdraak die de parel van de oceaan beschermt. Draag naar binnen gericht om liefde en overvloed te krijgen, of naar buiten voor bescherming.', 695.00, 'armband.jpg', 'sieraden'),
(9,'Unox Good Noodles Kip','Unox Good Noodles Kip: daar kun je lekker lang op door!',3.50,'goodNoodles.jpg','warm tussendoortje'),
(10,'Solid Gold Petite Micropave','Ontworpen en verkocht door Hafeez Center in de Verenigde Staten. Tevredenheid gegarandeerd.',168.99,'armbandDiamanten.jpg', 'sieraden'),
(11,'1 million parfum', '1 Million Parfum, een bloemige ledergeur voor heren met de kracht van de zon. Een geur voor zij die van verandering houden.', 74.95,'oneMillion.jpg','parfum'),
(12, 'Blue de chanel', 'Een lofzang op de vrijheid in een houtachtig aromatisch parfum met een verleidelijk karakter. Een tijdloos parfum, in een mysterieus blauwe flacon.', 61.17, 'blueChanel.jpg','parfum'),
(13, 'Cup-a-Soup Tomaat', 'Unox Cup-a-Soup Tomaat is een heerlijk hartig tussendoortje en is eenvoudig en snel te bereiden!', 1.50,'cupASoupTomaat.jpg','warm tussendoortje'),
(14, 'Cup-a-Soup kip', 'Unox Cup-a-Soup Kip is een heerlijk hartig tussendoortje en is eenvoudig en snel te bereiden!', 1.50,'cupASoupKip.jpg','warm ussendoortje'),
(15, 'Broodje carpaccio', 'Het broodje carpaccio wordt geserveerd op een heerlijk vers gebakken broodje naar keuze en wordt belegd met carpaccio, grana padano kaas, pesto, rucola en pijnboompitten.', 3.50,'broodjeCarpaccio.jpg','broodjes'),
(16, 'Broodje kip-bacon', 'Het broodje kip bacon is één van de hardlopers onder onze belegde broodjes en wordt geserveerd op een heerlijk vers gebakken broodje naar keuze. Het broodje kip bacon wordt standaard belegen met gerookte kipfilet, gekook ei, bacon, ijsbergsla, tomaat, komkommer en mayonaise.', 4.50,'kipBacon.jpg','broodjes');


-- -----------------------------------------------------
-- Table `mydb`.`orderline`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`orderline` ;

CREATE TABLE IF NOT EXISTS `mydb`.`orderline` (
  `amount` INT(11) NULL DEFAULT NULL,
  `order_orderNumber` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  PRIMARY KEY (`order_orderNumber`, `product_id`),
  INDEX `fk_orderline_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_orderline_order1`
    FOREIGN KEY (`order_orderNumber`)
    REFERENCES `mydb`.`order` (`orderNumber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orderline_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `mydb`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

-- -----------------------------------------------------
-- Table `chat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chat` ;

CREATE TABLE IF NOT EXISTS `chat` (
  `message` LONGTEXT NOT NULL,
  `time` TIMESTAMP NOT NULL,
  `user_seatNumber` INT(11) NOT NULL,
  PRIMARY KEY (`time`, `user_seatNumber`),
  CONSTRAINT `fk_chat_user1`
    FOREIGN KEY (`user_seatNumber`)
    REFERENCES `user` (`seatNumber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_chat_user1_idx` ON `chat` (`user_seatNumber` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `gameProfile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gameProfile` ;

CREATE TABLE IF NOT EXISTS `gameProfile` (
  `ballSpeed` FLOAT NOT NULL,
  `score` INT NOT NULL,
  `brickRowCount` INT NOT NULL,
  `lives` INT NOT NULL,
  `user_seatNumber` INT(11) NOT NULL,
  INDEX `fk_gameProfile_user1_idx` (`user_seatNumber` ASC) VISIBLE,
  CONSTRAINT `fk_gameProfile_user1`
    FOREIGN KEY (`user_seatNumber`)
    REFERENCES `user` (`seatNumber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb`;

DELIMITER $$

USE `mydb`$$
DROP TRIGGER IF EXISTS `user_AFTER_INSERT` $$
USE `mydb`$$
CREATE DEFINER = CURRENT_USER TRIGGER `mydb`.`user_AFTER_INSERT` AFTER INSERT ON `user` FOR EACH ROW
BEGIN
 insert into gameProfile values (1.0,0,4,3,NEW.seatNumber);
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
