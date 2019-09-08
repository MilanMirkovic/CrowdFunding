package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Update;

@Component
public interface UpdateRepository extends JpaRepository<Update, Long> {

	
}
