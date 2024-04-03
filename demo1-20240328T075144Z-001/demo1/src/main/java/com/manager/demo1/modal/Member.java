package com.manager.demo1.modal;

import jakarta.persistence.*;



@Entity
// we are creating table 
@Table(name = "List_of_Courses")
public class Member {
	
//  we are a creating  colonms of table 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;
    

    public Member() {
    	
    }
    
    public Member(String name,String description) {
    	 super();
    	 
    	 
    	  this.name=name;
          this.description=description;
    }
        
          
          // these are getters 
          public long getId() {
              return id;
          }
          public void setId(long id) {
              this.id = id;
          }

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description ) {
			this.description = description;
		}
}
