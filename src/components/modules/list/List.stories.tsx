import { StoryObj } from '@storybook/react'

import { List } from './List'

export default {
    title: 'List',
    component: List,
}

export const Primary: StoryObj<typeof List> = {
    args: {
        title: 'Test',
        tasks: [
            {
                id: 1,
                title: 'Test',
                description: 'Test',
                done: false,
                archived: false,
                color: 'red',
                date: new Date(),
                listId: null,
                parentId: null,
                time: null
            }
        ]
    }
}