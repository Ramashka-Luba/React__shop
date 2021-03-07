
const Link = (props) => {
	return (
		<a
			className={props.className}
			style={props.style}
			href={props.to}
		>
			{props.value}
		</a>
	);
}

export default Link;