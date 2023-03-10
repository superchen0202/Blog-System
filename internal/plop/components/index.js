const { componentExists } = require('../utils');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.ts',
        templateFile: 'components/index.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'components/functional.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.module.scss',
        templateFile: 'components/style.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
