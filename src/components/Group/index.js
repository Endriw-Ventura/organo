import Card from "../Card";
import hexToRgba from "hex-to-rgba";
import "./Group.css";

function Group({ color, name, users, deleteUser, changeColor }) {
  return (
    users.length > 0 && (
      <section
        className="group"
        style={{ backgroundColor: hexToRgba(color, "0.5") }}
      >
        <input type="color" value={color} onChange={changeColor}></input>
        <h3 style={{ borderBottomColor: color }}>{name}</h3>
        <div className="groupup">
          {users.map((user) => (
            <Card
              key={user.id}
              name={user.name}
              field={user.field}
              color={color}
              image={user.image}
              deleteUser={() => deleteUser(user.id)}
            />
          ))}
        </div>
      </section>
    )
  );
}

export default Group;
