package com.rohitchouhan.user_management;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserService extends CrudRepository <Users,Integer>{

    Optional<Users> findById(Long id);
    
}
