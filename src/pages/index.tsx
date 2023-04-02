import { trpc } from '@lib/trpc'
import type { GetServerSideProps, NextPage } from 'next'

import { Box, Button } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'

const HomePage: NextPage = () => {

	const tasks = trpc.tasks.getAll.useQuery()
	const lists = trpc.lists.getAll.useQuery()

	// const createTaskMutation = trpc.tasks.create.useMutation()

	// const createTask = async () => {

	// 	await createTaskMutation.mutateAsync({
	// 		data: {
	// 			title: 'Test',
	// 			description: 'Test',
	// 		}
	// 	})
		
	// 	tasks.refetch()
	// }

	return (<>

		<DefaultLayout
			title='Home'
		>

			<Box>
				{JSON.stringify(lists.data)}
				{JSON.stringify(tasks.data)}
			</Box>

			{/* <Button onClick={createTask}>
				Click me
			</Button> */}

		</DefaultLayout>		
	
	</>)
}

export default HomePage