package com.dhanush.email.Controller;

import com.dhanush.email.Model.Emailrequest;
import com.dhanush.email.Service.Emailservice;
import org.springframework.ai.openai.OpenAiChatModel;
//import org.springframework.ai.vertexai.gemini.VertexAiGeminiChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin("http://localhost:5173/")
public class Emailcontroller {

    private Emailservice service;

    public Emailcontroller(Emailservice service) {
        this.service = service;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generate(@RequestBody Emailrequest email) {
        String response =service.generateEmailReply(email);
        return ResponseEntity.ok(response);
    }

}
