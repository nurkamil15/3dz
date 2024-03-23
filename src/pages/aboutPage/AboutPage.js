const  AboutPage = ({object}) => {
    console.log(object.title)
    return(
        <>
            <h2>hello</h2>
            <h1>{object.title}</h1>
            <p>{object.description}</p>
        </>
    )
}

export default AboutPage