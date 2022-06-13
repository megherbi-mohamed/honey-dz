import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AddressPreview = ({address,index}) => {

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    const display = (id) => {
        dispatch({type:'display',payload: {hideBody:'!block',confirmation:'!block'}})
        dispatch({type:'data',payload: {id:id}})
    }
    
    return (
        <>
            <div className={`m-[3rem_0]`}>
                <h3 className='font-[600] text-[1.25rem] pb-[.75rem]'>(Default address)</h3>
                <div className='flex items-center py-[1.25rem] border-b-[1px] border-[#dedede]'>
                    <div className='w-1/2'>Name</div>
                    <div className='w-1/2'>{address.firstname+' '+address.lastname}</div>
                </div>
                <div className='flex items-center py-[1.25rem] border-b-[1px] border-[#dedede]'>
                    <div className='w-1/2'>Email</div>
                    <div className='w-1/2'>{user?.result.email}</div>
                </div>
                <div className='flex items-center py-[1.25rem] border-b-[1px] border-[#dedede]'>
                    <div className='w-1/2'>Address</div>
                    <div className='w-1/2'>{address.address1+' '+address.address2}</div>
                </div>
                <div className='flex items-center py-[1.25rem] border-b-[1px] border-[#dedede]'>
                    <div className='w-1/2'>Country</div>
                    <div className='w-1/2'>{address.country}</div>
                </div>
                <div className='flex items-center py-[1.25rem] border-b-[1px] border-[#dedede]'>
                    <div className='w-1/2'>Postal/Zip Code</div>
                    <div className='w-1/2'>{address.zipcode}</div>
                </div>
                <div className='flex items-center py-[1.25rem] border-b-[1px] border-[#dedede]'>
                    <div className='w-1/2'>Phone</div>
                    <div className='w-1/2'>{address.phone}</div>
                </div>
                <div className='flex items-center mt-[30px]'>
                    <Link to={`update/${address._id}`} className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>Edit</Link>
                    {index === 0 ? null :
                        <button onClick={()=>display(address._id)} className='ml-[30px]'>Delete</button>
                    }
                </div>
            </div>
        </>
    )
}

export default AddressPreview