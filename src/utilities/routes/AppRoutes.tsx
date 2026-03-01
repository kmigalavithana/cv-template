import React from 'react';
import {Route, Routes} from "react-router";
import CVTemplateSection from "../../components/CvTemplate/CVTemplateSection.tsx";
import UserSignIn from "../../components/Signin/UserSignIn.tsx";

const AppRoutes:React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<UserSignIn />}/>
            <Route path='/cv-template' element={<CVTemplateSection />}/>

        </Routes>
    );
};

export default AppRoutes;
