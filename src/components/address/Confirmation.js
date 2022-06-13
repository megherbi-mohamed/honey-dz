import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'

import { deleteUserAddress } from '../../actions/address';

const Confirmation = () => {

    const {message, loading} = useSelector((state) => state.message);
    const display = useSelector((state) => state.display);
    const data = useSelector((state) => state.data);

    const alert = useAlert();

    useEffect(() => {
        if (message !== '' && display.confirmation === '!block') {
            alert.success(message,{ timeout: 4000})
        }
    }, [message])

    const dispatch = useDispatch();
    const deleteAddress = (id) => {  
        dispatch(deleteUserAddress(id))
    }

    const hide = () => {
        dispatch({type:'display',payload: {hideBody:'',confirmation:''}})
    }

    useEffect(() => {
        console.log(data.id);
    }, [data])
    

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 hidden ${display.confirmation}`}>
            <div className='w-[90%] md:w-[400px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-[30px] rounded-[10px] bg-white shadow-prd'>
                <h3 className='text-[1.1rem] pb-[15px]'>Are you sure ?</h3>
                <div className='flex items-center'>
                    <button onClick={()=>deleteAddress(data.id)}  className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>
                        {loading ?  (<div className='loader-button'></div>) : ('Delete')}
                    </button>
                    <button className='ml-[30px]' onClick={()=>hide()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation