package com.nomication.repos;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nomication.Models.User;

@Repository
public interface UserRepo extends CrudRepository<User, Integer> {
	//@Transactional
	@Query("from User")
	ArrayList<User> findUserByUsername();
}
