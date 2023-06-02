interface NavItem {
  path: string;
  title: string;
  icon?: string;
}

const links: NavItem[] = [
  { path: 'alumnos', title: 'Estudiantes', icon: 'school' },
  {
    path: 'cursos',
    title: 'Cursos',
    icon: 'menu_book',
  },
];

export default links;
