package AlfredBot;

import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        return "Hello, " + name + ". Lovely to see you.";
    }

    public String guestGreeting(String name, String dayPeriod) {
        return String.format("%s, %s. Lovely to see you.",dayPeriod,name);
    }
    
    public String dateAnnouncement() {
        Date date = new Date();
        return 	"It is currently " + date.toString() +".";
    }
    
    public String respondBeforeAlexis(String conversation) {
        if(conversation.indexOf("Alexis")>=0){
            String response = "Who you talking too? No one by that name here.";
            return response.toUpperCase();
        }
        if(conversation.indexOf("Alfred")>=0){
            return "At your service. As you wish, naturally.";
        }
        return "Right. And with that I shall retire.";
    }
    
    // NINJA BONUS
    
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}