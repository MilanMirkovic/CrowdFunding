package vp.spring.rcs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.Commentar;
import vp.spring.rcs.model.Project;
import vp.spring.rcs.model.user.SecurityUser;
import vp.spring.rcs.service.CommentarService;
import vp.spring.rcs.service.ProjectService;
import vp.spring.rcs.service.UserDetailsServiceImpl;
import vp.spring.rcs.web.dto.CommentarDTO;

@RestController
public class CommentarController {

	@Autowired
	CommentarService commentarService;
	@Autowired 
	ProjectService projectService;

	@Autowired
	UserDetailsServiceImpl userService;
	
	
	@PostMapping(value="api/commentar")
	public ResponseEntity<CommentarDTO> save(@RequestBody CommentarDTO dto){
		Project project=projectService.getOne(dto.getProject().getId());
		SecurityUser user=userService.getOne(dto.getUser().getId());
		
		Commentar commentar=new Commentar();
		commentar.setCommentar(dto.getCommentar());
		commentar.setProjekat(project);
		commentar.setUser(user);
		
		commentar= commentarService.save(commentar);
		
		CommentarDTO commentarDTO=new CommentarDTO(commentar);
		
	return new ResponseEntity<>(commentarDTO, HttpStatus.CREATED);
	}
	
	@DeleteMapping(value="api/commentar/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		Commentar comment=commentarService.getOne(id);
		commentarService.delete(comment);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
