package vp.spring.rcs.web.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import vp.spring.rcs.model.CategoryType;
import vp.spring.rcs.service.CategoryService;
import vp.spring.rcs.web.dto.CategoryTypeDTO;

@RestController
public class CategoryController {

	@Autowired
	CategoryService categoryService;
	
	
	
	@GetMapping(value="api/categories")
	public ResponseEntity<List<CategoryTypeDTO>> getAll(){
		
		List<CategoryType> categories=categoryService.findAll();
		
		List<CategoryTypeDTO> dtos=categories.stream().map(c -> new CategoryTypeDTO(c)).collect(Collectors.toList());
		
		return new ResponseEntity<>(dtos , HttpStatus.OK);
	}
}
