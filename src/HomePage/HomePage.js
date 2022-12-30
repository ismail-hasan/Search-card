import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [datas, setDatas] = useState([])
    const [inputFieldName, setInputFieldName] = useState("")
    console.log(inputFieldName)



    useEffect(() => {
        fetch(inputFieldName.length ? `https://jsonplaceholder.typicode.com/users/?name=${inputFieldName}` : "https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(data => {
                setDatas(data)
            })
    }, [inputFieldName])


    const inputForm = (event) => {
        event.preventDefault()
        const inputName = event.target.inputField.value
        console.log(inputName)
        setInputFieldName(inputName)
    }

    return (

        <div className='my-10'>

{

}

            <form onSubmit={inputForm} className='mb-10' action="">
                <input name='inputField' type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
                <button className="btn btn-accent">Search</button>
            </form>
            <div className='grid grid-cols-4 gap-7 px-10'>



                {
                    datas.map(data => {
                        return (
                            <div key={data.id}>

                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body shadow-md">
                                        <h2 className="text-[20px]">Name : {data?.name}</h2>
                                        <h2 className="text-[16px]">UserName : {data?.username}</h2>
                                        <h2 className="text-[16px]">Email : {data.email}</h2>
                                        <h2 className="text-[16px]">City : {data?.address?.city}</h2>
                                        <h2 className="text-[16px]">street :{data?.address?.street}</h2>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HomePage;