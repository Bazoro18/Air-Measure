@echo off
"C:\\Program Files\\Java\\jdk-22\\bin\\java" ^
  --class-path ^
  "C:\\Users\\imite\\.gradle\\caches\\modules-2\\files-2.1\\com.google.prefab\\cli\\2.1.0\\aa32fec809c44fa531f01dcfb739b5b3304d3050\\cli-2.1.0-all.jar" ^
  com.google.prefab.cli.AppKt ^
  --build-system ^
  cmake ^
  --platform ^
  android ^
  --abi ^
  x86_64 ^
  --os-version ^
  24 ^
  --stl ^
  c++_shared ^
  --ndk-version ^
  26 ^
  --output ^
  "C:\\Users\\imite\\AppData\\Local\\Temp\\agp-prefab-staging2194293113095081807\\staged-cli-output" ^
  "C:\\Users\\imite\\.gradle\\caches\\8.10.2\\transforms\\1ae2c2bcce3cae52224b57e1fa01bdc7\\transformed\\react-android-0.76.5-debug\\prefab" ^
  "D:\\AirMeasure\\AirMeasure\\android\\app\\build\\intermediates\\cxx\\refs\\react-native-reanimated\\63196w31" ^
  "C:\\Users\\imite\\.gradle\\caches\\8.10.2\\transforms\\63e182d7b2029c42e1f28f883e24b322\\transformed\\hermes-android-0.76.5-debug\\prefab" ^
  "C:\\Users\\imite\\.gradle\\caches\\8.10.2\\transforms\\8b60b4f75564ac53567672df7a1c9a73\\transformed\\fbjni-0.6.0\\prefab"
