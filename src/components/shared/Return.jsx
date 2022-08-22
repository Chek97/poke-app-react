import { useNavigate } from "react-router-dom"

export const Return = () => {

    const navigate = useNavigate();

    const handleReturn = () => navigate(-1);

    return (
        <button className="btn btn-danger rounded" onClick={handleReturn}>Regresar</button>
    )
}
