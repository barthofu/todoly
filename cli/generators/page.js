const fs = require('fs')

module.exports = (plop) => {

    plop.setHelper('ifEquals', function(arg1, arg2, options) {
        return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    })
    
    plop.setGenerator('page', {

        description: 'Create a new page',
        
        prompts: [
            {
                type: 'input',
                name: 'route',
                message: 'What is the route of your page?',
            },
            {
                type: 'input',
                name: 'name',
                message: 'What should be the name of this page\'s component?',
            },
            {
                type: 'list',
                name: 'renderType',
                message: 'What is the render type of this page?',
                choices: [
                    'none',
                    'static',
                    'server',
                ]
            },
        ],

        actions: (answers) => {

            if (answers.route.startsWith('/')) answers.route = answers.route.substring(1)

            const actions = [
                {
                    type: 'add',
                    path: '../src/pages/{{route}}.tsx',
                    templateFile: 'templates/page.hbs',
                }
            ]

            return actions
        }
    })
}