package gwt.example.client;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(namespace = JsPackage.GLOBAL, name = "MyApp")
public class MyApp {
    public static void sayHello(String name) {
        Window.alert(name);
    }
}
