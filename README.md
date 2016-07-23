# WeatherProject

This is very simple React Native 

How to Excute.

1. sudo react-native start > /dev/null 2>&1 &
2. adb reverse tcp:8081 tcp:8081  (default your port might be "localhost:3000")
3. react-native run-android
4. adb logcat *:S ReactNative:V ReactNativeJS:V
