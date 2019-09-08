package vp.spring.rcs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.CommentarRepository;
import vp.spring.rcs.model.Commentar;

@Component
public class CommentarService {

	@Autowired
	CommentarRepository commentarRepository;
	
	public Commentar save (Commentar comment) {
		return commentarRepository.save(comment);
	}
	
	public Commentar getOne(Long id) {
		return commentarRepository.getOne(id);
	}
	
	public void delete(Commentar comment) {
		commentarRepository.delete(comment);
	}
	
}
