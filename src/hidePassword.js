import React from 'react';

// 1 : props : children qui contient le mdp
// création du State avec un hook (= const []): showPassword = boolean qui permet de dire si on affiche le mdp ou pas
// state : showPassword et setShowPassword

// 2 : label = libelle : html = afficher mdp
// ou 2 : input : type checkbox = afficher mdp

// 3 : onChange : setShowPassword
 // on change le state avec le checked

// 4 : ternaire pour affichage du password
// en fonction du state on affiche ou pas le mdp

// CREATION DU COMPONENT
const HidePassword = ({children}) => {

    const [showPassword, setShowPassword] = React.useState(false)
    return(
        <div>
            <label htmlFor = "toogleMdp">afficher mdp</label>
            <input
                id = "toogleMdp"
                type = "checkbox"
                checked = {showPassword}
                onChange =  {e => setShowPassword(e.target.checked)}
            />
            
            {showPassword ? children : null}
        </div>
    )
}

export default HidePassword;