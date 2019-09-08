package vp.spring.rcs.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import vp.spring.rcs.model.user.SecurityUser;

@Entity
@Table(catalog = "crowdfunding")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	private String name;
	private String description;
	private String videoUrl;
	private String imageUrl;
    private int moneyTarget;
	@Column(columnDefinition="TEXT")
	private String aboutProject;
	
	
	@ManyToOne
	private SecurityUser user;

	@ManyToOne
	private CategoryType category;

	@OneToMany(mappedBy = "project", cascade= CascadeType.REMOVE)
	Set<Faq> faqs = new HashSet<>();

	@OneToMany(mappedBy = "project", cascade= CascadeType.REMOVE)
	Set<Update> updates = new HashSet<>();
	
	@OneToMany(mappedBy="project", cascade= CascadeType.REMOVE)
	Set<Donation> donations=new HashSet<>();
	
	@OneToMany(mappedBy="project", cascade= CascadeType.REMOVE)
	Set<Commentar> comments=new HashSet<Commentar>();



	




	public Project(Long id, String name, String description, String videoUrl, String imageUrl, int moneyTarget,
			String aboutProject, SecurityUser user, CategoryType category, Set<Faq> faqs, Set<Update> updates,
			Set<Donation> donations) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.videoUrl = videoUrl;
		this.imageUrl = imageUrl;
		this.moneyTarget = moneyTarget;
		this.aboutProject = aboutProject;
		this.user = user;
		this.category = category;
		this.faqs = faqs;
		this.updates = updates;
		this.donations = donations;
	}
	
	

	public Project(Long id, String name, String description, String videoUrl, String imageUrl, int moneyTarget,
			String aboutProject, SecurityUser user, CategoryType category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.videoUrl = videoUrl;
		this.imageUrl = imageUrl;
		this.moneyTarget = moneyTarget;
		this.aboutProject = aboutProject;
		this.user = user;
		this.category = category;
	}



	public Project() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	

	public String getAboutProject() {
		return aboutProject;
	}



	public void setAboutProject(String aboutProject) {
		this.aboutProject = aboutProject;
	}



	public int getMoneyTarget() {
		return moneyTarget;
	}

	public void setMoneyTarget(int moneyTarget) {
		this.moneyTarget = moneyTarget;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public SecurityUser getUser() {
		return user;
	}

	public void setUser(SecurityUser user) {
		this.user = user;
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

	public CategoryType getCategory() {
		return category;
	}

	public void setCategory(CategoryType category) {
		this.category = category;
	}

	public Set<Faq> getFaqs() {
		return faqs;
	}

	public void setFaqs(Set<Faq> faqs) {
		this.faqs = faqs;
	}

	public Set<Update> getUpdates() {
		return updates;
	}

	public void setUpdates(Set<Update> updates) {
		this.updates = updates;
	}

	public Set<Donation> getDonations() {
		return donations;
	}

	public void setDonations(Set<Donation> donations) {
		this.donations = donations;
	}



	public Set<Commentar> getComments() {
		return comments;
	}


	public void setComments(Set<Commentar> comments) {
		this.comments = comments;
	}
	
	
	

}
