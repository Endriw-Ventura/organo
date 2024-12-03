import { ITeam } from "../../shared/interfaces/ITeam";
import "./DropDownList.css";

interface DropDownListProps {
  value: string,
  label: string,
  customEvent: (value: string) => void,
  teams: ITeam[]
}

function DropDownList({ value, customEvent, label, teams } : DropDownListProps) {
  return (
    <div className="dropdownlist">
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => customEvent(event.target.value)}
      >
        {teams.map((team) => (
          <option key={team.id.toString()}>{team.name}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDownList;
