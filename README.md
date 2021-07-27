# ovya_recrutement


Question 1

Vous trouverez le fichier SQL dans le dossier backend.

Question 2

Aprés ce réajustement : ALTER TABLE Dossier ALTER COLUMN date_insert SET DEFAULT CURRENT_DATE;  
l'exécution du fichier SQL c'est éxécuté sans erreur.

Question 3

1. INSERT INTO acq (nom, email, password) VALUES ( 'Donald Knuth', 'dknuth@fsf.org', 'leonidasguibas');
2. SELECT * FROM acq WHERE email = 'acq_5933@xx.com'

Question 4

Je n'ai pas réussi à trouver la requête optimale. Voici ce que je peux vous proposez

SELECT t1.date_start, t1.ccial_id, count(*) FROM  visite AS t1 GROUP BY t1.date_start, t1.ccial_id HAVING COUNT(*) > 4 ORDER BY date_start 


SELECT json_agg(dossier_id) AS dossier_ids FROM visite WHERE date_start IN (
    SELECT t1.date_start FROM  visite AS t1 GROUP BY t1.date_start, t1.ccial_id HAVING COUNT(*) > 4 ORDER BY date_start 
)

Question 5

Je propose la solution la plus simple possible et facile d'utilisation :
Dans la table dossier je rajouterai une collonne id_ant  INT qui pourrait être null et une colonne "cloturer" VARCHAR(3) qui aurait pour valeur  par défault non. L'idée est qu'à chaque changement de commercial on clôture le dossier en modifiant la valeur de "cloturer" puis on crée un nouveau dossier et on note dans cette nouvelle collonne l'ancien numéro de dossier . Ainsi même si le dossier change 4 fois de commerciaux on peut connaitre l'historique.
Question 6  

- cloner ce repository

    pour utiliser le frontend

- taper dans votre console ou terminal dans le dossier frontend "npm install" 
- puis taper "npm run serve
- aller sur votre navigateur à l'adresse suivante "http://localhost:8080/"


pour utiliser le backend

- puis taper dans votre console ou  terminal dans le dossier backend "npm install" 
-  puis "nodemon serve"
