package vp.spring.rcs.web.dto;

import vp.spring.rcs.model.Commentar;

public class CommentarDTO {

	
	Long id;
	private SecurityUserDTO user;
	String commentar;
	private ProjectDTO project;
	
	public CommentarDTO(Commentar commentar) {
		this.id=commentar.getId();
		this.user=new SecurityUserDTO(commentar.getUser());
		this.commentar=commentar.getCommentar();
		this.project=new ProjectDTO(commentar.getProjekat());
	}

	public CommentarDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public SecurityUserDTO getUser() {
		return user;
	}

	public void setUser(SecurityUserDTO user) {
		this.user = user;
	}

	public String getCommentar() {
		return commentar;
	}

	public void setCommentar(String commentar) {
		this.commentar = commentar;
	}

	public ProjectDTO getProject() {
		return project;
	}

	public void setProject(ProjectDTO project) {
		this.project = project;
	}
	
	
}
