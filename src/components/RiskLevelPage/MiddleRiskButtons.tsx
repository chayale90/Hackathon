import { useNavigate } from "react-router-dom";
import { FullButton, BorderButton } from "../CustomComponents/Button";


const MiddleRiskButtons = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="inline-btns">
                <FullButton>צעדים מקדימים</FullButton>
                <BorderButton>לקריאת סיפורי נשים במצב שלי</BorderButton>
            </div>
            <FullButton onClick={()=>{navigate("/LegalAid")}}>סיוע משפטי</FullButton>
        </div >
    )
}

export default MiddleRiskButtons;
