import { HeaderOnly } from '@/components/Layouts';
import Search from '@/pages/Search';

// layout
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/Profile';
import Upload from '@/pages/Upload';
// public Routes

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload ,layout : HeaderOnly},
    { path: '/search', component: Search ,layout : null},
 
];

export const privateRoutes = [];
