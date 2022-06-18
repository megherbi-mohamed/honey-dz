import React from 'react'
import { useParams } from 'react-router-dom';
import OnlineCommande from './OnlineCommande';
import OfflineCommande from './OfflineCommande';

const Commande = () => {

    const {type} = useParams();

    if (type === 'online') {
        return <OnlineCommande />
    }
    if (type === 'offline') {
        return <OfflineCommande />
    } 
}

export default Commande