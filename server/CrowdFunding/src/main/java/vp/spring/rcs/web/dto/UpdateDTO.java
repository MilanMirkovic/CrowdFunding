package vp.spring.rcs.web.dto;

import java.sql.Date;

import vp.spring.rcs.model.Update;

public class UpdateDTO {

	Long id;
	private String updateDescription;
	private Date date;
	private ProjectDTO project;

	public UpdateDTO(Update update) {
		this.id=update.getId();
		this.date=update.getDate();
		this.updateDescription=update.getUpdateDescription();
		this.project=new ProjectDTO(update.getProject());
	}

	public UpdateDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUpdateDescription() {
		return updateDescription;
	}

	public void setUpdateDescription(String updateDescription) {
		this.updateDescription = updateDescription;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public ProjectDTO getProject() {
		return project;
	}

	public void setProject(ProjectDTO project) {
		this.project = project;
	}
	
	
	
	
	
}
