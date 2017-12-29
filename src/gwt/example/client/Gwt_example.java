package gwt.example.client;

import com.google.gwt.core.client.EntryPoint;

public class Gwt_example implements EntryPoint {
    @Override
    public void onModuleLoad() {
    	renderReact("root");
    }
    public static native void renderReact(String containerId) /*-{ $wnd.renderComponent(containerId); }-*/;
}