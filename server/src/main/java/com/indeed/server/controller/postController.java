package com.indeed.server.controller;

import com.indeed.server.dto.postdto;
import com.indeed.server.model.postModel;
import com.indeed.server.services.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin
public class postController {

    final PostService postservice;
    @PostMapping("/post")
    public postModel savePost(@Valid @RequestBody postdto PostDTO){
        log.info("Saving Post ######");

        return this.postservice.savePost(PostDTO);
    }
    @GetMapping("/posts")
    public List<postModel> getallposts(){
        log.info("Getting all Posts");
        return this.postservice.getallposts();
    }

}
