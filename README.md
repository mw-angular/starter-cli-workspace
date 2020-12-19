# StarterCliWorkspace

## Package manager

```
npm install -g yarn
```

All dependencies should be installed in `devDependencies`

```
yarn add -D <PACKAGE_NAME>
```

## Create

Before creating app or lib set correct value for `newProjectRoot` in `angular.json` to `apps` or `libs` respectively.

```
ng g application --strict
ng g library --prefix=<NEW_LIB_PREFIX>
```
