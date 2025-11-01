interface UploadFormProps {
	onFolderSelect?: (folderPath: string) => void;
	value?: string;
}

const UploadForm = ({ onFolderSelect, value, ...props }: UploadFormProps) => {
	const handleSelectFolder = async () => {
		try {
			const result = await window.api.dialog.showOpenDialog({
				properties: ["openDirectory"],
				title: "Select Folder",
			});

			if (!result.canceled && result.filePaths.length > 0) {
				const folderPath = result.filePaths[0];
				onFolderSelect?.(folderPath);
			}
		} catch (error) {
			console.error("Error selecting folder:", error);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			{/* 		NOTE:	<Input on click input opens dialog to select folder
				placeholder="Select folder..."
				value={value || ""}
				onClick={handleSelectFolder}
				className="cursor-pointer"
			/> */}
			<button
				type="button"
				onClick={handleSelectFolder}
				className="p-2 m-5 border rounded hover:bg-gray-100"
				{...props}
			>
				Select Folder
			</button>
		</div>
	);
};

export default UploadForm;
