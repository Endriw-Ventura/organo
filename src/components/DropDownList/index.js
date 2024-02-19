import "./DropDownList.css";

function DropDownList({ value, customEvent, label, teams }) {
  return (
    <div className="dropdownlist">
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => customEvent(event.target.value)}
      >
        {teams.map((team) => (
          <option key={team.id}>{team.name}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDownList;
