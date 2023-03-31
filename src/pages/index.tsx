import { trpc } from '@lib/trpc'
import type { NextPage } from 'next'

import { Box, Button } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'

const HomePage: NextPage = () => {

	const tasks = trpc.tasks.getAll.useQuery()
	const createTaskMutation = trpc.tasks.create.useMutation()

	const createTask = async () => {

		await createTaskMutation.mutateAsync({
			data: {
				title: 'Test',
				description: 'Test',
			}
		})
		
		tasks.refetch()
	}

	return (<>

		<DefaultLayout
			title='Home'
		>

			<Box>
				{JSON.stringify(tasks.data)}
			</Box>

			<Button onClick={createTask}>
				Click me
			</Button>

		</DefaultLayout>		
	
	</>)
}

export default HomePage