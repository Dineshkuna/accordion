import React, { useState } from "react";
import "./FormBuilder.css";

const initialFieldOptions = [
  { id: "input", label: "Text Input" },
  { id: "textarea", label: "Textarea" },
  { id: "select", label: "Dropdown" },
  { id: "checkbox", label: "Checkbox" },
  { id: "radio", label: "Radio Button" },
];

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [draggingField, setDraggingField] = useState(null);

  const handleDragStart = (field) => {
    setDraggingField(field);
  };

  const handleDrop = () => {
    if (draggingField) {
      setFormFields((prevFields) => [
        ...prevFields,
        { ...draggingField, name: `${draggingField.id}_${Date.now()}` },
      ]);
      setDraggingField(null);
    }
  };

  const handleFieldChange = (index, event) => {
    const updatedFields = [...formFields];
    updatedFields[index].label = event.target.value;
    setFormFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    setFormFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const renderFieldPreview = (field, index) => {
    switch (field.id) {
      case "input":
        return <input type="text" placeholder="Text Input" disabled />;
      case "textarea":
        return <textarea placeholder="Textarea" disabled />;
      case "select":
        return (
          <select disabled>
            <option>Dropdown</option>
          </select>
        );
      case "checkbox":
        return (
          <label>
            <input type="checkbox" disabled /> Checkbox
          </label>
        );
      case "radio":
        return (
          <label>
            <input type="radio" disabled /> Radio Button
          </label>
        );
      default:
        return null;
    }
  };

  const renderForm = () => {
    return (
      <form>
        {formFields.map((field, index) => (
          <div key={field.name} className="form-group">
            <label>{field.label}</label>
            {renderFieldPreview(field, index)}
          </div>
        ))}
      </form>
    );
  };

  return (
    <div className="form-builder">
      <div className="sidebar">
        <h3>Field Options</h3>
        <div className="field-options">
          {initialFieldOptions.map((field) => (
            <div
              key={field.id}
              className="field-option"
              draggable
              onDragStart={() => handleDragStart(field)}
            >
              {field.label}
            </div>
          ))}
        </div>
      </div>

      <div
        className="form-preview"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <h3>Form Preview</h3>
        {formFields.length > 0 ? (
          <div>
            {formFields.map((field, index) => (
              <div key={index} className="form-item">
                <input
                  type="text"
                  value={field.label}
                  onChange={(e) => handleFieldChange(index, e)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveField(index)}
                >
                  Remove
                </button>
                {renderFieldPreview(field, index)}
              </div>
            ))}
          </div>
        ) : (
          <p>Drag and drop fields here</p>
        )}
      </div>

      <div className="form-render">
        <h3>Generated Form</h3>
        {renderForm()}
      </div>
    </div>
  );
};

export default FormBuilder;
