export default function FoodMenu() {
  return (
    <div className="mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/food-menu/cover.png"
          alt="Food Menu Cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="/image/food-menu/coverOverGradient.png"
          alt="Food Menu Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <h1
          className="relative z-20 text-white text-7xl font-normal"
          style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
        >
          TABULAR – FOOD
        </h1>
      </div>
      <div className="w-full flex flex-col items-center py-20 px-4">
        <h2
          className="text-5xl font-normal mb-12 text-center"
          style={{
            fontFamily: "Gideon Roman, serif",
            letterSpacing: 1,
          }}
        >
          FOOD MENU TRINS 7th April to 13th April
        </h2>
        <div className="overflow-x-auto w-full flex">
          <table className="min-w-[1100px] border-separate border-spacing-2" style={{width: "max-content", margin: "auto"}}>
            <thead>
              <tr>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>DAY & DATE</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Monday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Tuesday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Wednesday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Thursday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Friday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Saturday</th>
                <th className="bg-[#085038] text-white text-xl font-semibold px-8 py-4 text-center" style={{fontFamily: 'Gideon Roman'}}>Sunday</th>
              </tr>
            </thead>
            <tbody>
              {[
                'Break fast',
                'Morning snacks',
                'Lunch',
                'Evening Snacks',
                'Dinner',
                'Post-Dinner',
              ].map((meal, idx) => (
                <tr key={meal}>
                  <td className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>{meal}</td>
                  {[...Array(7)].map((_, i) => (
                    <td key={i} className="bg-[#E4E4E4] text-lg font-medium px-8 py-4 text-center shadow-md" style={{fontFamily: 'Gideon Roman'}}>{meal}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
