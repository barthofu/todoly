import { Box, Heading, Input, VStack } from '@chakra-ui/react'
import { toPascalCase } from '@core/utils/functions/text'
import { trpc } from '@core/utils/lib/trpc'
import { Task } from '@prisma/client'
import React from 'react'
import { TaskRow } from './TaskRow'
import { TaskSummary } from './TaskSummary'

type ListProps = {
    // title: string,
    // highlighted: boolean
    // description?: string
    // tasks: Task[]
    date: string
}

const minTaskSlots = 10

export const List: React.FC<ListProps> = (props) => {

    const { data, isLoading } = trpc.lists.getDailyList.useQuery({ date: props.date })

	return (<>
        <VStack
            flex='0 0 20%'
            alignItems='center'
            padding='1em'
            margin='1em 0'
            scrollSnapAlign='start'
        >

            {isLoading && <Heading>Loading...</Heading>}

            {data && <>
            
                <Heading as='h2'
                    fontSize='1.25rem' fontWeight='medium'
                    fontFamily='system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
                    textDecoration={data.highlighted ? 'underline' : 'none'}
                >{toPascalCase(data.title)}</Heading>

                {data.description && 
                    <Heading as='h3'
                        fontSize='0.75rem' fontWeight='400'
                        fontFamily='system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
                        color='grey'
                    >
                        {data.description}
                    </Heading>
                }

                {/* Tasks */}
                <Box as='ul' w='100%'>
                    
                    {data.tasks.map((task) => (
                        <TaskRow key={task.id}>
                            <TaskSummary task={task}></TaskSummary>
                        </TaskRow>
                    ))}

                    {/* New task input and fake dropzone  */}
                    <TaskRow>
                        <Input 
                            type='text' name='newTask'
                            height='26px'
                            margin='2px 0' padding='0 6px'
                            border='none' focusBorderColor='none'
                        />
                    </TaskRow>

                    {/* Fake tasks slots */}
                    {Array.from({ length: minTaskSlots - data.tasks.length }).map((_, i) => (
                        <TaskRow key={i} />
                    ))}

                    <Box>

                    </Box>
                </Box>
            </>}

            

        
        </VStack>
    </>)
}