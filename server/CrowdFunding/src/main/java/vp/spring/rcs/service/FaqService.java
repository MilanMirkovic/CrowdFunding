package vp.spring.rcs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.spring.rcs.data.FaqRepository;
import vp.spring.rcs.model.Faq;

@Component
public class FaqService {

	@Autowired
	FaqRepository faqRepository;
	
	public Faq getOne(Long id) {
		return faqRepository.getOne(id);
	}
	
	public Faq save(Faq faq) {
		return faqRepository.save(faq);
	}
	
	public void delete(Faq faq) {
		faqRepository.delete(faq);
	}
}
