module.exports = {
  'env': {
    'es8': true
  },

  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'script',
    'ecmaFeatures': {
      'arrowFunctions': true,
      'blockBindings': true,
      'classes': true,
      'defaultParams': true,
      'destructuring': false,
      'forOf': true,
      'generators': false,
      'modules': false,
      'objectLiteralComputedProperties': true,
      'objectLiteralDuplicateProperties': false,
      'objectLiteralShorthandMethods': true,
      'objectLiteralShorthandProperties': true,
      'restParams': false,
      'spread': false,
      'superInFunctions': true,
      'templateStrings': true,
      'jsx': true
    }
  },
  'rules': {
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // require let or const instead of var
    'no-var': 1,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 1,
    // prefer using template strings over string concat
    'prefer-template': 1,
    //allow comments in case blocks without fallthrough statement
    'no-fallthrough': 0,
    // helps catch finally clauses that you may not behave as you think
    'no-unsafe-finally': 2,
    // helps to identify generator functions that do not have the yeild keyword
    'require-yield': 1,
    // allow backtick in es8
    'quotes': [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }]
  }
};