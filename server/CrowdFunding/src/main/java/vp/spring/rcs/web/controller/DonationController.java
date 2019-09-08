package vp.spring.rcs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.Donation;
import vp.spring.rcs.model.Project;
import vp.spring.rcs.model.user.SecurityUser;
import vp.spring.rcs.service.DonationService;
import vp.spring.rcs.service.ProjectService;
import vp.spring.rcs.service.UserDetailsServiceImpl;
import vp.spring.rcs.web.dto.DonationDTO;

@RestController

public class DonationController {

	
	@Autowired
	DonationService donationService;
	
	@Autowired 
	ProjectService projectService;

	@Autowired
	UserDetailsServiceImpl userService;
	
	
	@PostMapping(value="api/donation")
	public ResponseEntity <DonationDTO> save(@RequestBody DonationDTO donationDTO){
		Project project=projectService.getOne(donationDTO.getProject().getId());
		SecurityUser user=userService.getOne(donationDTO.getUser().getId());
	
		Donation donation=new Donation();
		donation.setDonation(donationDTO.getDonation());
		donation.setProject(project);
		donation.setUser(user);
		
		donation=donationService.save(donation);
		
		DonationDTO retVal=new DonationDTO(donation);
		return new ResponseEntity<>( retVal, HttpStatus.CREATED);
	
	
	}
}
