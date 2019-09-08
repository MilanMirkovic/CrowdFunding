package vp.spring.rcs.web.dto;

import vp.spring.rcs.model.Donation;

public class DonationDTO {

	Long id;

	private int donation;
	private ProjectDTO project;
	private SecurityUserDTO user;
	
	
	public DonationDTO(Donation donation) {
		this.id=donation.getId();
		this.donation=donation.getDonation();
		this.user=new SecurityUserDTO(donation.getUser());
	}


	public DonationDTO() {
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


	public ProjectDTO getProject() {
		return project;
	}


	public void setProject(ProjectDTO project) {
		this.project = project;
	}


	public SecurityUserDTO getUser() {
		return user;
	}


	public void setUser(SecurityUserDTO user) {
		this.user = user;
	}
	
	
	
	
}
