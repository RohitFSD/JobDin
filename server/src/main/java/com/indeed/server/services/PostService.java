package com.indeed.server.services;

import com.indeed.server.dto.postdto;
import com.indeed.server.model.postModel;

import java.util.List;

public interface PostService {
    public postModel savePost(postdto PostDto);

    public List<postModel> getallposts();
}

