import React from 'react';

const MainBar = ({ onChatText, value, onChatTextSubmit, chat, show }) => {
	const renderChat = chat.map(msg => (
		// console.log("Your Msg",msg)
		<p>{msg.msg}</p>
	))
	return (
		<div>
			{show && show !=='' && show !== null ? 
			<div>
				<div>
					{renderChat}
					</div>
						<div style={{position:"absolute",bottom:"30px",width:"100%"}}>
							<input 
							onChange={onChatText}
							value={value}
							onKeyDown={onChatTextSubmit}
							className="form-control"
							type="text"
							placeholder="Enter Your Message"
							/>
					</div>
			</div> : <div className="mx-auto" style={{width:"300px"}}><img className="pl-5 pt-5 ml-5" src="/pictures/2.png" /></div>}
		</div>
	);
};

export default MainBar;