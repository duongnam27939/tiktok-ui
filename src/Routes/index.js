
import routesConfig from '@/config/routes'


import { HeaderOnly } from '@/components/Layouts';
import Search from '@/pages/Search';

// layout
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/Profile';
import Upload from '@/pages/Upload';
// public Routes

export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload ,layout : HeaderOnly},
    { path: routesConfig.search, component: Search ,layout : null},
 
];

export const privateRoutes = [];
