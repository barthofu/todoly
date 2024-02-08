import { Box, Button, HStack, Icon, VStack } from '@chakra-ui/react'
import { List } from '@components/modules'
import { Task } from '@prisma/client'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { IconType } from 'react-icons'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

type ListSliderProps = {
    dates: string[]
    columns: number
    next: (current: string) => void
    previous: (current: string) => void
}

export const ListSlider: React.FC<ListSliderProps> = (props) => {

    const listsContainerRef = React.useRef<HTMLDivElement>(null)

    /**
     * Move the list container to the left or right
     * @note function factory which returns a function
     */
    const moveList = (direction: 'left' | 'right') => 
        (scroll: boolean = true) => {

            if (listsContainerRef.current) {

                if (scroll && direction === 'left') {

                }
                else if (scroll && direction === 'right') {
                    
                }
            
                const width = listsContainerRef.current.clientWidth / props.columns
            
                listsContainerRef.current.scrollLeft = direction === 'left' ? width * 2 : 0
                listsContainerRef.current.scroll({
                    left: listsContainerRef.current.scrollLeft - (direction === 'left' ? width : - width),
                    top: 0,
                    ...(scroll && {behavior: 'smooth'})
                })
            }
        }

    useEffect(() => {
        moveList('left')(false)
    }, [])

	return (<>

        <Box
            position='relative'
            display='flex'
            flexGrow={1}
        >

            {/* Left arrow */}
            <ArrowWrapper icon={SlArrowLeft} action={moveList('left')}/>

            {/* List */}
            <HStack ref={listsContainerRef}
                w='100%' 
                overflowX='hidden'
            >
                {props.dates.map(date => (
                    <List
                        key={date}
                        date={date}
                    />
                ))}
            </HStack>

            {/* Right arrow */}
            <ArrowWrapper icon={SlArrowRight} action={moveList('right')}/>

        </Box>
    </>)
}

/**
 * Wrapper for the arrow buttons
 */
const ArrowWrapper: React.FC<{ 
    icon: IconType, 
    action: () => void
}> = (props) => {
    
    return (
        <VStack justify='center'>
            <Button justifyContent='center' onClick={props.action}>
                <Icon as={props.icon}/>
            </Button>
        </VStack>
    )
}