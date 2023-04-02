import { Box, Heading, Text } from '@chakra-ui/react'
import { Task } from '@prisma/client'
import React from 'react'
import { TaskSummary } from './TaskSummary'

type ListProps = {
    title: string
    date?: string
    tasks: Task[]
}

export const List: React.FC<ListProps> = (props) => {

	return (<>

        <Heading as='h2'>{props.title}</Heading>

        {props.date && <Heading as='h3'>{props.date}</Heading>}

        <Box as='ul'>
            {props.tasks.map((task) => (
                <Box as='li' key={task.id}>
                    <TaskSummary task={task}></TaskSummary>
                </Box>
            ))}
        </Box>
    </>)
}