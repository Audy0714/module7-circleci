// 1 : render du component avec un mot de passe(mdp) :  <HidePassword>{mdp}</HidePassword>
// 2 : test que la valeur de {mdp} ne se retrouve pas à l'écran
// 3 : simulation de click sur le libelle 'afficher mdp'
// 4 : test que la valeur de {mdp} se retrouve à l'écran
//utilisation de '@testing-library/react'

import {render, screen, fireEvent} from '@testing-library/react';
import HidePassword from './hidePassword';

it('test du rendu de affichage de mdp', () => {
    const mdp = "azerty123"
    // ce component <HidePassword> quand je fais un render de ce mdp
    render(<HidePassword>{mdp}</HidePassword>);
    //1 étape : je vérifie avec le composant React queryByText (il va chercher dans le texte) et je vérifie que c'est null car c'est ce que j'ai demandé 
    expect(screen.queryByText(mdp)).toBeNull();
    // je clique sur le label 'afficher mdp' 
    fireEvent.click(screen.getByLabelText('afficher mdp'))
    // je refais un test avec le mdp et on vérifie qu'il est bien dans le document
    expect(screen.getByText(mdp)).toBeInTheDocument();
})