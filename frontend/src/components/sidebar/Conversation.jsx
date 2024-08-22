import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { authUser } = useAuthContext();

	const isSelected = selectedConversation?._id === conversation._id;
	const displayName = authUser._id === conversation._id ? "You" : conversation.fullName;

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
				`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic || "/path/to/default-avatar.jpg"} 
							alt={`${conversation.fullName} avatar`}
						/>
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{displayName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};

export default Conversation;
