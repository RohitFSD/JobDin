package com.indeed.server.dao;

import com.indeed.server.model.postModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface postDao extends MongoRepository<postModel,String> {
}
