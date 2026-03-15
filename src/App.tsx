// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import WebMobileDevelopment from './pages/services/WebMobileDevelopment';
import ITConsultingDigital from './pages/services/ITConsultingDigital';
import AgileDevOpsConsulting from './pages/services/AgileDevOpsConsulting';
import FrontendTechnologies from './pages/Technologies/FrontendTechnologies';
import BackendTechnologies from './pages/Technologies/BackendTechnologies'; 
import MobileTechnologies from './pages/Technologies/MobileTechnologies';
import CloudDevOpsTechnologies from './pages/Technologies/CloudDevOpsTechnologies'; 
import DatabaseTechnologies from './pages/Technologies/DatabaseTechnologies';
import OurProduct from './pages/OurProduct';
import KeyProjects from './pages/KeyProjects';
import Company from './pages/About/Company';
import Recognition from './pages/About/Recognition';
import Approach from './pages/About/Approach';
import JoinUs from './pages/About/JoinUs';
import Industries from './pages/Industries/Industries';
import IndustryPage1 from './pages/Industries/IndustryPage1';
import IndustryPage2 from './pages/Industries/IndustryPage2';
import IndustryPage3 from './pages/Industries/IndustryPage3';   
import IndustryPage4 from './pages/Industries/IndustryPage4';
import IndustryPage5 from './pages/Industries/IndustryPage5';
import DataSolutions from './pages/services/DataAnalyticsWarehouse';
import MachineLearningAI from './pages/services/MachineLearningAI';
import APIDevelopment from './pages/services/APIDevelopment';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Add more routes later */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/services/software-development" element={<SoftwareDevelopment />} />
           <Route path="/services/web-mobile-development" element={<WebMobileDevelopment />} />
           <Route path="/services/it-consulting-digital" element={<ITConsultingDigital />} />
           <Route path="/services/agile-devops-consulting" element={<AgileDevOpsConsulting />} />
           <Route path="/technologies/frontend" element={<FrontendTechnologies />} />
           <Route path="/technologies/backend" element={<BackendTechnologies />} />
           <Route path="/technologies/mobile" element={<MobileTechnologies />} />
           <Route path="/technologies/cloud-devops" element={<CloudDevOpsTechnologies />} />
           <Route path="/technologies/database" element={<DatabaseTechnologies />} />
            <Route path="/our-product" element={<OurProduct />} />
            <Route path="/key-projects" element={<KeyProjects />} />
              <Route path="/company" element={<Company />} />
              <Route path="/recognition" element={<Recognition />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/healthcare-fintech" element={<IndustryPage1 />} />
              <Route path="/industries/retail-media" element={<IndustryPage2 />} />
              <Route path="/otherindustries" element={<IndustryPage3 />} />
              <Route path="/industries/politics" element={<IndustryPage4 />} />
              <Route path="/industries/travel-restaurants" element={<IndustryPage5 />} />
              <Route path="/services/data-analytics-warehouse" element={<DataSolutions />} />
              <Route path="/services/machine-learning-ai" element={<MachineLearningAI />} />
              <Route path="/services/api-development" element={<APIDevelopment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;