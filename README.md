# ngCordova-typescript-demo
Demo of Ionic 1.X using ngCordova written in Typescript

# Please follow these steps to run the application

## Install following tools
* git clone 
* npm install -g typescript
* npm install -g tsd
* cd ngCordova-typescript-demo
* npm install
* bower install
* tsd install
* gulp compile:typescript

## Run the application on the device or emulator
* ionic platform add android
* ionic build android
* ionic run android --device

# Misc notes:

* The type definitions for ngCordova are currently in local_typings folder. They will move to the DefinitelyTyped repo soon
and will be removed from here
