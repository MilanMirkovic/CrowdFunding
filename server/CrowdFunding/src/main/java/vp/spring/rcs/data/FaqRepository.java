package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Faq;

@Component
public interface FaqRepository extends JpaRepository<Faq, Long> {

}
