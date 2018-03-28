package com.fitquest;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.sensors.RNSensorsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.airbnb.android.react.maps.MapsPackage;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.sensormanager.SensorManagerPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
            new VectorIconsPackage(),
            new ReactNativePushNotificationPackage(),
            new RNCameraKitPackage(),
              new RNSensorsPackage(),
              new MapsPackage(),
              new RNCameraKitPackage(),
              new SensorManagerPackage()  ,
              new ReactNativePushNotificationPackage() 
          );
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
    }

    @Override
    public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    }


}
