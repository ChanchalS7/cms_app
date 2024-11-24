import PropTypes from "prop-types"; // Import PropTypes
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

const QuillEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["link"],
          [{ align: [] }],
          ["image"],
          ["blockquote"],
        ],
      }}
      theme="snow"
    />
  );
};

// Define PropTypes for the component
QuillEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuillEditor;
