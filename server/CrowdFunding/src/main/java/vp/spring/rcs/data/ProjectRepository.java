package vp.spring.rcs.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Project;

@Component
public interface ProjectRepository extends JpaRepository<Project, Long> {

	public List<Project> findByNameContaining(String name);
}
