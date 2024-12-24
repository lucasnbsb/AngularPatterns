// eslint.config.js
module.exports = [
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        ":matches(PropertyDefinition, MethodDefinition[kind='set'])[computed=false]:has(Decorator[expression.callee.name='Input']) > :matches(Identifier, Literal)",
      ],
    },
  },
];
