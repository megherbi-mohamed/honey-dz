import React,{lazy,Suspense} from 'react'
import { useParams } from 'react-router-dom';

const OnlineCommande = lazy(()=> import('./OnlineCommande'));
const OfflineCommande = lazy(()=> import('./OfflineCommande'));

const Commande = () => {

    // let {type} = useParams();

    // if (type === 'online') {
    //     return <Suspense fallback={<></>}> <OnlineCommande /> </Suspense>
    // }

    // if (type === 'offline') {
    //     return <Suspense fallback={<></>}> <OfflineCommande /> </Suspense>
    // }

    console.log('commande compoenent');

    return (
        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#fff] z-50 overflow-y-auto'>
            waitinng
        </div>
    )

}

export default Commande