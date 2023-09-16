import React, { useState } from 'react';
import '../styles/Faqs.css';
import downChevron from '../images/down-chevron-white.svg';
import upChevron from '../images/up-chevron-white.svg';



const Faqs = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            // Close the accordion if it's already open
            setActiveIndex(null);
        } else {
            // Open the clicked accordion
            setActiveIndex(index);


            // Wait for a moment before expanding to ensure smooth transition
            setTimeout(() => {
                const answerElements = document.querySelectorAll('.faq-answer');
                if (answerElements && answerElements[index]) {
                    answerElements[index].style.maxHeight = answerElements[index].scrollHeight + 'px';
                }
            }, 10); // Adjust the delay as needed
        }
    };



    const handleOnClick = () => {
    };

    return (
        <div className="faq-container" id="faq-section" >
            <h2>Frequently Asked Questions</h2>
            <div className="faq-items">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <div
                            className="faq-header"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">{faq.question}</div>
                            <div className="faq-chevron" >
                                <img src= {activeIndex === index ? upChevron : downChevron} alt="Dropdown Chevron" />
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer"
                                >
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button
                onClick={() => {
                    handleOnClick();
                }}
                className="get-started"
            >
                Get Started!
            </button>
        </div>
    );
};

export default Faqs;
