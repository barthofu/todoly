import { Box } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'
import { ListSlider } from '@components/modules'
import { getFormatedDate, getLocalizedCurrentDay, getToday, isToday } from '@core/utils/functions'
import { trpc } from '@lib/trpc'
import dayjs from 'dayjs'
import type { NextPage } from 'next'
import { useState } from 'react'

const HomePage: NextPage = () => {

	const columns = 5

	const [currentDay, setCurrentDay] = useState(getToday())
	const dailyLists = trpc.lists.getDailyLists.useQuery({
		date: currentDay,
	})

	const customLists = trpc.lists.getAll.useQuery()

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

			<Box w='100vw'>
				<ListSlider
					lists={dailyLists.data?.map(list => ({
						id: list.date,
						title: getLocalizedCurrentDay(list.date, 'fr'),
						description: getFormatedDate(list.date),
						highlighted: isToday(list.date),
						tasks: list.tasks
					})) || []}
					current='2023-04-03'
					columns={columns}
					next={(current: string) => {

						const parsedCurrentDay = dayjs(current)
						const newCurrentDay = parsedCurrentDay.add(columns + 1, 'day').format('YYYY-MM-DD') 

						setCurrentDay(newCurrentDay)		
					}}
					previous={(current: string) => {

						const parsedCurrentDay = dayjs(current)
						const newCurrentDay = parsedCurrentDay.subtract(1, 'day').format('YYYY-MM-DD')

						setCurrentDay(newCurrentDay)	
					}}
				/>
			</Box>

			{/* <Button onClick={createTask}>
				Click me
			</Button> */}

		</DefaultLayout>		
	
	</>)
}

export default HomePage