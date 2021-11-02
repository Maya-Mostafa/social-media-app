import MenuBar from './MenuBar'

interface Props{
    children: React.ReactNode;
}

const Layout : React.FC <Props> = ({children}) => {
    return (
        <>
            <MenuBar/>
            {children}
        </>
    )
}

export default Layout
