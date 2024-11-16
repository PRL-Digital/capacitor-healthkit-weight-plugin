package com.prldigital.plugins.healthkit;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import org.json.JSONArray;

@CapacitorPlugin(name = "CapacitorHealthkitWeight")
public class CapacitorHealthkitWeightPlugin extends Plugin {

    private static final String STATUS_NOT_DETERMINED = "notDetermined";

    @PluginMethod
    public void requestAuthorization(PluginCall call) {
        // Health data is not available on Android, so we just resolve
        JSObject ret = new JSObject();
        ret.put("message", "Health data not available on Android");
        call.resolve(ret);
    }

    @PluginMethod
    public void isAvailable(PluginCall call) {
        // Health data is not available on Android
        JSObject ret = new JSObject();
        ret.put("isAvailable", false);
        call.resolve(ret);
    }

    @PluginMethod
    public void getAuthorizationStatus(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("status", STATUS_NOT_DETERMINED);
        call.resolve(ret);
    }

    @PluginMethod
    public void getBodyMassEntries(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("entries", new JSONArray());
        call.resolve(ret);
    }

    @PluginMethod
    public void setBodyMassEntry(PluginCall call) {
        if (call.getData().isNull("value") || call.getData().isNull("date")) {
            call.reject("Must provide both value and date");
            return;
        }
        
        JSObject ret = new JSObject();
        ret.put("message", "Health data not available on Android");
        call.resolve(ret);
    }

    @PluginMethod
    public void getUserIdentifier(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "");
        call.resolve(ret);
    }
}