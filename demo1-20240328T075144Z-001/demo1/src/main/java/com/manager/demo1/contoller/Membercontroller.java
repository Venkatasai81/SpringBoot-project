package com.manager.demo1.contoller;




import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.manager.demo1.exception.ResourceNotFoundException;
import com.manager.demo1.repository.Memberrepository;

import com.manager.demo1.modal.Member;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class Membercontroller {
	@Autowired 
	private Memberrepository Courserepository;
	
	
	// get all Members 
		@GetMapping("/courses")
		public List <Member>getstudent(){
			return Courserepository.findAll();
			}
		
		
		// we are creating a student posting details
		 @PostMapping("/courses")
		 public  Member createstudent (@RequestBody Member member) {
			 System.out.println("this data is being posted");
			 return Courserepository.save(member);
		 }
		 
		 
		 
		  @DeleteMapping("courses/{id}")
		  public ResponseEntity < Map < String, Boolean >> deletestudent(@PathVariable Long id) {
		  	Member member = Courserepository.findById(id)
		          .orElseThrow(() -> new ResourceNotFoundException("student not exist with id :" + id));

		  	Courserepository.delete(member);
		      Map < String, Boolean > response = new HashMap < > ();
		      response.put("deleted", Boolean.TRUE);
		      return ResponseEntity.ok(response);
		  }
		 
		// get website by id rest api
		  @GetMapping("/courses/{id}")
		  public ResponseEntity < Member > getstudentById(@PathVariable Long id) {
		  	Member member = Courserepository.findById(id)
		         .orElseThrow(() -> new ResourceNotFoundException("student not exist with id :" + id));
		      return ResponseEntity.ok(member);
		   }

		//  // update website rest api

		   @PutMapping("/courses/{id}")
		  public ResponseEntity < Member > updatestudent(@PathVariable Long id, @RequestBody Member  student) {
				
				Member courseMember = Courserepository.findById(id)
		           .orElseThrow(() -> new ResourceNotFoundException("course not exist with id :" + id));

				courseMember.setName(student.getName());
				courseMember.setDescription(student.getDescription());
		
		      Member CourseItem= Courserepository.save(courseMember);
		     return ResponseEntity.ok(CourseItem); 
		     }
		  
		  	
}
