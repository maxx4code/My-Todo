import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  return (
    <div className="switchContainer">
        Dark Mode
      <label className="switch">
        <input type="checkbox" onClick={props.toggleMode}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
