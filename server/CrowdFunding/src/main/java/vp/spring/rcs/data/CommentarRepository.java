package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Commentar;

@Component
public interface CommentarRepository extends JpaRepository<Commentar, Long> {

}
