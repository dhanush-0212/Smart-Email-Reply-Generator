package com.dhanush.email.Service;


import com.dhanush.email.Model.Emailrequest;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class Emailservice {

    private OpenAiChatModel chatModel;


    public Emailservice(OpenAiChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String generateEmailReply(Emailrequest email) {

        PromptTemplate template=new PromptTemplate(new ClassPathResource("prompts/emailreply.st"));
        Map<String, Object> variables = new HashMap<>();
        variables.put("emailcontent", email.getEmailcontent());
        variables.put("tone", email.getTone());

        Prompt prompt=template.create(variables);
       String response= chatModel.call(prompt).getResult().getOutput().getText();
        System.out.println(prompt.toString());
        return response;
    }

}
