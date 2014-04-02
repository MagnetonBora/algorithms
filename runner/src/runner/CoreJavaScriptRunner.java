package runner;
 
import java.io.FileReader;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
 
public class CoreJavaScriptRunner {
 
    /**
     * @param args - a single program argument is expected. It should be a full path
     * to the core JavaScript to run.
     */
    public static void main(String[] args) {        
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("js");
         
        try {
            FileReader reader = new FileReader(args[0]);
            engine.eval(reader);
            reader.close();
        } catch (Exception e) {
          e.printStackTrace();
        }
    }
}