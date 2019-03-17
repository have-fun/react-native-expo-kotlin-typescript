This project is a simple Expo-based React Native app using TypeScript (for UI templates) and Kotlin.

##### Getting Started
- Follow the instructions from https://docs.expo.io/versions/latest/introduction/installation to set up the dev environment.
- Run `npm install` in the app folder.

This project is pre-configured for both IntelliJ and Visual Studio Code.

##### IntellJ
- In Preferences -> Language & Frameworks -> Node.js and NPM,  configure the Node interpreter.
- Use "Start" Run/Debug configuration to run or debug the app.
- Follow the onscreen instructions from the Expo tool.

##### Visual Studio Code
- Use the task "Expo: start ios" or "Expo: start android" to run the app.
- Use "Debug in Exponent" to debug the app in VSCode. The running bundler (started from one of the tasks mentioned above) needs to be stopped first.

##### Limitations
- Kotlin SourceMap only works in VSCode but not in IntelliJ (v2018.3.5) - https://youtrack.jetbrains.com/issue/KT-29944
- In both IntelliJ and VSCode, to set a breakpoint in Kotlin code, we have to use js("debugger").
- We have to declare ambient modules manually for the JavaScript code generated from the Kotlin code. 
