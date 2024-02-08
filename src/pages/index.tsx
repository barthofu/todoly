import { Box } from '@chakra-ui/react'
import { DefaultLayout } from '@components/layouts'
import { ListSlider } from '@components/modules'
import { getAllIntermediateDates, getFormatedDate, getLocalizedCurrentDay, getToday, isToday } from '@core/utils/functions'
import { trpc } from '@lib/trpc'
import dayjs from 'dayjs'
import type { NextPage } from 'next'
import { useState } from 'react'

const HomePage: NextPage = () => {

	const columns = 5

	const [dates, setDates] = useState<string[]>(getAllIntermediateDates(
		dayjs().subtract(2, 'day').format('YYYY-MM-DD'), 
		dayjs().add(columns + 1, 'day').format('YYYY-MM-DD')
	))

	console.log(dates)

	const customLists = trpc.lists.getAll.useQuery()

	return (<>

		<DefaultLayout
			title='Home'
		>

			<Box w='100vw'>
				<ListSlider
					dates={dates}
					columns={columns}
					next={(current: string) => {

						if (current === dates[dates.length - columns - 2]) {

							const parsedCurrentDay = dayjs(current)
							const newCurrentDay = parsedCurrentDay.add(columns + 1, 'day')

							setDates([...dates.slice(1), newCurrentDay.format('YYYY-MM-DD')])
						}
					}}
					previous={(current: string) => {

						if (current === dates[1]) {

							const parsedCurrentDay = dayjs(current)
							const newCurrentDay = parsedCurrentDay.subtract(1, 'day').format('YYYY-MM-DD')

							setDates([newCurrentDay, ...dates.slice(0, -1)])
						}

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