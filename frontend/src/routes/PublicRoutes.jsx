import About from "../components/About";
import Greetings from "../components/Greetings";
import Introduction from "../components/Introduction";
import LandingPage from "../components/LandingPage";


const PublicRoutes = [
   
    {path: '/member', exact: true, name: "member", component: LandingPage},
    {path: '/introduction', exact: true, name: "introduction", component: Introduction},
    


];

export default PublicRoutes;