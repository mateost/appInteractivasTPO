import { Navigate } from "react-router-dom";

const Protected = ({  children, tipo }) => {
    const isLoggedIn = localStorage.getItem("token");
    const tipoUsuario = localStorage.getItem("tipo");
    if (!isLoggedIn) {
        return <Navigate to="/auth/login" replace />;
    } else {
        if (tipoUsuario !== tipo) {
            return <Navigate to={"/" + tipoUsuario +"/" } replace />;
        }
        return children;
    }
};

export default Protected;
