package vp.spring.rcs.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import vp.spring.rcs.model.user.SecurityUser;

@Entity
public class Commentar {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	@ManyToOne
	private Project project;

	@ManyToOne
	private SecurityUser user;
	
	String commentar;
	
	
	

	public Commentar() {
		super();
	}

	public Commentar(Long id, Project project, SecurityUser user, String commentar) {
		super();
		this.id = id;
		this.project = project;
		this.user = user;
		this.commentar = commentar;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Project getProjekat() {
		return project;
	}

	public void setProjekat(Project project) {
		this.project = project;
	}

	public SecurityUser getUser() {
		return user;
	}

	public void setUser(SecurityUser user) {
		this.user = user;
	}

	public String getCommentar() {
		return commentar;
	}

	public void setCommentar(String commentar) {
		this.commentar = commentar;
	}
	
	

}
