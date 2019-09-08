package vp.spring.rcs.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import vp.spring.rcs.model.user.SecurityUser;

@Entity
@Table(catalog = "crowdfunding")
public class Donation {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	

	
	private int donation;
	

	@ManyToOne(fetch = FetchType.EAGER)
	private Project project;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private SecurityUser user;

	public Donation(Long id, int donation, Project project, SecurityUser user) {
		super();
		this.id = id;
		
		this.donation = donation;
		this.project = project;
		this.user = user;
	}

	public Donation() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public int getDonation() {
		return donation;
	}

	public void setDonation(int donation) {
		this.donation = donation;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public SecurityUser getUser() {
		return user;
	}

	public void setUser(SecurityUser user) {
		this.user = user;
	}
	
	
	
	
}
