package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Donation;

@Component
public interface DonationRepository extends JpaRepository<Donation, Long> {

}
