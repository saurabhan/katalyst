import { Avatar } from '@nextui-org/react'
import { useEffect, useState } from 'react'

interface Props {}
interface quoteProps{
    body: string
    id: number
    author_id: number
    author: string
}

const DashboardHeader = (props: Props) => {
    const quoteURL = 'https://stoicquotesapi.com/v1/api/quotes/random'
    
    const quote = async () => {
        const response = await fetch(quoteURL)
        const data = await response.json()
        return data
    }
    const [quoteData, setQuoteData] = useState<quoteProps>()
    useEffect(() => {
        quote().then(data => {
            setQuoteData(data)
        }
        )
    }, [])


  return (
    <div className='container mx-auto p-6 m-4'>
        <div className='flex gap-5'>
        <Avatar/>
        <h1 className='text-3xl font-bold'>Hello, Saurabh</h1>

        </div> 
        <blockquote className='text-xl font-serif italic tracking-wide p-6 mt-4 text-center'>{quoteData?.body}</blockquote>
    </div>
  )
}

export default DashboardHeader