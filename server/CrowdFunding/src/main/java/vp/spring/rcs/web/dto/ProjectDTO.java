package vp.spring.rcs.web.dto;

import java.util.ArrayList;
import java.util.List;

import vp.spring.rcs.model.CategoryType;
import vp.spring.rcs.model.Faq;
import vp.spring.rcs.model.Project;
import vp.spring.rcs.model.Update;

public class ProjectDTO {

	private Long id;

	private String name;
	private String description;
	private String videoUrl;
	private String imageUrl;
	private int moneyTarget;
	private String aboutProject;
	private SecurityUserDTO user;
	private CategoryTypeDTO category;
	

	List<FaqDTO> faqs = new ArrayList<>();

	List<UpdateDTO> updates = new ArrayList<>();
	
	List<CommentarDTO> comments=new ArrayList<>();

	List<DonationDTO> donations = new ArrayList<>();

	public ProjectDTO(Project project) {
		this.id = project.getId();
		this.moneyTarget=project.getMoneyTarget();
		this.name = project.getName();
		this.description = project.getDescription();
		this.videoUrl = project.getVideoUrl();
		this.imageUrl = project.getImageUrl();
		this.aboutProject=project.getAboutProject();
		this.user = new SecurityUserDTO(project.getUser());
		this.category = new CategoryTypeDTO(project.getCategory());
	}

	public ProjectDTO() {
		super();
	}

	public Long getId() {
		return id;
	}
	

	public void setId(Long id) {
		this.id = id;
	}
	
	

	public int getMoneyTarget() {
		return moneyTarget;
	}

	public void setMoneyTarget(int moneyTarget) {
		this.moneyTarget = moneyTarget;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getVideoUrl() {
		return videoUrl;
	}

	public void setVideoUrl(String videoUrl) {
		this.videoUrl = videoUrl;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public SecurityUserDTO getUser() {
		return user;
	}

	public void setUser(SecurityUserDTO user) {
		this.user = user;
	}

	public CategoryTypeDTO getCategory() {
		return category;
	}

	public void setCategory(CategoryTypeDTO category) {
		this.category = category;
	}
	

	public String getAboutProject() {
		return aboutProject;
	}

	public void setAboutProject(String aboutProject) {
		this.aboutProject = aboutProject;
	}

	public List<FaqDTO> getFaqs() {
		return faqs;
	}

	public void setFaqs(List<FaqDTO> faqs) {
		this.faqs = faqs;
	}

	public List<UpdateDTO> getUpdates() {
		return updates;
	}

	public void setUpdates(List<UpdateDTO> updates) {
		this.updates = updates;
	}

	public List<DonationDTO> getDonations() {
		return donations;
	}

	public void setDonations(List<DonationDTO> donations) {
		this.donations = donations;
	}

	public List<CommentarDTO> getComments() {
		return comments;
	}

	public void setComments(List<CommentarDTO> comments) {
		this.comments = comments;
	}

	
}
