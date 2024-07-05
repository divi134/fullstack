import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import createroom from "../filter-buttons/createroom.jsx"
import MODERN_BROWSERSLIST_TARGET from "next/dist/shared/lib/modern-browserslist-target.js";
// import { Link } from "react-scroll";
import Creation from "../filter-buttons/createroom.jsx";



const CreateRoomForm = ({ onSubmit }) => {
    const [teamName, setTeamName] = useState("");
    const [numMembers, setNumMembers] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ teamName, numMembers });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Enter Team Name" required />
            <input type="number" value={numMembers} onChange={(e) => setNumMembers(e.target.value)} placeholder="Enter Number of Members" required />
            <button type="submit">Submit</button>
        </form>
    );
};

const JoinRoomForm = ({ onSubmit }) => {
    const [teamName, setTeamName] = useState("");
    const [teamId, setTeamId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ teamName, teamId });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Enter Team Name" required />
            <input type="text" value={teamId} onChange={(e) => setTeamId(e.target.value)} placeholder="Enter Team ID" required />
            <button type="submit">Submit</button>
        </form>
    );
};

const FilterButtons = ({ filterHandler }) => {
    const [active, setActive] = useState(null);

    const activeHandler = (filterKey) => {
        setActive(filterKey);
        filterHandler(filterKey);
    };

    const handleSubmitCreateRoom = (formData) => {
        console.log("Create Room Form Data:", formData);
        //sendCreateRoomFormData(formData);
        // You can handle the form submission logic here
    };

    const handleSubmitJoinRoom = (formData) => {
        console.log("Join Room Form Data:", formData);
        sendJoinRoomFormData(formData);
        // You can handle the form submission logic here
    };
    
    return (
        <div className="button-group isotop-filter filters-button-group d-flex justify-content-center mt_md--30 mt_sm--30">
            <div className="card" style={{ width: "200px", height: "100px", backgroundColor: "#00FFFF", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s ease-in-out" }}>
                <button
                    type="button"
                    className={clsx("button", active === "create" && "is-checked")}
                    onClick={() => activeHandler("create")}
                    style={{ backgroundColor: "transparent", border: "none", color: "#333", fontSize: "18px", cursor: "pointer", outline: "none" .replace,
            }}
                >
                    Create Room
                </button>
            </div> &nbsp; &nbsp;
            <div className="card" style={{ width: "200px", height: "100px", backgroundColor: "#00FFFF", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s ease-in-out" }}>
                <button
                    type="button"
                    className={clsx("button", active === "join" && "is-checked")}
                    onClick={() => activeHandler("join")}
                    style={{ backgroundColor: "transparent", border: "none", color: "#333", fontSize: "18px", cursor: "pointer", outline: "none" }}
                >
                    Join Room
                </button>
            </div>
            {active === "create" && <CreateRoomForm onSubmit={handleSubmitCreateRoom} />}
            {active === "join" && <JoinRoomForm onSubmit={handleSubmitJoinRoom} />}
        </div>
    );
};

FilterButtons.propTypes = {
    filterHandler: PropTypes.func.isRequired,
};

export default FilterButtons;
