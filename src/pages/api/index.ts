import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

	res.status(200).json({ message: 'API is running' })
}

export default handler