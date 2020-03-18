Create table SOS_Joueurs
(
	Id_Joueur int identity,
	Nom varchar(50),
	Prenom  varchar(50),
	Adresse_Mail varchar(100),
)

Insert into SOS_Joueurs values ('Laderval', 'Nelson', 'NelsonLaderval@gamil.com');

Select * from SOS_Joueurs

Update SOS_Joueurs
set Adresse_Mail = 'NelsonLaderval@gmail.com'