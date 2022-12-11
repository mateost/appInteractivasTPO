import navigate from "navigate";
import { useNavigate, useDispatch, useEffect } from "react";

export default () => {

    localStorage.clear();
    const navigate = useNavigate();
    navigate("/");
  
    return true;
  };