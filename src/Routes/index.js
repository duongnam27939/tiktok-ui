import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/Profile';
import Upload from '@/pages/Upload';
// layout
import { HeaderOnly } from '@/components/Layouts';
import Search from '@/pages/Search';

// public Routes

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload ,layout : HeaderOnly},
    { path: '/search', component: Search ,layout : null},
 
];

export const privateRoutes = [];
