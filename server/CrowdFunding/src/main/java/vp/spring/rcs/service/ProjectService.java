package vp.spring.rcs.service;

import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.ProjectRepository;
import vp.spring.rcs.model.Project;

@Service
public class ProjectService {

	@Autowired
	ProjectRepository projectRepository;

	@Autowired
	CategoryService categoryService;

	public List<Project> getAll() {
		return projectRepository.findAll();
	}

	public Project getOne(Long id) {
		return projectRepository.getOne(id);
	}

	public Project save(Project project) {
		return projectRepository.save(project);
	}

	public Set<Project> getRandomProjects() {

		List<Project> projects = projectRepository.findAll();

		Random rand = new Random();

		Set<Project> retVal = new HashSet<>();

		for (int i = 0; i < 6; i++) {

			int randIndex = rand.nextInt(projects.size());

			retVal.add(projects.get(randIndex));

		}
		return retVal;
	}

	public List<Project> filterByCategory(Long id) {
		List<Project> projects = getAll().stream().filter(p -> p.getCategory().getId() == id)
				.collect(Collectors.toList());

		return projects;
	}
	
	public List<Project> filterByName(String name){
		List<Project> projects=projectRepository.findByNameContaining(name);
		
		return projects;
	}
	
	public List<Project> findByNameAndCateogry(String name,Long id){
		List<Project> projects=filterByCategory(id);
		
		List<Project> retVal=projects.stream().filter(p -> p.getName().toLowerCase().contains(name.toLowerCase())).collect(Collectors.toList());
		
		return retVal;
	}
	
}
