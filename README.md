# easy-linter
This package is a layer above the existing eslint package (https://github.com/eslint/eslint). This package has eslint rules defined in advance and can be used very easily. This package can be used by teams that are working on many projects and want centralized repository of eslint rules.

# how to use
1. Install easy-linter package from NPM registry.
2. Create file .eslintrc.json file project in root directory of the project
add the following json object.
{
  "extends": "./node_modules/easy-linter/index.js"
}
3. You can create .eslintignore file in root directory of the project to ignore directory/files from linting rules.
