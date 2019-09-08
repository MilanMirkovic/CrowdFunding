package vp.spring.rcs.web.dto;

import vp.spring.rcs.model.Faq;

public class FaqDTO {

	Long id;
	private String question;
	private String answer;
	private ProjectDTO project;
	
	public FaqDTO(Faq faq) {
		this.id=faq.getId();
		this.project=new ProjectDTO(faq.getProject());
		this.answer=faq.getAnswer();
		this.question=faq.getQuestion();
	}


	public FaqDTO() {
		super();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getQuestion() {
		return question;
	}


	public void setQuestion(String question) {
		this.question = question;
	}


	public String getAnswer() {
		return answer;
	}


	public void setAnswer(String answer) {
		this.answer = answer;
	}


	public ProjectDTO getProject() {
		return project;
	}


	public void setProject(ProjectDTO project) {
		this.project = project;
	}
	
	
	
	
}
