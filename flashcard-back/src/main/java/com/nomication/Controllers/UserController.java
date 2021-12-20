package com.nomication.Controllers;

import java.util.HashMap;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;

import com.nomication.Models.User;
import com.nomication.Services.UserServices;
import org.springframework.http.HttpHeaders;

@RestController
public class UserController {
	@Autowired
	UserServices userService;
	
	@RequestMapping(value="/user", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})	
	public ResponseEntity<Object> user(@RequestBody User targetUser, HttpServletRequest httpServletRequest)
	{
		HashMap<String, Object> result =  new HashMap<String, Object>();
		User users = userService.findUserByUsername(targetUser.getUsername());
		if (users != null)
		{
				if (users.getPassword().equals(targetUser.getPassword()))
				{
					@SuppressWarnings("unchecked")
					ArrayList<HashMap<String,Object>>  session = (ArrayList<HashMap<String,Object>>) httpServletRequest.getSession().getAttribute("SPRING_BOOT_SESSION_MESSAGES");
					if (session == null)
					{
						session = new  ArrayList<HashMap<String,Object>>();
					}
					HashMap<String, Object> newSession=  new HashMap<String, Object>();
					newSession.put("user",users);
					httpServletRequest.getSession().setAttribute("SPRING_BOOT_SESSION_MESSAGES", session);
					session.add(newSession);
					httpServletRequest.getSession().setAttribute("SPRING_BOOT_SESSION_MESSAGES", session);
				
					result.put("id", users.getId());
					result.put("username", users.getUsername());
				} else {
					result.put("error", "Username and password are incorrect.");
				}
		} else {
			result.put("error", "Username and password are incorrect.");
		}
		 
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}
}
