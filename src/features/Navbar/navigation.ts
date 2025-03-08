export enum NavbarItemPath {
    home = 'home',
    about_me = 'about-me',
    projects = 'projects',
    technical_experties = 'technical-experties',
    contact_me = 'contact-me'
}

export const NavbarItems = [
    {
        id:1,
        path: NavbarItemPath.home,
        title: 'Home'
    },
    {
        id:2,
        path: NavbarItemPath.about_me,
        title: 'About Me'
    },
    {
        id:3,
        path: NavbarItemPath.projects,
        title: 'Projects'
    },
    {
        id:4,
        path: NavbarItemPath.technical_experties,
        title: 'Technical Experties'
    },
    {
        id:5,
        path: NavbarItemPath.contact_me,
        title: 'Contact Me'
    },
]