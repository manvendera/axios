import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


export default function Random() {

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)

    async function fetchData() {

        setLoading(false)
        toast.warning('Random Gifs Loaded')
        const url = `https://api.giphy.com/v1/gifs/random?api_key=33pKYbyuOrnmP5O5XwC1vKhUQb8NSg0a`
        const output = await axios.get(url)
        const imageSource = output.data.data.images.downsized_large.url;
        // console.log(imageSource);

        if (setGif(imageSource)) {
            toast.warning('Random Gifs Loaded')
        }
        else {
            toast.success('random Gifs generated')
        }
        setLoading(true)

    }
    useEffect(() => {
        fetchData()
    }, [])

    function clickHandler() {
        fetchData()

    }
    return (

        <div className='flex flex-col items-center mt-28 w-[60vw]  border-2 border-black rounded-lg bg-green-500'>
            <h1 className='underline text-lg font-bold text-center'>Random Gif</h1>

            {!loading ? (<Spinner></Spinner>) : (<img className='' src={gif} alt="random Gif" />)}

            <button className='bg-white w-[40vw] font-bold mt-4  rounded-md py-1'
                onClick={clickHandler}>
                Generate
            </button>
        </div>)
}
