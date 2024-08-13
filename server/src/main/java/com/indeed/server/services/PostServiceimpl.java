package com.indeed.server.services;

import com.indeed.server.dao.postDao;
import com.indeed.server.dto.postdto;
import com.indeed.server.model.postModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceimpl implements PostService {

    @Autowired
    postDao PostDao;

    @Override
    public postModel savePost(postdto PostDto){
     postModel PostModel = new postModel();
      PostModel.setProfile(PostDto.getProfile());
      PostModel.setDescription(PostDto.getDescription());
      PostModel.setExperience(PostDto.getExperience());
      PostModel.setTechnology(PostDto.getTechnology());
      PostModel.setSalary(PostDto.getSalary());
       return PostDao.save(PostModel);
    }

    @Override
    public List<postModel> getallposts() {
        return PostDao.findAll();
    }

}
