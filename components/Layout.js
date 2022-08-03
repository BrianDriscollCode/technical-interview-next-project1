import Banner from "./Banner"


const Layout = ( {children} ) => {

    return (

        <>
        
        <Banner />
        <div> {children} </div>
         

        </>

    )

}

export default Layout;