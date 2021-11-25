
const Student = (props) => {
    // console.log(props) {name="Erick", age="54"}
    return(
        <div>
            {props.name}
            {props.age}
        </div>
    )
}

export default Student