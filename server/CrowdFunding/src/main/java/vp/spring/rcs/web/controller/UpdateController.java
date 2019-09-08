package vp.spring.rcs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.Project;
import vp.spring.rcs.model.Update;
import vp.spring.rcs.service.ProjectService;
import vp.spring.rcs.service.UpdateService;
import vp.spring.rcs.web.dto.UpdateDTO;

@RestController
public class UpdateController {

	@Autowired
	UpdateService updateService;
	
	@Autowired
	ProjectService projectService;
	
	@PostMapping(value="api/update")
	public ResponseEntity<UpdateDTO> create(@RequestBody UpdateDTO updateDTO){
		Project project=projectService.getOne(updateDTO.getProject().getId());
		
		Update update= new Update();
		update.setDate(updateDTO.getDate());
		update.setUpdateDescription(updateDTO.getUpdateDescription());
		update.setProject(project);
		
		update=updateService.save(update);
		
		UpdateDTO retVal=new UpdateDTO(update);
		
		return new ResponseEntity<>(retVal, HttpStatus.CREATED);
	}
	
	
//	@DeleteMapping(value="api/update/{id}")
//	public ResponseEntity<Void> delete(@PathVariable Long id){
//		Update update=updateService.getOne(id);
//		
//		updateService.delete(update);
//		
//		return new ResponseEntity<>(HttpStatus.OK);
//	}
}
