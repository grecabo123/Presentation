import About from "../components/About";
import Greetings from "../components/Greetings";
import Introduction from "../components/Introduction";
import LandingPage from "../components/LandingPage";


const PublicRoutes = [
    {path: '/', exact: true, name: "Index", component: Greetings},
    {path: '/member', exact: true, name: "member", component: LandingPage},
    {path: '/introduction', exact: true, name: "introduction", component: Introduction},
    {path: '/example', exact: true, name: "Example", component: Introduction},


];

export default PublicRoutes;