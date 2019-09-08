package vp.spring.rcs.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(catalog="crowdfunding")
public class Update {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	private String updateDescription;
	private Date date;
	
	@ManyToOne
	private Project project;

	public Update(Long id, String updateDescription, Date date, Project project) {
		super();
		this.id = id;
		this.updateDescription = updateDescription;
		this.date = date;
		this.project = project;
	}

	public Update() {
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

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}
	
	
}
