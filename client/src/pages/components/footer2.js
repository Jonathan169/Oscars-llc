import React from 'react';


class footer2 extends React.Component {
	render(){ return (
	<>
	<div id="wpac-google-review"></div>
	<a href="/contact" className="text-decoration-none">
		<div className="footer2">
			{/* <div className="col-6">
				<p className="text-center">
					<img className="svg4" src={process.env.PUBLIC_URL + "/assets/images/phone-alt.svg"} />
					REQUEST A CONSULTATION
				</p>
			</div>
			<div className="col-6">
				<div id="wpac-google-review"></div>
			</div> */}
			<p className="text-center">
					<img className="svg3" src={process.env.PUBLIC_URL + "/assets/images/phone-alt.svg"} />
					REQUEST A CONSULTATION
				</p>
		</div>
	</a>
	</>
	)}
}
export default footer2