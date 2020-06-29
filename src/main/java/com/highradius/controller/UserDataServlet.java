package com.highradius.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.highradius.model.User;

/**
 * @author HRC
 *
 */
public class UserDataServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7024426494285503866L;
	private static final Logger LOG = LogManager.getLogger(UserDataServlet.class);

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		Map<String, Object> data = new HashMap<>();
		List<User> users = new ArrayList<>();
		
		User user1 = new User();
		user1.setName("Lisa");
		user1.setEmail("lisa@highradius.com");
		user1.setPhone("555-111-1224");
		users.add(user1);

		User user2 = new User();
		user2.setName("Homer");
		user2.setEmail("homer@highradius.com");
		user2.setPhone("555-111-1234");
		users.add(user2);
		
		User user3 = new User();
		user3.setName("Marge");
		user3.setEmail("marge@highradius.com");
		user3.setPhone("555-111-1244");
		users.add(user3);
		
		data.put("rows", users);
		data.put("results", users.size());
		String jsonString = getJSONStringFromObject(data);
		
		// Set response content type
		response.setContentType("application/json");
		try {
			response.getWriter().write(jsonString);
		} catch(IOException e) {
			LOG.error("Unable to write json to HttpResponse" , e);
		}
		
		
	}
	
	
	/**
	 * Convert Object into JSON String
	 * 
	 * @param Object 
	 * @return JSON String
	 */
	private String getJSONStringFromObject(Object object) {
		ObjectMapper mapper = new ObjectMapper();                             
		String jsonString = null;
		try {
			jsonString =  mapper.writeValueAsString(object);
		} catch (Exception e) {
			LOG.error("Error while parasing object to json" , e);
		}
		return jsonString;
	}
	
}
