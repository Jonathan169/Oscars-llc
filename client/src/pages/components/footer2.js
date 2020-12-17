import React from 'react';


function footer2() {
	return (<a href="/contact" className="text-decoration-none">
		<div className="footer2">
				
			<p className="text-center">
				<img className="svg3" src={process.env.PUBLIC_URL + "/assets/images/phone-alt.svg"} />
				REQUEST A CONSULTATION
			</p>
		</div>
	</a>)
}
export default footer2