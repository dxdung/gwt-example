package gwt.example.client;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(namespace = JsPackage.GLOBAL, name = "MyApp")
public class MyApp {
    /*public static void sayHello(String name) {
        Window.alert(name);
    }*/
	
	@JsFunction
    public interface Foo {
        int exec(int x);
    }

    public static void action(Foo foo) {
        Window.alert(String.valueOf(foo.exec(40)));
    }

}