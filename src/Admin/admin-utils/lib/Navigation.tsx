
import {
	HiOutlineViewGrid,
	HiOutlineBookOpen,
	HiOutlineDocumentText,
	HiOutlineCollection,
	HiOutlineAnnotation,
	HiOutlineCog,
    HiOutlineArchive
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin-layout',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'blogsadmin',
		label: 'Blogs',
		path: 'blogs-admin',
		icon: <HiOutlineBookOpen />
	},
	{
		key: 'volunteer',
		label: 'Volunteer',
		path: 'volunteer',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'layout',
		label: 'Layout',
		path: 'layouts',
		icon: <HiOutlineCollection />
	},
	{
		key: 'comments',
		label: 'Comments',
		path: 'comments',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'admin-controls',
		label: 'Admin-controls',
		path: 'admin-controls',
		icon: <HiOutlineCog />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'logout',
		label: 'Logout',
		path:  'login',
		icon: <HiOutlineCog />
	},
	
]