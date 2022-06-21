import React,{lazy,Suspense} from 'react'
import { useParams } from 'react-router-dom';

const OnlineCommande = lazy(()=> import('./OnlineCommande'));
const OfflineCommande = lazy(()=> import('./OfflineCommande'));

const Commande = () => {

    let {type} = useParams();

    if (type === 'online') {
        return <Suspense fallback={<></>}> <OnlineCommande /> </Suspense>
    }

    if (type === 'offline') {
        return <Suspense fallback={<></>}> <OfflineCommande /> </Suspense>
    }

}

export default Commande