# WeatherProject

- This is very simple React Native

- How to Execute on Ubuntu.

1. sudo react-native start > /dev/null 2>&1 &
2. check if some text result come out on website
   :localhost:8081/index.android.bundle
3. adb reverse tcp:8081 tcp:8081  (default your port might be "localhost:3000")
4. react-native run-android

- How to watch log

adb logcat *:S ReactNative:V ReactNativeJS:V

- How to use Weather App

1. If you Type a city name
2. Weather will appear
