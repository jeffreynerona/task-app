const initialData = {
    tasks: {
        'task1': { id: 'task1', content: 'Take out garbage' },
        'task2': { id: 'task2', content: 'Watch Anime'},
        'task3': { id: 'task3', content: 'Find Nemo' },
        'task4': { id: 'task4', content: 'Get down to business to defeat tha Huns'},
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'To do',
            taskIds: ['task1', 'task2', 'task3', 'task4'],
        },
    },
    columnOrder: ['column1']
}

export default initialData;