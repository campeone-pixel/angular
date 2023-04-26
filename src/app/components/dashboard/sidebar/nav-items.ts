interface NavItem {
    path: string,
    title: string,
    icon?:string
}


const links : NavItem[]= [
    {path:'alumnos',
title:"Estudiantes",
icon:'person' },
{
    path:'cards',
    title:"Cards",
    icon:"dashboard_customize"
}
]


export default links