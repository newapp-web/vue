module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },

    mobile: {
      type: 'confirm',
      message: 'Use mobile adaptive?'
    },
    router: {
      type: 'confirm',
      message: 'Use vue-router?'
    },
    resource: {
      type: 'confirm',
      message: 'Use vue-resource?'
    },
    axios: {
      type: 'confirm',
      message: 'Use axios?'
    },
    iview: {
      type: 'confirm',
      message: 'Use iview?'
    },
    element: {
      type: 'confirm',
      message: 'Use element?'
    },
    sass: {
      type: 'confirm',
      message: 'Use sass?'
    }
  },
  filters: {},
  completeMessage:
    'To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}'
};
