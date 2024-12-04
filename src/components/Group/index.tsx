import Card from "../Card";
import hexToRgba from "hex-to-rgba";
import "./Group.css";
import { IUser } from "../../shared/interfaces/IUser";

interface GroupProps{
  color: string,
  name: string,
  deleteUser: (id: string) => void,
  changeColor: (color: string) => void;
  users: IUser[]
}

function Group({ color, name, users, deleteUser, changeColor } : GroupProps) {
  return (
    users.length > 0 ? (
      <section
        className="group"
        style={{ backgroundColor: hexToRgba(color, "0.5") }}
      >
        <input type="color" value={color} onChange={(event) => changeColor(event.target.value)}></input>
        <h3 style={{ borderBottomColor: color }}>{name}</h3>
        <div className="groupup">
          {users.map((user) => (
            <Card
              key={user.id.toString()}
              name={user.name}
              field={user.field}
              color={color}
              image={user.image}
              deleteUser={() => deleteUser(user.id)}
            />
          ))}
        </div>
      </section>
    ) : <></>
  );
}

export default Group;
