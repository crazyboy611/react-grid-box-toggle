export default function Box(props) {
    const style = {
        backgroundColor: props.on ? "red" : "white"
    }
    return (
        <div 
            className="box" 
            style={style} 
            onClick={props.toggle}>
        </div>
    )
}