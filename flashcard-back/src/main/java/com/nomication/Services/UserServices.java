package com.nomication.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nomication.Models.User;
import com.nomication.repos.UserRepo;
import com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;

@Service
public class UserServices {
	@Autowired
	UserRepo userRepo;
	
	public User findUserByUsername(String username)
	{
			ArrayList<User> users = (ArrayList<User>) userRepo.findUserByUsername();
			if (users.size() > 0)
			{
				for (int userIndex = 0; userIndex < users.size(); userIndex++)
				{
					User targetUser = users.get(userIndex);
					String targetUsername = targetUser.getUsername();
					
					if (targetUsername.equals(username))
					{
						return targetUser;
					}
				}
			}
		
			return null;
	}

	public User merge(User user)
	{
		userRepo.save(user);
		
		return user;
	}
	
	public List<User> GetUsers()
	{
		List<User> users = (List<User>) userRepo.findAll();
		return users;
	}
}
