
                                                                                    
            <?php
            require_once("auth.php");
            if(isset($_GET['idcat']))
                $idcat=$_GET['idcat'];
            else {
                $idcat=1;
           
            }
        
           
            $ReListeProduit='SELECT * from produits where Id_cat='.$idcat;

            $ListeProduit=$conDb->query($ReListeProduit);
            echo '<thead class="text-uppercase bg-success">
               <tr class="text-white">
               <th scope="col">ID</th>
                <th scope="col">Categorie</th>
                  <th scope="col">Designation</th>
                 <th scope="col">Quantité</th>
                   <th scope="col">Prix</th>
                
                  </tr> 
                  </thead>';
            while($row=$ListeProduit->fetch()){
                
                
                ?>
                    <table border="1">
                    <script>alert("just to texte");</script>
            
                    <tr>
                    <th scope="row"> <?php echo(htmlentities($row['Id_pro'])); ?></th>
                        <td><?php echo $row["Designation"];?></td>
                        <td> <?php echo(htmlentities($row['Id_cat'])); ?></td>
                      
                        
                          <td> <?php echo(htmlentities($row['Quantite'])); ?></td>
                         <td> <?php echo(htmlentities($row['Prix'])); ?></td>
                                                   
                       
                    </tr>
                </table>
            
            <?php
            }
            
            ?>
                                                                             