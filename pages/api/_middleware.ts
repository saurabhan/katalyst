//create a next api middleware
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import {auth} from '../../firebase/firebase'

export const middleware = ( req: NextApiRequest, res: NextApiResponse) => {
    console.log(auth.currentUser)
    if(auth.currentUser !== null){
       NextResponse.next()
    }else{
       NextResponse.json({message: 'user is not authenticated'})
    }
}

