<?php
require_once('auth.php');
$ReqListCategorie='SELECT * FROM categories';
$ListeCategorie=$conDb->query($ReqListCategorie);





?>

<html>
    <body>
        <select name="listCat" id="listCat">
            <?php
            while($rowsCategorie=$ListeCategorie->fetch()){
                ?>
                <option value="<?php echo $rowsCategorie['Id_cat'];?>" class="value"><?php echo $rowsCategorie['Nom'];?></option>
            
            
            <?php }

            ?>
        </select>
    </body>
</html>