import { Box, HStack, Text } from '@chakra-ui/react'
import { Task } from '@prisma/client'
import React from 'react'

type TaskSummaryProps = {
    task: Task
}

export const TaskSummary: React.FC<TaskSummaryProps> = (props) => {

	return (<>
        <HStack>

            {/* Badge */}
            <Box
                w="1rem"
                h="1rem"
                borderRadius="50%"
                backgroundColor={'black'}
            />

            {/* Title */}
            <Text>
                {props.task.title}
            </Text>
            
        </HStack>
    </>)
}