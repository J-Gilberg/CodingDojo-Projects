package MapOfTheHash;
import java.util.HashMap;
import java.util.Set;
public class MapTest {
    
    public static void main(String[] args){
        HashMap<String, String> songs = new HashMap<String, String>();
        songs.put("cool song", " woooooooooooooooooo");
        songs.put("old country","Hey cowboys, i miss my horse");
        songs.put("welcome home","How was your day?");
        songs.put("Shy Person At the Mic", "................");

        System.out.println(songs.get("Shy Person At the Mic"));

        Set<String> keys = songs.keySet();
        for(String key : keys){
            System.out.println(String.format("%s: %s",key,songs.get(key)));
        }

    }

}
