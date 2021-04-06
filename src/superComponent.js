// 1 : créer un composant qui affiche ou masque un texte
// 2 : hook state - showMessage
// 3 : create label
// 4 : create check box

import React from 'react';

//<SuperComponent> salut tout le monde </SuperComponent> -- children
function SuperComponent ({children}) {
    const [showMessage, setShowMessage] = React.useState(false);
    return (
        <div>
            <label htmlFor = "toogle">Mon super Header</label>
            <input
                id = "toogle"
                type = "checkbox"
                checked = {showMessage}
                onChange = {e => setShowMessage(e.target.value)}
            />

            {showMessage ? children : null}
        </div>
    )
}

export default SuperComponent;