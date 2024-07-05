const FilterButtons = ({ filterHandler }) => {
    const [active, setActive] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false); // State to manage showing the Create Room form

    const activeHandler = (filterKey) => {
        setActive(filterKey);
        filterHandler(filterKey);
        // When "Create Room" is selected, show the Create Room form
        if (filterKey === 'create') {
            setShowCreateForm(true);
        } else {
            setShowCreateForm(false);
        }
    };

    const handleSubmitCreateRoom = (formData) => {
        console.log("Create Room Form Data:", formData);
        // sendCreateRoomFormData(formData);
        // You can handle the form submission logic here
        // After submission, you might want to reset the active state and hide the form
        setActive(null);
        setShowCreateForm(false);
    };

    const handleSubmitJoinRoom = (formData) => {
        console.log("Join Room Form Data:", formData);
        // sendJoinRoomFormData(formData);
        // You can handle the form submission logic here
    };

    return (
        <div className="button-group isotop-filter filters-button-group d-flex justify-content-center mt_md--30 mt_sm--30">
            <div className="card" style={{ width: "200px", height: "100px", backgroundColor: "#00FFFF", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", transition: "box-shadow 0.3s ease-in-out" }}>
                <button
                    type="button"
                    className={clsx("button", active === "create" && "is-checked")}
                    onClick={() => activeHandler("create")}
                    style={{ backgroundColor: "transparent", border: "none", color: "#333", fontSize: "18px", cursor: "pointer", outline: "none" }}
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
            {showCreateForm && <CreateRoomForm onSubmit={handleSubmitCreateRoom} />}
            {active === "join" && <JoinRoomForm onSubmit={handleSubmitJoinRoom} />}
        </div>
    );
};
