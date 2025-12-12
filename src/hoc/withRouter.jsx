import { useParams, useNavigate, useLocation } from "react-router-dom";

export function withRouter(Component) {
    return function ComponentWithRouterProp(props) {
        let params = useParams();
        let navigate = useNavigate();
        let location = useLocation();

        return (
            <Component
                { ...props }
                router={ {params, navigate, location} }
            />
        );
    };
}
