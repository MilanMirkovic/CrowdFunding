package vp.spring.rcs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.UpdateRepository;
import vp.spring.rcs.model.Update;

@Component
public class UpdateService {

	@Autowired
	UpdateRepository updateRepository;
	
	public Update save(Update update) {
		return updateRepository.save(update);
	}
	
	public void delete (Update update) {
		updateRepository.delete(update);
	}
	
	public Update getOne(Long id) {
		return updateRepository.getOne(id);
	}
}

