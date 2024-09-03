import React, { useState } from "react";
import './Accordion.css'

const data = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided the item is in its original condition.",
  },
  {
    id: 2,
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website to monitor your shipment's progress.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times may vary based on your location.",
  },
  {
    id: 4,
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or call us at (123) 456-7890 between 9 AM and 5 PM EST, Monday through Friday.",
  },
  {
    id: 5,
    question: "Can I change or cancel my order after it's been placed?",
    answer:
      "Yes, you can modify or cancel your order within 24 hours of placing it by contacting our support team. After this period, we may not be able to make changes if the order has already been processed.",
  },
];

const Accordion = () => {

  const [selected, setSelected] = useState(null);

  const handleSection = (getAnswer) => {
    setSelected((perviousSelected) => (perviousSelected === getAnswer ? null : getAnswer))
};

  return (
    <div className="container">
      {data.map((item,index) => (
        
        <div key={index} className="heading">
          <span className="symbol">+</span>
          <h3 onClick={()=>handleSection(item.id)}>{item.question}</h3>
          
          
          {
            selected === item.id && <div className="answer"><p >{item.answer}</p></div>
          }
        </div>
      ))}
      
    </div>
    
  );
};

export default Accordion;
