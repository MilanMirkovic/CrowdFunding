package vp.spring.rcs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.DonationRepository;
import vp.spring.rcs.model.Donation;

@Component
public class DonationService {

	@Autowired
	DonationRepository donationRepository;
	
	public Donation save(Donation donation) {
		return donationRepository.save(donation);
	}
}
