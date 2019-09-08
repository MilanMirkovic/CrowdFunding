package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.CategoryRepository;
import vp.spring.rcs.model.CategoryType;

@Component
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;
	
	public CategoryType findOne(Long id) {
		return categoryRepository.getOne(id);
	}
	
	public List<CategoryType> findAll(){
		return categoryRepository.findAll();
	}
	

}
