import { Box } from '@chakra-ui/react'
import React from 'react'

type TaskRowProps = {
    children?: React.ReactNode
}

export const TaskRow: React.FC<TaskRowProps> = ({ children }) => {

	return (<>
        <Box
            as='li'
            h='26px' w='100%'
            borderBottom='1px solid #eaecef' 
        >
            {children}
        </Box>
    </>)
}