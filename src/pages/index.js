import { Route,Routes} from 'react-router-dom'
import './index.css';
import Head from '../component/head';
import Home from '../component/home';
import History from '../component/history';
import Horms from '../component/forms';
import Past from '../component/past';
import Contact from '../component/contact';
import App from '../../src/App';

function Index() {
    return (
        <div className="box">
            <Head></Head>
            <div>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/forms" element={<Horms/>}/>
            <Route path="/past" element={<Past/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/appfrom" element={<App/>}/>
            </Routes>
            </div>
        </div>
    )
}

export default Index;
