const App = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
				<h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
					Welcome to Flashpack
				</h1>
				<p className="text-gray-600 text-center mb-6">
					Tailwind CSS is now set up and working! 🎉
				</p>
				<div className="flex justify-center">
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
