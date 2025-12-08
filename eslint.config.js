import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const buildScripts = [
  '*.cjs',
  '*.js'
];

export default [
  {
    ignores: [
      'dist'
    ]
  },
  ...bpmnIoPlugin.configs.browser.map(config => {
    return {
      ...config,
      ignores: buildScripts
    };
  }),
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: buildScripts
    };
  }),
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: [
        'test/**/*.js'
      ]
    };
  })
];
