package vp.spring.rcs.web.controller;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.CategoryType;
import vp.spring.rcs.model.Commentar;
import vp.spring.rcs.model.Donation;
import vp.spring.rcs.model.Faq;
import vp.spring.rcs.model.Project;
import vp.spring.rcs.model.Update;
import vp.spring.rcs.model.user.SecurityUser;
import vp.spring.rcs.service.CategoryService;
import vp.spring.rcs.service.ProjectService;
import vp.spring.rcs.service.UserDetailsServiceImpl;
import vp.spring.rcs.web.dto.CommentarDTO;
import vp.spring.rcs.web.dto.DonationDTO;
import vp.spring.rcs.web.dto.FaqDTO;
import vp.spring.rcs.web.dto.ProjectDTO;
import vp.spring.rcs.web.dto.UpdateDTO;

@RestController
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	
	@Autowired
	private UserDetailsServiceImpl userService;

	@Autowired
	private CategoryService categoryService;
	
	
	
	@GetMapping(value = "api/projects")
	public ResponseEntity<List<ProjectDTO>> getAll() {
		List<Project> retVal = projectService.getAll();

		List<ProjectDTO> dtos = retVal.stream().map(p -> new ProjectDTO(p)).collect(Collectors.toList());

		return new ResponseEntity<>(dtos, HttpStatus.OK);
	}

	@GetMapping(value = "api/random/projects")
	public ResponseEntity<Set<ProjectDTO>> getRandom() {
		Set<Project> retVal = projectService.getRandomProjects();
		Set<ProjectDTO> dtos = retVal.stream().map(p -> new ProjectDTO(p)).collect(Collectors.toSet());

		return new ResponseEntity<>(dtos, HttpStatus.OK);
	}

	@GetMapping(value = "api/projects/{id}")
	public ResponseEntity<ProjectDTO> getOne(@PathVariable Long id) {
		Project project = projectService.getOne(id);

		Set<Donation> donations = project.getDonations();
		Set<Faq> faqs = project.getFaqs();
		Set<Commentar> comments=project.getComments();
		Set<Update> updates=project.getUpdates();

		List<DonationDTO> donationsDTO = donations.stream().map(d -> new DonationDTO(d)).collect(Collectors.toList());
		List<FaqDTO> faqsDTO = faqs.stream().map(f -> new FaqDTO(f)).collect(Collectors.toList());
		List<CommentarDTO> commentsDTO=comments.stream().map(c -> new CommentarDTO(c)).collect(Collectors.toList());
		List<UpdateDTO> updatesDTO=updates.stream().map(c -> new UpdateDTO(c)).collect(Collectors.toList());
		
		
		if (project != null) {
			ProjectDTO dto = new ProjectDTO(project);
			dto.setDonations(donationsDTO);
			dto.setFaqs(faqsDTO);
			dto.setComments(commentsDTO);
			dto.setUpdates(updatesDTO);

			return new ResponseEntity<>(dto, HttpStatus.OK);
		} else {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping(value = "api/projects/filter/{categoryId}")
	public ResponseEntity<List<ProjectDTO>> filterProject(
			@RequestParam(value = "project", required = false) String project,
			@PathVariable(value = "categoryId", required = true) Long categoryId) {
		if (project.equals(null)) {
			List<Project> projects = projectService.filterByCategory(categoryId);

			List<ProjectDTO> dtos = projects.stream().map(p -> new ProjectDTO(p)).collect(Collectors.toList());
			return new ResponseEntity<>(dtos, HttpStatus.OK);
		} else {
			List<Project> projects = projectService.findByNameAndCateogry(project, categoryId);
			List<ProjectDTO> dtos = projects.stream().map(p -> new ProjectDTO(p)).collect(Collectors.toList());
			return new ResponseEntity<>(dtos, HttpStatus.OK);
		}
	}

	@GetMapping(value = "api/projects/category/{id}")
	public ResponseEntity<List<ProjectDTO>> projectsOfCategory(@PathVariable Long id) {
		List<Project> projects = projectService.filterByCategory(id);

		List<ProjectDTO> dtos = projects.stream().map(p -> new ProjectDTO(p)).collect(Collectors.toList());

		return new ResponseEntity<>(dtos, HttpStatus.OK);
	}


	@PostMapping(value="api/projects")
	public ResponseEntity<ProjectDTO> save(@RequestBody ProjectDTO dto){
		
		SecurityUser user= userService.getOne(dto.getUser().getId());
		CategoryType category=categoryService.findOne(dto.getCategory().getId());
		
		Project project=new Project();
		project.setAboutProject(dto.getAboutProject());
		project.setDescription(dto.getDescription());
		project.setName(dto.getName());
		project.setImageUrl(dto.getImageUrl());
		project.setVideoUrl(dto.getVideoUrl());
		project.setMoneyTarget(dto.getMoneyTarget());
		project.setUser(user);
		project.setCategory(category);
		
		project=projectService.save(project);
		
		ProjectDTO projectDTO=new ProjectDTO(project);
		
		return new ResponseEntity<>(projectDTO, HttpStatus.CREATED);
		
		
		
	}

}
