import { trpc } from '@lib/trpc'
import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'

const HomePage: NextPage = () => {

	const { data } = trpc.helloWorld.helloWorldWithParams.useQuery({ name: 'everyone' })

	return (<>

		<DefaultLayout
			title='Home'
		>

			<Box>
				{data?.message}
			</Box>

		</DefaultLayout>		
	
	</>)
}

export default HomePage