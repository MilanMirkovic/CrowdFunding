package vp.spring.rcs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.Faq;
import vp.spring.rcs.model.Project;
import vp.spring.rcs.service.FaqService;
import vp.spring.rcs.service.ProjectService;
import vp.spring.rcs.web.dto.FaqDTO;

@RestController
public class FaqController {

	@Autowired
	FaqService faqService;
	
	@Autowired
	ProjectService projectService;
	
	@PostMapping(value="api/faq")
	public ResponseEntity<FaqDTO> save(@RequestBody FaqDTO faqDTO){
		Project project=projectService.getOne(faqDTO.getProject().getId());
		
		Faq faq=new Faq();
		faq.setAnswer(faqDTO.getAnswer());
		faq.setQuestion(faqDTO.getQuestion());
		faq.setProject(project);
		
		faq=faqService.save(faq);
		
		FaqDTO retVal=new FaqDTO(faq);
		
		return new ResponseEntity<>(retVal, HttpStatus.CREATED);
	}
	
	
	@DeleteMapping(value="api/faq/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		Faq faq=faqService.getOne(id);
		
		if(faq !=null) {
			faqService.delete(faq);
			
			return new ResponseEntity<>(HttpStatus.OK);
			
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
