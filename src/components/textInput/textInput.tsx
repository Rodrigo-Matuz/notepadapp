import "./textInput.css";

function TextInput() {
    return (
        <>
            <textarea
                aria-label="Text Area"
                autoFocus={true}
                className="text-area"></textarea>
        </>
    );
}
export default TextInput;
