package vp.spring.rcs.web.dto;

import vp.spring.rcs.model.CategoryType;

public class CategoryTypeDTO {
	private Long id;
	private String name;

	public CategoryTypeDTO(CategoryType category) {
		this.id = category.getId();
		this.name = category.getName();

	}
	



	public CategoryTypeDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
