package com.nomication;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.nomication.Models.User;
import com.nomication.Services.UserServices;
import com.nomication.repos.UserRepo;

@SpringBootTest
class Users {

	@Autowired
	private UserServices userServices;
	
	@MockBean
	private UserRepo userRep;
	
	@Test
	public void getUserTest()
	{
		when(userRep.findAll()).thenReturn( Stream.of(new User("bob", "bob123") ).collect(Collectors.toList()));
		assertEquals(1, userServices.GetUsers().size());
	}
	
	@Test
	public void saveUserTest()
	{
		User newUser = new User("bob", "bob");
		when(userRep.save(newUser)).thenReturn(newUser);
		assertEquals(newUser, userServices.merge(newUser));
	}
	
	@Test
	void test() {
		
	}

}
