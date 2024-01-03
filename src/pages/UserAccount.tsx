import React, { useState } from 'react';
import { Button, TextInput, Card, Title, Text, Modal, Select, Checkbox, NumberInput, Center, Group, Stack } from '@mantine/core';

function UserAccount() {
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    associations: '',
    pseudo: '',
    tailleTshirt: '',
    vegetarien: false,
    hebergement: '',
    jeuPrefere: '',
    photo: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);

  const handleInputChange = (name: string, value: string | boolean) => {
    setUser({ ...user, [name]: value });
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleDeleteAccount = () => {
    // Logique de suppression du compte
    setDeleteModalOpened(false);
  };

  return (
    <div>
      <Center style={{height: '100vh'}}>
      <Card shadow="sm" p="lg" style={{ width: '100%', maxWidth: '700px' }}>
        <Title order={2}>Mon Profil</Title>
        <Stack h={600} bg="var(--mantine-color-body)">
        {!editMode ? (
          <div>
            <Text>Nom : {user.nom}</Text>
            <Text>Prénom : {user.prenom}</Text>
            <Text>Email : {user.email}</Text>
            <Text>Associations : {user.associations}</Text>
            <Text>Pseudo : {user.pseudo}</Text>
            <Text>Taille de T-shirt : {user.tailleTshirt}</Text>
            <Text>Végétarien : {user.vegetarien ? 'Oui' : 'Non'}</Text>
            <Text>Hébergement : {user.hebergement}</Text>
            <Text>Jeu Préféré : {user.jeuPrefere}</Text>
            {/* Afficher la photo si disponible */}
            {user.photo && <img src={user.photo} alt="Profil" />}
            <Button onClick={handleEditToggle} style={{ marginTop: 20 }}>Modifier le Profil</Button>
          </div>
        ) : (
          <div>
            <TextInput label="Nom" value={user.nom} onChange={(e) => handleInputChange('nom', e.target.value)} />
            <TextInput label="Prénom" value={user.prenom} onChange={(e) => handleInputChange('prenom', e.target.value)} />
            <TextInput label="Email" value={user.email} onChange={(e) => handleInputChange('email', e.target.value)} />
            <TextInput label="Associations" value={user.associations} onChange={(e) => handleInputChange('associations', e.target.value)} />
            <TextInput label="Pseudo" value={user.pseudo} onChange={(e) => handleInputChange('pseudo', e.target.value)} />
            <TextInput label="Taille de T-shirt" value={user.tailleTshirt} onChange={(e) => handleInputChange('tailleTshirt', e.target.value)} />
            <Checkbox label="Végétarien" checked={user.vegetarien} onChange={(e) => handleInputChange('vegetarien', e.currentTarget.checked)} />
            <TextInput label="Hébergement" value={user.hebergement} onChange={(e) => handleInputChange('hebergement', e.target.value)} />
            <TextInput label="Jeu Préféré" value={user.jeuPrefere} onChange={(e) => handleInputChange('jeuPrefere', e.target.value)} />
            {/* Ajouter la gestion pour changer la photo */}
            <Button onClick={handleEditToggle} style={{ marginTop: 20 }}>Sauvegarder</Button>
          </div>
        )}
        </Stack>
        <Button color="red" onClick={() => setDeleteModalOpened(true)}>Supprimer le Compte</Button>
      </Card>

      <Modal opened={deleteModalOpened} onClose={() => setDeleteModalOpened(false)} title="Êtes-vous sûr de vouloir supprimer votre compte ?">
        <Button color="red" onClick={handleDeleteAccount}>Supprimer Définitivement</Button>
      </Modal>
      </Center>
    </div>
  );
}

export default UserAccount;