const fs = require('fs')

module.exports = (plop) => {
    
    plop.setGenerator('api', {

        description: 'Create a new API route',
        
        prompts: [
            {
                type: 'input',
                name: 'route',
                message: 'What is the route of your API?',
            },
        ],

        actions: (answers) => {

            if (answers.route.startsWith('/')) answers.route = answers.route.substring(1)
            if (!answers.route.startsWith('api/')) answers.route = `api/${answers.route}`

            const actions = [
                {
                    type: 'add',
                    path: '../src/pages/{{route}}.ts',
                    templateFile: 'templates/api.hbs',
                }
            ]

            return actions
        }
    })
}