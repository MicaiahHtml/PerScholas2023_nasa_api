
export default function NasaResult(props) {
    console.log("in nasa result")
    console.log(props)
    return (
    <div className="NasaResult">
        <img src = { props.url }  />
        <h2> { props.title } </h2>
        <p> { props.date } </p>
    </div>
    )
}
