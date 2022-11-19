import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


// aqui va la condicion puede ser una ocndicion de cualquier tipo, lo que 
// importa es que valide si el usuario esta logueado o no 
const ProtectedRoutes = () => {

    const name = useSelector(state => state.pokeName)

    if(name !== "") {
        return <Outlet />
    }else {
        return <Navigate to='/' />
    }
};

export default ProtectedRoutes